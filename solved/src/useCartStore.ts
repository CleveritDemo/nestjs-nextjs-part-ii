// src/store/useCartStore.ts
import { create } from "zustand";
import { Product as OriginalProduct } from "./pages/api/products";

type Product = OriginalProduct & { quantity: number };

type CartState = {
  cart: Product[];
  addToCart: (product: OriginalProduct) => void;
  removeFromCart: (productId: string) => void;
  getCartQuantity: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((p) => p.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const existingProduct = state.cart.find((p) => p.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        return {
          cart: state.cart.map((p) =>
            p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
          ),
        };
      } else {
        return {
          cart: state.cart.filter((product) => product.id !== productId),
        };
      }
    }),
  getCartQuantity: () => {
    const state = get();
    return state.cart.reduce((total, product) => total + product.quantity, 0);
  },
}));
