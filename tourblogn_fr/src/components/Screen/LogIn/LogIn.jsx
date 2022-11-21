import React, {  useState } from "react";
import { loginUser } from "../../../redux/apiRequest";
import BackGround from "../../background/background";
import { useNavigate} from "react-router-dom";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
import TextInput from "../../TextInput/TextInput";
//import { loginUser } from "../../../redux/apiRequest";
import "./LogIn.css";
import { useDispatch } from "react-redux";

const LogIn =()=> {
  
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
   const dispatch=useDispatch();
   const navigate=useNavigate();

    const handleLogin=(e)=>{
       e.prevenDefault();
      const newUser={
        username: username,
        password:password,
      };
     //loginUser(newUser, dispatch, navigate)
    };
    return (
      <div  className="login__background-container">
        <BackGround>
          <img id="login__logo" src={process.env.PUBLIC_URL + 'images/logoTravel.png'} alt="" />
          <form onSubmit={handleLogin}>
          <div class="login__background__input">
            <TextInput
              name="UserName"
              link="/images/username-removebg-preview.png"
              input="text"
              onChange={(e)=>setUsername(e.target.value)}
           
            />
          </div>
          <div class="login__background__input">
            <TextInput
              name="Password"
              link="/images/password-removebg-preview.png"
              input="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="login__link--password">
            <Link content="Forgot password?" />
          </div>
          <Button >LOGIN</Button>
          </form>
          <Link content="Register ?" />
        </BackGround>
      </div>
    );
  
}

export default LogIn;
