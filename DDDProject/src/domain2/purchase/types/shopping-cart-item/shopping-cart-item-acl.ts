import { MerchEntityType } from "../merch/merch-entity";

export type ShoppingCartItemACL = {
  id: string;
  merch: MerchEntityType;
  amount: number;
  totalPrice: number;
  formattedTotalPrice: string;
};
