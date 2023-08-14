import { MerchEntityType } from "../../merch/types/merch-entity";

export type ShoppingCartItemEntityType = {
  id: string;
  merch: MerchEntityType;
  amount: number;
  totalPrice: number;
};
