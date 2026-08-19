// app/api/payment/route.js
// Creates a Razorpay order for a webinar (Firestore or WordPress sourced —
// this route doesn't care, it only needs an id/title/amount).
//
// ── SECURITY ─────────────────────────────────────────────────────────────
// Keys now come from environment variables — NEVER commit real key_id /
// key_secret values into source code. Add to .env.local (and your hosting
// provider's env settings):
//   RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
//   RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxx
// ────────────────────────────────────────────────────────────────────────

import Razorpay from 'razorpay';

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || '';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || '';

export async function POST(request) {
  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    console.error('Razorpay keys are not configured — set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env.local');
    return new Response(
      JSON.stringify({ success: false, message: 'Payments are not configured on the server yet.' }),
      { status: 500 }
    );
  }

  const razorpay = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET,
  });

  const { webinarId, amount } = await request.json();

  if (!webinarId || !amount || amount <= 0) {
    return new Response(
      JSON.stringify({ success: false, message: 'Missing or invalid webinarId/amount.' }),
      { status: 400 }
    );
  }

  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Amount in paisa
      currency: 'INR',
      receipt: `order_rc_${webinarId}`,
    });

    return new Response(
      JSON.stringify({
        success: true,
        key: RAZORPAY_KEY_ID, // public key_id only — safe to send to client
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Razorpay order creation failed:', error);
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
