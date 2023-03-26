import { InventoryService } from "../library/services/inventory";
import { PaymentService } from "../library/services/payment";
import { ShippingService } from "../library/services/shipping";

const inventoryService = new InventoryService();
const paymentService = new PaymentService();
const shippingService = new ShippingService();

const productId = 3;
const quantity = 2;
const amount = 5678;
const address = "H.No. 789, Saint Mall Square, New York";
const paymentMethod = "UPI";

console.log(`Placing your order...`);

const inventoryCheckPassed = inventoryService.checkInventory(
  productId,
  quantity
);

if (inventoryCheckPassed) {
  const paymentSuccess = paymentService.makePayment(paymentMethod, amount);

  if (paymentSuccess) {
    const orderShipped = shippingService.shipOrder(address);

    if (orderShipped) {
      console.log(`💥 Congrats, your order was placed successfully!💥💥 `);
    }
  }
} else {
  console.log(`Oops, something is not right :(`);
}
