import { create } from "zustand";
import { ShoppingCartItemObjectValueType } from "../domain2/purchase/types/shopping-cart-item/shopping-cart-item-object-value";

type ShoppingCartItemStore = {
  items: ShoppingCartItemObjectValueType[];
  addItem: (item: ShoppingCartItemObjectValueType) => void;
};

export const useShoppingCartItemStore = create<ShoppingCartItemStore>(
  (set) => ({
    items: [],
    addItem: (item) =>
      set((state) => {
        if (state.items.length === 0) {
          return { items: [...state.items, item] };
        }

        const isItemInCart = state.items.some(
          (shoppingCartItem) => shoppingCartItem.merch.id === item.merch.id
        );

        if (isItemInCart) {
          const cartItem = state.items.filter(
            (shoppingCartItem) => shoppingCartItem.merch.id === item.merch.id
          )[0];

          const remainingItems = state.items.filter(
            (shoppingCartItem) => shoppingCartItem.merch.id !== item.merch.id
          );

          const updatedItem: ShoppingCartItemObjectValueType = {
            amount: cartItem.amount + 1,
            merch: cartItem.merch,
            totalPrice: cartItem.totalPrice + cartItem.merch.price,
          };

          return { items: [...remainingItems, updatedItem] };
        }

        return { items: [...state.items, item] };
      }),
  })
);
