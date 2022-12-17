import React, { useState } from "react";
import { loginUser } from "../../../redux/apiRequest";
import BackGround from "../../background/background";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../Button/Button";
import Links from "../../Link/Link";
import TextInput from "../../TextInput/TextInput";
import "./LogIn.css";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";

const LogIn = () => {
  const [username, setUsername] = useState("huy");
  const [password, setPassword] = useState("112");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      userName: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };

  return (
    <div className="login__background-container">
      <BackGround>
        <img
          id="login__logo"
          src={process.env.PUBLIC_URL + "images/logoTravel.png"}
          alt=""
        />
        <form onSubmit={handleLogin}>
          <div className="login__background__input">
            <input
              placeholder="name"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
              name="UserName"
              link="/images/username-removebg-preview.png"
              input="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="login__background__input">
            <TextInput
              name="Password"
              link="/images/password-removebg-preview.png"
              input="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login__link--password">
            <Link to={"/forgetPassword"}>
              <Links content="Forgot password?" />
            </Link>
          </div>
          {/* <Button type="submit" name={username} onSubmit>
            LOGIN
          </Button> */}
          <button type="submit">LOGIN</button>
        </form>
        <Link to={"/register"}>
          <Links content="Register ?" />
        </Link> 
      </BackGround>
    </div>
  );
};

export default LogIn;
