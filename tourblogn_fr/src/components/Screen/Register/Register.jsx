import React, { Component, useState } from "react";
import "./Register.css";
import BackGround from "../../background/background";
import Button from "../../Button/Button";
import TextInput from "../../TextInput/TextInput";
import Links from "../../Link/Link";
import InputNoneIMG from "../../InputNoneIMG/InputNoneIMG";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../redux/apiRequest";
import { useDispatch } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      userName: username,
      password: password,
      email: email,
    };
    registerUser(newUser, dispatch, navigate);
  };
  return (
    <BackGround>
      <img id="logo" src={process.env.PUBLIC_URL + "/images/logoTravel.png"} />
      <form onSubmit={handleRegister}>
        <div className="container__noneimg">
          <input
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
            className="container__input"
            type="text"
          />
        </div>
        <div className="container__noneimg">
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="container__input"
            type="password"
          />
        </div>
        <div className="container__noneimg">
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="container__input"
            type="email"
          />
        </div>

        {/* <InputNoneIMG name="Username" input="text"/>
        <InputNoneIMG name="Password" input="password"/>
        <InputNoneIMG name="Verify Password" input="password"/>
        <InputNoneIMG name="Email" input="email"/> */}
        <Button>Create Account</Button>
      </form>
      <Link to={"/login"}>
        <Links content="Already have account? Log In" />
      </Link>
    </BackGround>
  );
};
export default Register;
