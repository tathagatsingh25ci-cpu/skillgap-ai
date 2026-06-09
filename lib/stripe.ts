import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-08-16'
});

export async function createCheckoutSession(customerEmail: string, priceId: string) {
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: customerEmail,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: process.env.STRIPE_SUCCESS_URL || 'https://localhost:3000/dashboard',
    cancel_url: process.env.STRIPE_CANCEL_URL || 'https://localhost:3000/dashboard'
  });
}

export default stripe;
