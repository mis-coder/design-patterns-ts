import { PaymentStrategy } from "../interfaces/payment-strategy";

export class CreditCardPayment implements PaymentStrategy {
  constructor(
    private cardNumber: string,
    private expirationDate: string,
    private cvv: string
  ) {}
  async pay(amount: number): Promise<boolean> {
    const res = await fetch("https://credit-card-payment-gateway.com/pay", {
      method: "POST",
      body: JSON.stringify({
        cardNumber: this.cardNumber,
        expirationDate: this.expirationDate,
        cvv: this.cvv,
        amount,
      }),
      headers: { "Content-Type": "application/json" },
    });
    return res.ok;
  }
}
