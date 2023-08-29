import { create } from "zustand";
import { ShoppingCartItemObjectValueType } from "../domain2/purchase/types/shopping-cart-item/shopping-cart-item-object-value";

type ShoppingCartItemStore = {
  items: ShoppingCartItemObjectValueType[];
  addItem: (item: ShoppingCartItemObjectValueType) => void;
};

export const useShoppingCartItemStore = create<ShoppingCartItemStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));
