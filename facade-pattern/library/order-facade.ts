import { InventoryService } from "./services/inventory";
import { PaymentService } from "./services/payment";
import { ShippingService } from "./services/shipping";

export class OrderFacade {
  constructor(
    private inventoryService: InventoryService,
    private paymentService: PaymentService,
    private shippingService: ShippingService
  ) {}

  placeOrder(
    productId: number,
    quantity: number,
    paymentMethod: string,
    amount: number,
    address: string
  ) {
    console.log(`Placing your order...`);
    const inventoryCheckPassed = this.inventoryService.checkInventory(
      productId,
      quantity
    );

    if (inventoryCheckPassed) {
      const paymentSuccess = this.paymentService.makePayment(
        paymentMethod,
        amount
      );

      if (paymentSuccess) {
        const orderShipped = this.shippingService.shipOrder(address);

        if (orderShipped) {
          console.log(`💥 Congrats, your order was placed successfully!💥💥 `);
        }
      }
    } else {
      console.log(`Oops, something is not right :(`);
    }
  }
}
