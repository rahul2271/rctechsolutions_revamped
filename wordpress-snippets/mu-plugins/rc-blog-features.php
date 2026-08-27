<?php
/**
 * RC Tech Solutions — blog features (views, reading time, comments)
 *
 * WHY THIS FILE EXISTS
 * ---------------------
 * The Next.js site's view counter and comment form both call small custom
 * REST endpoints that only exist once this code is running on WordPress.
 * Without it: the "views" counter has nowhere to persist a number (it will
 * correctly show nothing rather than a fake static number — see
 * app/components/blog/ViewCounter.js), and guest comment submissions fail
 * with `rest_comment_login_required` even with Discussion Settings
 * correctly configured.
 *
 * There is no code-only fix for this on the Next.js side — a real,
 * cross-visitor view count needs *some* persistent backend to count
 * against, and WordPress (via post meta) is that backend. This file is it.
 *
 * HOW TO INSTALL (no plugin activation step, survives theme changes)
 * --------------------------------------------------------------------
 * 1. Connect to your WordPress site's files (hosting file manager, FTP, or
 *    SSH).
 * 2. If it doesn't exist, create the folder: wp-content/mu-plugins/
 * 3. Upload this exact file into that folder, unmodified, as:
 *    wp-content/mu-plugins/rc-blog-features.php
 * 4. That's it. "mu" = must-use — WordPress loads it automatically on
 *    every request, no activation, no dashboard step, and it can't be
 *    accidentally deactivated later.
 * 5. Verify it worked: visit
 *    https://your-wordpress-site.com/wp-json/rc/v1/views/any-post-slug
 *    in a browser. You should get back JSON like {"views":0} — not a 404.
 *
 * WHAT THIS FILE DOES
 * --------------------
 * 1. Registers GET/POST /wp-json/rc/v1/views/{slug} — reads/increments a
 *    real per-post view count stored as post meta (rc_views). This is what
 *    app/api/blogs/views/route.js talks to.
 * 2. Registers a `reading_time` field on the REST posts response — an
 *    optional performance nicety. The Next.js site now computes accurate
 *    reading time from real post content either way, so this isn't
 *    required for correctness, only for shaving a small amount of listing
 *    payload size.
 * 3. Allows anonymous (guest) comment submission via the REST API — fixes
 *    the "you must be logged in to comment" error on blog comments, which
 *    the Discussion Settings checkbox alone does NOT fix (that setting
 *    only affects the legacy wp-comments-post.php form, not the REST API
 *    endpoint this site actually uses).
 */

// --- 1. Real view counter, stored as post meta -----------------------------

add_action('rest_api_init', function () {
    register_rest_route('rc/v1', '/views/(?P<slug>[a-zA-Z0-9-]+)', [
        'methods'             => 'GET',
        'callback'            => 'rc_get_post_views',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('rc/v1', '/views/(?P<slug>[a-zA-Z0-9-]+)', [
        'methods'             => 'POST',
        'callback'            => 'rc_increment_post_views',
        'permission_callback' => '__return_true',
    ]);
});

function rc_get_post_views(WP_REST_Request $request) {
    $post = get_page_by_path($request['slug'], OBJECT, 'post');
    if (!$post) {
        return new WP_REST_Response(['views' => 0], 200);
    }
    $views = (int) get_post_meta($post->ID, 'rc_views', true);
    return new WP_REST_Response(['views' => $views], 200);
}

function rc_increment_post_views(WP_REST_Request $request) {
    $post = get_page_by_path($request['slug'], OBJECT, 'post');
    if (!$post) {
        return new WP_REST_Response(['views' => 0], 404);
    }
    $views = (int) get_post_meta($post->ID, 'rc_views', true);
    $views++;
    update_post_meta($post->ID, 'rc_views', $views);
    return new WP_REST_Response(['views' => $views], 200);
}

// --- 2. Optional reading_time field (small payload win, not required) -----

add_action('rest_api_init', function () {
    register_rest_field('post', 'reading_time', [
        'get_callback' => function ($post_arr) {
            $content = get_post_field('post_content', $post_arr['id']);
            $word_count = str_word_count(wp_strip_all_tags($content));
            // Kept in sync with app/lib/readingTime.js's 238 wpm baseline.
            return max(1, (int) ceil($word_count / 238));
        },
        'schema' => [
            'description' => 'Estimated reading time in minutes',
            'type'        => 'integer',
        ],
    ]);
});

// --- 3. Allow anonymous (guest) comments via the REST API -----------------

add_filter('rest_allow_anonymous_comments', '__return_true');
