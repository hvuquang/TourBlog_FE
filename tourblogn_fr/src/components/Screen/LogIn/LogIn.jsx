import React, { Component } from "react";
import BackGround from "../../background/background";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
import TextInput from "../../TextInput/TextInput";
import './LogIn.css'
class LogIn extends Component {
  render() {
    return (
      <BackGround>
        <div>
          <TextInput name="UserName" />
          <TextInput name="Password" />
        </div>
        <div className="link--password">
          <Link content="Forgot password?" />
        </div>
        <Button>LOGIN</Button>
        <Link content="Register ?" />
      </BackGround>
    );
  }
}

export default LogIn;
