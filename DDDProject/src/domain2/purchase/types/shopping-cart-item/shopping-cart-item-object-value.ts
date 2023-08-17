import { MerchEntityType } from "../merch/merch-entity";

export type ShoppingCartItemObjectValueType = {
  merch: MerchEntityType;
  amount: number;
  totalPrice: number;
};
