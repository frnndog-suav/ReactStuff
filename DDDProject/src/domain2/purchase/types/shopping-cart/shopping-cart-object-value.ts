import { ShoppingCartItemEntityType } from "../shopping-cart-item/shopping-cart-item-entity";

export type ShoppingCartObjectValueType = {
  items: ShoppingCartItemEntityType[];
  totalPrice: number;
};
