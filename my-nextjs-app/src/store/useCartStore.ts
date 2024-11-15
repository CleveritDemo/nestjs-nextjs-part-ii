// src/store/useCartStore.ts
import { create } from 'zustand';

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
};

type CartItem = Producto & { quantity: number };

type CartState = {
  items: CartItem[];
  addItem: (producto: Producto) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (producto) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === producto.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { items: [...state.items, { ...producto, quantity: 1 }] };
      }
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
  totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
}));