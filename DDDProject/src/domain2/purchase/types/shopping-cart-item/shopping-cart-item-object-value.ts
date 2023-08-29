import { MerchEntityType } from "../merch/merch-entity";

//QUESTION (Faz sentido um objeto-valor ter uma entidade como propriedade?)
export type ShoppingCartItemObjectValueType = {
  merch: MerchEntityType;
  amount: number;
  totalPrice: number;
};
