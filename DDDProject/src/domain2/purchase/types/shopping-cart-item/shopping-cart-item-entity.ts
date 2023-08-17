import { MerchEntityType } from "../merch/merch-entity";

export type ShoppingCartItemEntityType = {
  id: string;
  merch: MerchEntityType;
  amount: number;
  totalPrice: number;
};
