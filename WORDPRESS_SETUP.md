# WordPress setup — the site's only backend

The entire site now runs on WordPress as its single CMS/backend. **Firebase
and Firestore have been fully removed** — no Firebase config, no Firestore
reads/writes, no `/admin` panel anywhere in the codebase. Blogs, projects,
and webinars are all managed from your WordPress dashboard; lead capture
and webinar registrations go to SheetDB (same as before); comments and
view counts are handled by small WordPress REST endpoints (below).

## 1. Required environment variable

```
WORDPRESS_URL=https://your-wordpress-site.com   # no trailing slash
```

Already set in `.env.local`. For a private/staging WP site, also set:

```
WORDPRESS_AUTH=Basic base64(user:app-password)
```

## 2. How freshness works

- The blog list (`/blogs`) and homepage "Recent issues" refetch WordPress
  every **5 minutes**.
- A single post page (`/blogs/[slug]`) refetches every **2 minutes**.
- So worst case, a new post appears within 5 minutes and a delete clears
  within 5 minutes, with zero extra setup.

## 3. Instant updates (recommended) — the revalidation webhook

`/api/revalidate` already exists in this project. Wire WordPress to call it
on publish, update, trash, **and permanent delete**, and changes show up on
the site within seconds instead of minutes.

Full setup instructions, including the exact `functions.php` snippet with
the trash/delete hooks, are documented at the top of:

```
app/api/revalidate/route.js
```

**Important:** the previous version of this snippet only fired on publish,
never on trash or delete — that's why deleted posts kept showing up on the
site. The updated snippet in `route.js` fixes this by also hooking
`wp_trash_post` and `before_delete_post`.

Steps:

1. Set `REVALIDATE_SECRET` in `.env.local` to your own random string.
2. Add the PHP snippet from `app/api/revalidate/route.js` to your WordPress
   theme's `functions.php` (or a small custom plugin, so it survives theme
   updates).
3. Test it: visit `/api/revalidate` in a browser — it should return
   `{"status":"ok", ...}`.
4. Publish, edit, and delete a test post in WordPress and confirm `/blogs`
   updates within a few seconds.

## 4. If deletes still look stale after the webhook is wired up

That means something is caching the WordPress REST API response itself,
outside of Next.js — most commonly:

- A WP caching plugin (WP Super Cache, W3 Total Cache, LiteSpeed Cache, etc.)
- A CDN in front of WordPress (Cloudflare, Hostinger's built-in CDN, etc.)

Either purge cache on delete, or exclude `/wp-json/` from the cache rules,
since that's the endpoint this site reads from.

## 6. Blog revamp — reading time, comments, categories (new)

This adds a fast reading-time field, native WordPress comments, dynamic
category filters, and author avatars/bios to the Journal section.

### 6a. Reading time — `functions.php` snippet (required for the perf fix)

Previously `/blogs` computed reading time by fetching the **full HTML body**
of up to 60 posts on every load — this was the main cause of the slow
"Journal" page. Now the listing page requests a small `reading_time` field
instead of the post body. Add this to your WordPress theme's
`functions.php` (or a small custom plugin):

```php
// Expose a lightweight reading_time field on posts, computed once and
// cached with the post content — Next.js no longer needs to download the
// full post body just to show "X min read" on the blog listing.
add_action('rest_api_init', function () {
  register_rest_field('post', 'reading_time', [
    'get_callback' => function ($post_arr) {
      $content = get_post_field('post_content', $post_arr['id']);
      $word_count = str_word_count(wp_strip_all_tags($content));
      return max(1, (int) ceil($word_count / 200));
    },
    'schema' => [
      'description' => 'Estimated reading time in minutes',
      'type'        => 'integer',
    ],
  ]);
});
```

If you skip this step, nothing breaks — the code falls back to computing
reading time from the full content on the post detail page (which already
fetches the full body anyway), it just won't show on the listing grid
until the snippet is added.

### 6b. Comments — enable anonymous commenting (no plugin needed)

Comments now render natively from WordPress via `/wp-json/wp/v2/comments`,
proxied through `app/api/blogs/comments/route.js` (keeps your WP auth
private and verifies reCAPTCHA before anything reaches WordPress).

In WordPress: **Settings → Discussion**
- ✅ "Allow people to submit comments on new posts"
- ⬜ "Users must be registered and logged in to comment" — leave this OFF
- Consider turning ON "Comment must be manually approved" if you want to
  moderate before anything goes live (recommended to start).

New comments will show a "your comment is awaiting moderation" message to
the visitor when this is on, and appear on the site once you approve them
from WordPress → Comments.

### 6c. Dynamic categories

The category filter pills on `/blogs` are pulled live from **Posts →
Categories** in WordPress — create, rename, or delete a category there and
it shows up (or disappears) on the site automatically after the next
5-minute revalidation. Nothing to configure in the codebase.

### 6d. Author avatar & bio

The author card now pulls the WordPress user's avatar (Gravatar, based on
their account email) and their bio automatically. To set a bio: **Users →
[the author] → Biographical Info** in WP admin.

