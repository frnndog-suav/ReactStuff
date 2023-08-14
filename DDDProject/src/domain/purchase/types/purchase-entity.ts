import { PaymentMethod } from "../../../constants/enums";
import { ShoppingCartItemEntityType } from "../../shopping-cart-item/types/shopping-cart-item-entity";

export type PurchaseEntityType = {
  id: string;
  shoppingCart: ShoppingCartItemEntityType[];
  paymentMethod: PaymentMethod;
  purchaseDate: Date;
  paymentApprovedDate: Date
  purchaseShippedDate: Date
  purchaseArrivalDate: Date
  totalPrice: number
};
