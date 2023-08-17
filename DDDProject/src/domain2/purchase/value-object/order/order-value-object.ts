import { PaymentMethod } from "../../constants/enums";
import { ShoppingCartEntity } from "../../entity/shopping-cart/shopping-cart-entity";
import { OrderObjectValueType } from "../../types/order/order-object-value";

export class OrderValueObject {
  static isOrderValid(orderObjectValue: OrderObjectValueType) {
    const {
      paymentApprovedDate,
      paymentMethod,
      purchaseArrivalDate,
      purchaseDate,
      purchaseShippedDate,
      shoppingCart,
    } = orderObjectValue;

    if (
      typeof paymentApprovedDate !== "string" ||
      !Date.parse(paymentApprovedDate)
    ) {
      return false;
    }

    if (
      !paymentMethod ||
      typeof paymentMethod !== "object" ||
      paymentMethod === PaymentMethod.Unknown
    ) {
      return false;
    }

    if (
      typeof purchaseArrivalDate !== "string" ||
      !Date.parse(purchaseArrivalDate)
    ) {
      return false;
    }

    if (typeof purchaseDate !== "string" || !Date.parse(purchaseDate)) {
      return false;
    }

    if (
      typeof purchaseShippedDate !== "string" ||
      !Date.parse(purchaseShippedDate)
    ) {
      return false;
    }

    if (!ShoppingCartEntity.isShoppingCartValid(shoppingCart)) {
      return false;
    }

    return true;
  }
}
