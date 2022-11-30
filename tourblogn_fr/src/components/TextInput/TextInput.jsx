import React, { Component } from "react";
import "./TextInput.css";

class TextInput extends Component {
  sendData = () => {
    this.props.getUsername(this.props.username);
  };
  render() {
    return (
      <div className="TextInput__container">
        <div className="TextInput__container__img">
          <img src={process.env.PUBLIC_URL + this.props.link} />
        </div>
        <input
          multiple={this.props.multiple}
          // onChange={this.props.onchange}
          className="TextInput__container__input"
          type={this.props.input}
          placeholder={this.props.name}
          onChange={this.sendData}
        />
      </div>
    );
  }
}

export default TextInput;
