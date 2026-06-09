import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, priceId } = body;

    if (!email || !priceId) {
      return NextResponse.json({ error: 'Missing email or priceId' }, { status: 400 });
    }

    const session = await createCheckoutSession(email, priceId);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
