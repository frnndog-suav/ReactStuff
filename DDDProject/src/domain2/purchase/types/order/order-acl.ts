import { PaymentMethod } from "../../constants/enums";
import { ShoppingCartEntityType } from "../shopping-cart/shopping-cart-entity";

export type OrderACLType = {
  id: string;
  shoppingCart: ShoppingCartEntityType;
  purchaseDate: string;
  paymentApprovedDate: string;
  purchaseShippedDate: string;
  purchaseArrivalDate: string;
  paymentMethod: PaymentMethod;
  formattedPaymentMethod: string
  formattedPaymentApprovedDate: string
  formattedPaymentArrivalDate: string
  formattedPurchaseDate: string
  formattedPaymentShippedDate: string
};
