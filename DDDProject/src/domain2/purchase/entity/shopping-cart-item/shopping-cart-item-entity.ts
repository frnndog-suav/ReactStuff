import { formatNumberToCurrency } from "../../../../utils/currency/formatNumberToCurrency/formatNumberToCurrency";
import { ShoppingCartItemACL } from "../../types/shopping-cart-item/shopping-cart-item-acl";
import { ShoppingCartItemEntityType } from "../../types/shopping-cart-item/shopping-cart-item-entity";
import { MerchEntity } from "../merch/merch-entity";

export class ShoppingCartItemEntity {
  static isShoppingCartItemEntityValid(
    shoppingCartItemEntity: ShoppingCartItemEntityType
  ) {
    const { amount, id, merch, totalPrice } = shoppingCartItemEntity;

    if (!id || typeof id !== "string") {
      return false;
    }

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return false;
    }

    if (!totalPrice || typeof totalPrice !== "number" || totalPrice <= 0) {
      return false;
    }

    if (!MerchEntity.isMerchEntityValid(merch)) {
      return false;
    }

    return true;
  }

  static createShoppingCartItemEntity(
    shoppingCartItemEntity: ShoppingCartItemEntityType
  ): ShoppingCartItemACL | undefined {
    if (!this.isShoppingCartItemEntityValid(shoppingCartItemEntity)) {
      return;
    }

    const { amount, id, merch, totalPrice } = shoppingCartItemEntity;

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
