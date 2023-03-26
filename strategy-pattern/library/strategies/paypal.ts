import { PaymentStrategy } from "../interfaces/payment-strategy";

export class PaypalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing payment of amount ${amount} using paypal...`);
    // logic for handling paypal payment goes here
  }
}
