import thunk from "redux-thunk";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./Slice/cartSlice";
import { userSlice } from "./Slice/userSlice";

const store = configureStore({
        reducer: {
                cart: cartSlice.reducer,
                user: userSlice.reducer,
        },
        middleware: [thunk, logger],
        devTools: process.env.NODE_ENV === 'development',
})

export default store