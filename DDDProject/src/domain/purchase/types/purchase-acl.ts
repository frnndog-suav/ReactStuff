import { PaymentMethod } from "../../../constants/enums";
import { ShoppingCartItemEntityType } from "../../shopping-cart-item/types/shopping-cart-item-entity";

export type PurchaseACLType = {
  id: string;
  shoppingCart: ShoppingCartItemEntityType[];
  paymentMethod: PaymentMethod;
  purchaseDate: Date;
  paymentApprovedDate: Date
  purchaseShippedDate: Date
  purchaseArrivalDate: Date
  totalPrice: number
  formattedPaymentMethod: string
  formattedPurchaseDate: string
  formattedArrivalDate: string
  formattedPurchaseShippedDate: string
  formattedApprovedDate: string
  formattedTotalPrice: string
};
