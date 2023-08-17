import { formatNumberToCurrency } from "../../../../utils/currency/formatNumberToCurrency/formatNumberToCurrency";
import { ShoppingCartACLType } from "../../types/shopping-cart/shopping-cart-acl";
import { ShoppingCartEntityType } from "../../types/shopping-cart/shopping-cart-entity";
import { ShoppingCartItemEntity } from "../shopping-cart-item/shopping-cart-item-entity";

export class ShoppingCartEntity {
  static isShoppingCartValid(shoppingCartEntity: ShoppingCartEntityType) {
    const { id, items, totalPrice } = shoppingCartEntity;

    if (!id || typeof id !== "string") {
      return false;
    }

    if (!totalPrice || typeof totalPrice !== "number" || totalPrice <= 0) {
      return false;
    }

    const result = items.map((item) =>
      ShoppingCartItemEntity.isShoppingCartItemEntityValid(item)
    );

    const areShoppingCartsItemsValid = !result.some((item) => item === false);
    if (!areShoppingCartsItemsValid) {
      return false;
    }

    return true;
  }

  static createShoppingCartEntity(
    shoppingCartEntity: ShoppingCartEntityType
  ): ShoppingCartACLType | undefined {
    if (!this.isShoppingCartValid(shoppingCartEntity)) {
      return;
    }

    const { id, items, totalPrice } = shoppingCartEntity;

    const formattedTotalPrice = formatNumberToCurrency(totalPrice);

    return {
      id,
      items,
      totalPrice,
      formattedTotalPrice,
    };
  }
}
