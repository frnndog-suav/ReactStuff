import { formatFullDateWithHourMinute } from "../../../../utils/date/formatFullDateWithHourMinute/formatFullDateWithHourMinute";
import { formatPaymentMethod } from "../../../../utils/enum/formatPaymentMethod/formatPaymentMethod";
import { PaymentMethod } from "../../constants/enums";
import { OrderACLType } from "../../types/order/order-acl";
import { OrderEntityType } from "../../types/order/order-entity";
import { ShoppingCartEntity } from "../shopping-cart/shopping-cart-entity";

export class OrderEntity {
  static isOrderValid(orderEntity: OrderEntityType) {
    const {
      id,
      paymentApprovedDate,
      paymentMethod,
      purchaseArrivalDate,
      purchaseDate,
      purchaseShippedDate,
      shoppingCart,
    } = orderEntity;

    if (!id || typeof id !== "string") {
      return false;
    }

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

  static createOrderEntity(
    orderEntity: OrderEntityType
  ): OrderACLType | undefined {
    if (!this.isOrderValid(orderEntity)) {
      return;
    }

    const {
      id,
      paymentApprovedDate,
      paymentMethod,
      purchaseArrivalDate,
      purchaseDate,
      purchaseShippedDate,
      shoppingCart,
    } = orderEntity;

    const formattedPaymentMethod = formatPaymentMethod(paymentMethod);
    const formattedPaymentApprovedDate =
      formatFullDateWithHourMinute(paymentApprovedDate);
    const formattedPaymentArrivalDate =
      formatFullDateWithHourMinute(purchaseArrivalDate);
    const formattedPurchaseDate = formatFullDateWithHourMinute(purchaseDate);
    const formattedPaymentShippedDate =
      formatFullDateWithHourMinute(purchaseShippedDate);

    return {
      id,
      paymentApprovedDate,
      paymentMethod,
      purchaseArrivalDate,
      purchaseDate,
      purchaseShippedDate,
      shoppingCart,
      formattedPaymentMethod,
      formattedPaymentApprovedDate,
      formattedPaymentArrivalDate,
      formattedPurchaseDate,
      formattedPaymentShippedDate,
    };
  }
}
