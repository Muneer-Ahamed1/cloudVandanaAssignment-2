import { configureStore } from "@reduxjs/toolkit";
import validationReducer from "./features/validation/validationSlice";
import AuthReducer from "./features/auth/AuthSlice";

const Store=configureStore({
    reducer:{
        validation:validationReducer,
        auth:AuthReducer,
        
    }
})

export default Store;