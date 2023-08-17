import { ShoppingCartObjectValueType } from "../../types/shopping-cart/shopping-cart-object-value";
import { ShoppingCartItemValueObject } from "../shopping-cart-item/shopping-cart-item-value-object";

export class ShoppingCartValueObject {
  static isShoppingCartValid(
    shoppingCartObjectValue: ShoppingCartObjectValueType
  ) {
    const { items, totalPrice } = shoppingCartObjectValue;

    if (!totalPrice || typeof totalPrice !== "number" || totalPrice <= 0) {
      return false;
    }

    const result = items.map((item) =>
      ShoppingCartItemValueObject.isShoppingCartItemObjectValueValid(item)
    );

    const areShoppingCartsItemsValid = !result.some((item) => item === false);
    if (!areShoppingCartsItemsValid) {
      return false;
    }

    return true;
  }
}
