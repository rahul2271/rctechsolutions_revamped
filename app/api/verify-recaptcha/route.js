// app/api/verify-recaptcha/route.js
// Server-side verification for Google reCAPTCHA v2 tokens.
// A checkbox passing client-side is not proof of anything — the token has to
// be verified against Google's siteverify endpoint using the SECRET key
// (never exposed to the browser). All forms should call this before writing
// to SheetDB/Firestore.
//
// Setup: add RECAPTCHA_SECRET_KEY to your .env.local / Vercel env vars.
// Get it from https://www.google.com/recaptcha/admin (same site as the
// public NEXT_PUBLIC_RECAPTCHA_SITE_KEY).

export async function POST(req) {
  try {
    const { token } = await req.json();

    if (!token) {
      return Response.json({ success: false, error: "Missing reCAPTCHA token." }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.warn("RECAPTCHA_SECRET_KEY is not set — skipping server-side verification.");
      // Fail open in dev so local testing isn't blocked, but log loudly.
      return Response.json({ success: true, warning: "unverified" });
    }

    const params = new URLSearchParams({ secret, response: token });
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = await res.json();

    if (!data.success) {
      return Response.json(
        { success: false, error: "reCAPTCHA verification failed.", details: data["error-codes"] },
        { status: 400 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return Response.json({ success: false, error: "Verification error." }, { status: 500 });
  }
}
