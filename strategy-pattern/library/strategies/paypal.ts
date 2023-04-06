import { PaymentStrategy } from "../interfaces/payment-strategy";

export class PaypalPayment implements PaymentStrategy {
  constructor(private username: string, private password: string) {}
  async pay(amount: number): Promise<boolean> {
    const res = await fetch("https://paypal.com/pay", {
      method: "POST",
      body: JSON.stringify({
        username: this.username,
        password: this.password,
        amount,
      }),
      headers: { "Content-Type": "application/json" },
    });
    return res.ok;
  }
}
