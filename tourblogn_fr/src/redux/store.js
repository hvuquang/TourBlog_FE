import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
//allReducers
export default configureStore({
    reducer:{
        auth: authReducer,
    },
});