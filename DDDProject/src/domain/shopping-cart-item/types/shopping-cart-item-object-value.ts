import { MerchEntityType } from "../../merch/types/merch-entity";

export type ShoppingCartItemObjectValueType = {
  merch: MerchEntityType;
  amount: number;
  totalPrice: number;
};
