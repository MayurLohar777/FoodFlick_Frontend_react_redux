import { configureStore } from "@reduxjs/toolkit";
import authLoginReducer from "../features/AuthFeatures/authSlice.jsx";
import cartReducer from "../features/CartFeatures/cartSlice.jsx";
import wishlistReducer from "../features/WishlistFeatures/wishlistSlice.jsx";

const store = configureStore({
  reducer: {
    auth: authLoginReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
