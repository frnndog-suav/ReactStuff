import { ShoppingCartItemEntityType } from "../shopping-cart-item/shopping-cart-item-entity";

export type ShoppingCartACLType = {
  id: string;
  items: ShoppingCartItemEntityType[];
  totalPrice: number;
  formattedTotalPrice: string;
};
