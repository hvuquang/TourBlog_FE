import axios from "axios";
import { loginStart, loginSuccess,loginFailed } from "./authSlice";

export const loginUser = async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    try{
        const res = await axios.post("http://localhost:8000/v1/auth/login",user);
        dispatch(loginSuccess(res.data));
        navigate("/");
        console.log("run")
    }
    catch(err){
        dispatch(loginFailed());
        console.log(err);
        console.log(user)
    }
}