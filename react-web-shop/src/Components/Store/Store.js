import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart-Slice";

const store = configureStore({ reducer: cartSlice.reducer });

export default store;
