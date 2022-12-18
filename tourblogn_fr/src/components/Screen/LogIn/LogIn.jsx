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

  const childChange = (type, data) => {};

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
            <div className="TextInput__container">
              <div className="TextInput__container__img">
                <img src={process.env.PUBLIC_URL + "images/username-removebg-preview.png"} />
              </div>
              <input
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)}
                className="TextInput__container__input"
                type="text"
              />
            </div>
            <div className="TextInput__container">
              <div className="TextInput__container__img">
                <img src={process.env.PUBLIC_URL + "images/password-removebg-preview.png"} />
              </div>
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="TextInput__container__input"
                type="password"
              />
            </div>
          </div>
          <div className="login__link--password">
            <Link to={"/forgetPassword"}>
              <Links content="Forgot password?" />
            </Link>
          </div>
          {/* <Button type="submit" name={username} onSubmit>
            LOGIN
          </Button> */}
          <button type="submit" className="mainbutton">
            LOGIN
          </button>
        </form>
        <Link to={"/register"}>
          <Links content="Register ?" />
        </Link>
      </BackGround>
    </div>
  );
};

export default LogIn;
