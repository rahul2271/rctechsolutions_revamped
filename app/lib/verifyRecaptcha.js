// app/lib/verifyRecaptcha.js
// Call this from a form's submit handler, right after checking the token
// exists, and before writing to SheetDB/Firestore. Returns true/false.
export async function verifyRecaptcha(token) {
  if (!token) return false;
  try {
    const res = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();
    return !!data.success;
  } catch {
    return false;
  }
}
