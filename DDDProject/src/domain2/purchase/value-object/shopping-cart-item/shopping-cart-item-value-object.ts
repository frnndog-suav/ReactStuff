import { ShoppingCartItemObjectValueType } from "../../types/shopping-cart-item/shopping-cart-item-object-value";
import { MerchValueObject } from "../merch/merch-value-object";

export class ShoppingCartItemValueObject {
  static isShoppingCartItemObjectValueValid(
    shoppingCartItemEntity: ShoppingCartItemObjectValueType
  ) {
    const { amount, merch, totalPrice } = shoppingCartItemEntity;

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return false;
    }

    if (!totalPrice || typeof totalPrice !== "number" || totalPrice <= 0) {
      return false;
    }

    if (!MerchValueObject.isMerchValueObjectValid(merch)) {
      return false;
    }

    return true;
  }
}
