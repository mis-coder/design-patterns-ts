import { products } from "../data/products";

export class InventoryService {
  checkInventory(productId: number, quantity: number): boolean {
    const product = products.find((product) => product.id === productId);
    console.log(`🏪 Checking inventory for ${product.name}...`);

    // *** --- your actual logic goes here --- ***

    if (product.qty <= quantity) {
      console.log(`💔 Sorry, ${product.name} is currently out of stock!!`);
      return false;
    }
    return true;
  }
}
