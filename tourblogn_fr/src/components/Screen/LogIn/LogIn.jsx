import React, { Component } from "react";
import BackGround from "../../background/background";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
import TextInput from "../../TextInput/TextInput";
import "./LogIn.css";
class LogIn extends Component {
  render() {
    return (
      <div className="login__background-container">
        <BackGround>
          <img id="login__logo" src={process.env.PUBLIC_URL + 'images/logoTravel.png'} alt="" />
          <div class="login__background__input">
            <TextInput
              name="UserName"
              link="/images/username-removebg-preview.png"
              input="text"
            />
          </div>
          <div class="login__background__input">
            <TextInput
              name="Password"
              link="/images/password-removebg-preview.png"
              input="password"
            />
          </div>
          <div className="login__link--password">
            <Link content="Forgot password?" />
          </div>
          <Button>LOGIN</Button>
          <Link content="Register ?" />
        </BackGround>
      </div>
    );
  }
}

export default LogIn;
