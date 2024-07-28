import { Injectable } from '@angular/core';
import { Stripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  stripePromise: Promise<Stripe>;

  constructor() {
    this.stripePromise = this.loadStripe();
  }

  private loadStripe(): Promise<Stripe> {
    return (window as any).stripe(environment.stripeKey);
  }

  async redirectToCheckout(data: any): Promise<void> {
    const stripe = await this.stripePromise;

    const response = await fetch(
      environment.apiUrl + 'api/create-checkout-session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  }
}
