// app/api/webinars/route.js
// WordPress-backed webinars API. Webinars are managed entirely in WordPress
// as a "Webinar" custom post type — see app/lib/wordpress.js for the
// required ACF field contract (webinar_date, webinar_price, webinar_speaker,
// webinar_speaker_bio, webinar_live).

import { fetchWPWebinars, fetchWPWebinarBySlug } from "../../lib/wordpress";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const wpWebinar = await fetchWPWebinarBySlug(id);
      if (wpWebinar) {
        return new Response(JSON.stringify(wpWebinar), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "Webinar not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const webinars = await fetchWPWebinars({ perPage: 30 });

    return new Response(JSON.stringify(webinars), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Webinars API error:", error);
    // Graceful fallback — return empty array rather than 500
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
