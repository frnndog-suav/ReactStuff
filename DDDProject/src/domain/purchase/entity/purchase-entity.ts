import { PaymentMethod } from "../../../constants/enums";
import { formatNumberToCurrency } from "../../../utils/currency/formatNumberToCurrency/formatNumberToCurrency";
import { formatDate } from "../../../utils/date/formatDate/formatDate";
import { formatPaymentMethod } from "../../../utils/enum/formatPaymentMethod/formatPaymentMethod";
import { PurchaseACLType } from "../types/purchase-acl";
import { PurchaseEntityType } from "./../types/purchase-entity";

export class PurchaseEntity {
  validatePurchaseEntity(purchase: PurchaseEntityType) {
    const {
      id,
      paymentApprovedDate,
      paymentMethod,
      purchaseArrivalDate,
      purchaseDate,
      purchaseShippedDate,
      shoppingCart,
      totalPrice,
    } = purchase;

    if (!id || typeof id !== "string") {
      return false;
    }

    if (paymentMethod === PaymentMethod.Unknown) {
      return false;
    }

    if (
      typeof paymentApprovedDate !== "string" ||
      !Date.parse(paymentApprovedDate)
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

    if (!totalPrice || typeof id !== "number" || totalPrice <= 0) {
      return false;
    }

    if (!shoppingCart) {
      return false;
    }

    return true;
  }

  createPurchaseEntity(
    purchase: PurchaseEntityType
  ): PurchaseACLType | undefined {
    if (!this.validatePurchaseEntity(purchase)) {
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
      totalPrice,
    } = purchase;

    const formattedPaymentMethod = formatPaymentMethod(paymentMethod);
    const formattedPurchaseDate = formatDate(purchaseDate);
    const formattedArrivalDate = formatDate(purchaseArrivalDate);
    const formattedPurchaseShippedDate = formatDate(purchaseShippedDate);
    const formattedApprovedDate = formatDate(paymentApprovedDate);
    const formattedTotalPrice = formatNumberToCurrency(totalPrice);

    return {
      id,
      paymentApprovedDate,
      paymentMethod,
      purchaseArrivalDate,
      purchaseDate,
      purchaseShippedDate,
      shoppingCart,
      totalPrice,
      formattedPaymentMethod,
      formattedPurchaseDate,
      formattedArrivalDate,
      formattedPurchaseShippedDate,
      formattedApprovedDate,
      formattedTotalPrice,
    };
  }
}
