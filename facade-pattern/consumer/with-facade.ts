import { OrderFacade } from "../library/order-facade";
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

const orderFacade = new OrderFacade(
  inventoryService,
  paymentService,
  shippingService
);
orderFacade.placeOrder(productId, quantity, paymentMethod, amount, address);
