import { PaymentStrategy } from "../library/interfaces/payment-strategy";
import { CreditCardPayment } from "../library/strategies/credit-card";
import { PaypalPayment } from "../library/strategies/paypal";
import { StripePayment } from "../library/strategies/stripe";
import { PaymentMethods } from "../types/payment-methods";

class PaymentProcessor {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentMethod: PaymentMethods) {
    if (paymentMethod === PaymentMethods.CREDIT_CARD) {
      this.paymentStrategy = new CreditCardPayment();
    } else if (paymentMethod === PaymentMethods.PAYPAL) {
      this.paymentStrategy = new PaypalPayment();
    } else if (paymentMethod === PaymentMethods.STRIPE) {
      this.paymentStrategy = new StripePayment();
    } else {
      console.log(`Invalid payment method: ${paymentMethod} !!`);
    }
  }

  processPayment(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

const paymentProcessor1 = new PaymentProcessor(PaymentMethods.CREDIT_CARD);
paymentProcessor1.processPayment(567);

const paymentProcessor2 = new PaymentProcessor(PaymentMethods.STRIPE);
paymentProcessor2.processPayment(345);
