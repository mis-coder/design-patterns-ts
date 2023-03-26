import { PaymentStrategy } from "../interfaces/payment-strategy";

export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing payment of amount ${amount} using credit card...`);
    // logic for handling credit card payment goes here
  }
}
