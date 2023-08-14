import { PaymentMethod } from "../../../constants/enums";
import { ShoppingCartItemEntityType } from "../../shopping-cart-item/types/shopping-cart-item-entity";

export type PurchaseObjectValueType = {
  shoppingCart: ShoppingCartItemEntityType[];
  paymentMethod: PaymentMethod;
  purchaseDate: Date;
  paymentApprovedDate: Date;
  purchaseShippedDate: Date;
  purchaseArriveDate: Date;
  totalPrice: number
};
