import { ShoppingCartItemObjectValueType } from "../shopping-cart-item/shopping-cart-item-object-value";

export type ShoppingCartObjectValueType = {
  items: ShoppingCartItemObjectValueType[];
  totalPrice: number;
};
