import { PaymentMethods } from "../types/payment-methods";

class PaymentProcessor {
  processPayment(paymentMethod: PaymentMethods, amount: number): void {
    if (paymentMethod === PaymentMethods.CREDIT_CARD) {
      console.log(
        `Processing payment of amount ${amount} using credit card...`
      );
      // logic for handling credit card payment goes here
    } else if (paymentMethod === PaymentMethods.PAYPAL) {
      console.log(`Processing payment of amount ${amount} using paypal...`);
      // logic for handling paypal payment goes here
    } else if (paymentMethod === PaymentMethods.STRIPE) {
      console.log(`Processing payment of amount ${amount} using stripe...`);
      // logic for handling stripe payment goes here
    } else {
      console.log(`Invalid payment method: ${paymentMethod} !!`);
    }
  }
}

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(PaymentMethods.CREDIT_CARD, 256);
