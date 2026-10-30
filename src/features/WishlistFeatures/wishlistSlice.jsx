import { createSlice } from "@reduxjs/toolkit";

const loadWishlistFromStorage = () => {
  try {
    const saved = localStorage.getItem("foodflick_wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.error("Failed to load wishlist from storage", err);
    return [];
  }
};

const saveWishlistToStorage = (items) => {
  try {
    localStorage.setItem("foodflick_wishlist", JSON.stringify(items));
  } catch (err) {
    console.error("Failed to save wishlist to storage", err);
  }
};

const initialState = {
  items: loadWishlistFromStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex((i) => i.id === item.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(item);
      }
      saveWishlistToStorage(state.items);
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      saveWishlistToStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToStorage([]);
    },
  },
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist?.items || [];
export const selectWishlistCount = (state) =>
  (state.wishlist?.items || []).length;
export const selectIsWishlisted = (id) => (state) =>
  (state.wishlist?.items || []).some((item) => item.id === id);

export default wishlistSlice.reducer;

