import React, { Component } from "react";
import BackGround from "../../background/background";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
import TextInput from "../../TextInput/TextInput";
import "./LogIn.css";
class LogIn extends Component {
  render() {
    return (
      <div className="background-container">
        <BackGround>
          <img id="logo" src={process.env.PUBLIC_URL + 'images/logoTravel.png'} alt="" />
          <div class="background__input">
            <TextInput
              name="UserName"
              link="/images/username-removebg-preview.png"
              input="text"
            />
          </div>
          <div id="background__input">
            <TextInput
              name="Password"
              link="/images/password-removebg-preview.png"
              input="password"
            />
          </div>
          <div className="link--password">
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
