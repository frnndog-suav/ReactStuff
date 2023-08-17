import { ShoppingCartItemEntityType } from "../shopping-cart-item/shopping-cart-item-entity";

export type ShoppingCartEntityType = {
  id: string;
  items: ShoppingCartItemEntityType[];
  totalPrice: number;
};
