<?php
/**
 * Plugin Name: Allow Anonymous REST Comments
 * Description: Enables guest (non-logged-in) comment submission via the
 *              WordPress REST API (/wp-json/wp/v2/comments), used by the
 *              headless Next.js frontend's comment form. Since WP 4.7, the
 *              REST API blocks anonymous comments by default regardless of
 *              the Settings → Discussion checkbox — this filter is the only
 *              way to change that. See:
 *              https://developer.wordpress.org/reference/hooks/rest_allow_anonymous_comments/
 *
 * Install: drop this file in wp-content/mu-plugins/ (create that folder if
 * it doesn't exist). Must-use plugins load automatically — no activation
 * step, and they survive theme changes/updates, unlike editing functions.php.
 */

add_filter( 'rest_allow_anonymous_comments', '__return_true' );
