import { formatNumberToCurrency } from "../../../utils/currency/formatNumberToCurrency/formatNumberToCurrency";
import { ShoppingCartItemEntityType } from "../types/shopping-cart-item-entity";
import { ShoppingCartItemACL } from "./../types/shopping-cart-item-acl";

export class ShoppingCartItemEntity {
  validateShoppingCartItemEntity(shoppingCartItem: ShoppingCartItemEntityType) {
    const { amount, id, merch, totalPrice } = shoppingCartItem;

    if (!id || typeof id !== "string") {
      return false;
    }

    if (!amount || typeof id !== "number" || amount <= 0) {
      return false;
    }

    if (!totalPrice || typeof id !== "number" || totalPrice <= 0) {
      return false;
    }

    if (!merch) {
      return false;
    }

    return true;
  }

  createShoppingCartItemEntity(
    shoppingCartItem: ShoppingCartItemEntityType
  ): ShoppingCartItemACL | undefined {
    if (!this.validateShoppingCartItemEntity(shoppingCartItem)) {
      return;
    }

    const { amount, id, merch, totalPrice } = shoppingCartItem;

    const formattedTotalPrice = formatNumberToCurrency(totalPrice);

    return {
      amount,
      id,
      merch,
      totalPrice,
      formattedTotalPrice,
    };
  }
}
