import { PaymentStrategy } from "../interfaces/payment-strategy";

export class StripePayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing payment of amount ${amount} using stripe...`);
    // logic for handling stripe payment goes here
  }
}
