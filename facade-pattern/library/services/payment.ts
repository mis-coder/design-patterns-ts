export class PaymentService {
  makePayment(paymentMethod: string, amount: number): boolean {
    console.log(
      `💸 Processing payment for amount ${amount} using ${paymentMethod}...`
    );

    // *** --- your actual logic goes here --- ***

    return true;
  }
}
