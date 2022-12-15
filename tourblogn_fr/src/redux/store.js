import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userReducer"
//allReducers
export default configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
    },
});