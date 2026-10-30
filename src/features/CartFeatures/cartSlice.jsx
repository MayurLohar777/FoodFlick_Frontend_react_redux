import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem("foodflick_cart");
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error("Failed to load cart from storage", err);
    return [];
  }
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem("foodflick_cart", JSON.stringify(items));
  } catch (err) {
    console.error("Failed to save cart to storage", err);
  }
};

const initialState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + (item.quantity || 1);
      } else {
        state.items.push({
          ...item,
          quantity: item.quantity || 1,
        });
      }
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      saveCartToStorage(state.items);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        const existing = state.items.find((i) => i.id === id);
        if (existing) {
          existing.quantity = quantity;
        }
      }
      saveCartToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage([]);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart?.items || [];
export const selectCartTotalCount = (state) =>
  (state.cart?.items || []).reduce((sum, item) => sum + (item.quantity || 1), 0);
export const selectCartTotalPrice = (state) =>
  (state.cart?.items || []).reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
    0
  );

export default cartSlice.reducer;