### 6e. reCAPTCHA — set your secret key

Every public form site-wide (lead forms, newsletter, quiz, audit tool,
webinar registration, and now blog comments) now verifies the reCAPTCHA
token **server-side**, not just the client checkbox. Add to `.env.local`
and your Vercel project settings:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
```

Get both from https://www.google.com/recaptcha/admin — same reCAPTCHA v2
("I'm not a robot" checkbox) site used on the web-development landing page.
If `RECAPTCHA_SECRET_KEY` isn't set, the app falls back to allowing
submissions through (with a console warning) so local dev isn't blocked —
make sure it's set in production.

### 6f. View counter — WordPress REST endpoint (replaces Firestore)

The view counter no longer uses Firebase. It stores a simple number as
post meta on each post and reads/writes it through a tiny custom REST
route. Add this to `functions.php` alongside the reading-time snippet:

```php
// Lightweight page-view counter, stored as post meta — no external database.
add_action('rest_api_init', function () {
  register_rest_route('rc/v1', '/views/(?P<slug>[a-zA-Z0-9-]+)', [
    'methods'  => 'GET',
    'callback' => function ($request) {
      $post = get_page_by_path($request['slug'], OBJECT, 'post');
      if (!$post) return new WP_REST_Response(['views' => 0], 200);
      $views = (int) get_post_meta($post->ID, 'rc_views', true);
      return new WP_REST_Response(['views' => $views], 200);
    },
    'permission_callback' => '__return_true',
  ]);

  register_rest_route('rc/v1', '/views/(?P<slug>[a-zA-Z0-9-]+)', [
    'methods'  => 'POST',
    'callback' => function ($request) {
      $post = get_page_by_path($request['slug'], OBJECT, 'post');
      if (!$post) return new WP_REST_Response(['views' => 0], 404);
      $views = (int) get_post_meta($post->ID, 'rc_views', true);
      $views++;
      update_post_meta($post->ID, 'rc_views', $views);
      return new WP_REST_Response(['views' => $views], 200);
    },
    'permission_callback' => '__return_true',
  ]);
});
```

Nothing else to configure — `app/api/blogs/views/route.js` calls this
endpoint automatically. If `WORDPRESS_URL` isn't set, the counter just
quietly returns 0 instead of erroring.

## 7. Projects portfolio — now a WordPress custom post type (replaces Firebase/Firestore)

`/projects` and `/projects/[slug]` no longer read from Firestore, and the
`/admin/projects` panel has been removed — you manage projects directly in
WordPress now, same as blog posts.

### 7a. Register the "Project" custom post type

Add to `functions.php` (or a small custom plugin):

```php
add_action('init', function () {
  register_post_type('projects', [
    'labels' => [
      'name'          => 'Projects',
      'singular_name' => 'Project',
    ],
    'public'       => true,
    'show_in_rest' => true,
    'rest_base'    => 'projects',
    'supports'     => ['title', 'editor', 'thumbnail', 'excerpt'],
    'menu_icon'    => 'dashicons-portfolio',
    'has_archive'  => false,
  ]);
});
```

Use the normal WordPress content editor for the full case-study writeup
(paragraphs render the same way blog content does) and set a Featured
Image for the cover photo shown on the `/projects` cards.

### 7b. Add ACF fields to the Project post type

Create a new ACF field group ("Project Details"), set its location rule to
**Post Type is equal to Project**, turn on **Show in REST API**, and add
these fields (field *names* must match exactly — the labels can be
anything):

| Field name          | Type       | Notes                                           |
|----------------------|-----------|--------------------------------------------------|
| `project_client`     | Text       | e.g. "Singh & Associates" or "Confidential"      |
| `project_industry`   | Text       | e.g. "Legal", "B2B SaaS"                         |
| `project_services`   | Text       | Comma-separated, e.g. "Web Development, SEO"     |
| `project_stack`      | Text       | Comma-separated, e.g. "Next.js, Tailwind, Vercel"|
| `project_summary`    | Text       | The one-line result shown on cards               |
| `project_live_url`   | URL        | Optional link to the live client site            |
| `project_featured`   | True/False | Shows large at the top of `/projects`            |
| `project_gallery`    | Gallery    | Optional extra screenshots beyond the cover image|
| `project_metrics`    | Repeater   | Sub-fields: `metric_value`, `metric_label`       |

That's it — no PHP needed beyond the CPT registration above. `app/lib/wordpress.js` (`fetchWPProjects`, `fetchWPProjectBySlug`) already knows how to read all of these fields.

## 8. Webinars — Firestore removed, WordPress only

The webinar system was already partly WordPress-backed from an earlier
session; the Firestore half has now been removed entirely. Webinars are
managed as a "Webinar" custom post type in WordPress — see the ACF field
contract documented at the top of `app/lib/wordpress.js` (`webinar_date`,
`webinar_price`, `webinar_speaker`, `webinar_speaker_bio`, `webinar_live`).
Registrations (free or paid) continue to be logged to SheetDB, same as
every other lead form on the site — no database needed for that part.

