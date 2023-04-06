import { PaymentStrategy } from "../library/interfaces/payment-strategy";
import { CreditCardPayment } from "../library/strategies/credit-card";
import { PaypalPayment } from "../library/strategies/paypal";
import { StripePayment } from "../library/strategies/stripe";

class PaymentProcessor {
  constructor(private strategy: PaymentStrategy) {}
  async processPayment(amount: number): Promise<boolean> {
    return this.strategy.pay(amount);
  }
}

//usage
const creditCardStrategy = new CreditCardPayment(
  "9000800070006000",
  "12/25",
  "987"
);
const paymentProcessor1 = new PaymentProcessor(creditCardStrategy);
paymentProcessor1.processPayment(567);

const stripeStrategy = new StripePayment("this_is_api_key");
const paymentProcessor2 = new PaymentProcessor(stripeStrategy);
paymentProcessor2.processPayment(345);
