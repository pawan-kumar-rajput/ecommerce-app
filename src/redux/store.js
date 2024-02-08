import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        login:loginSlice.reducer,
    }
})

export default store;