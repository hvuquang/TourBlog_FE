import React, { Component } from "react";
import BackGround from "../../background/BackGround";
import Button from "../../Button/Button";
import TextInput from "../../TextInput/TextInput";

class LogIn extends Component {
  render() {
    return (
      <BackGround>
        <div>
          <TextInput name="UserName" />
          <TextInput name="Password" />
        </div>
        <Button>LOGIN</Button>
      </BackGround>
    );
  }
}

export default LogIn;
