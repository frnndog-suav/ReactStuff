import { PaymentMethod } from "../../constants/enums";
import { ShoppingCartEntityType } from "../shopping-cart/shopping-cart-entity";

export type OrderObjectValueType = {
  shoppingCart: ShoppingCartEntityType;
  purchaseDate: string;
  paymentApprovedDate: string;
  purchaseShippedDate: string;
  purchaseArrivalDate: string;
  paymentMethod: PaymentMethod;
};
