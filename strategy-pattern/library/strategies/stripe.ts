import { PaymentStrategy } from "../interfaces/payment-strategy";

export class StripePayment implements PaymentStrategy {
  constructor(private apiKey: string) {}
  async pay(amount: number): Promise<boolean> {
    const res = await fetch("https://stripe.com/pay", {
      method: "POST",
      body: JSON.stringify({
        apiKey: this.apiKey,
        amount,
      }),
      headers: { "Content-Type": "application/json" },
    });
    return res.ok;
  }
}
