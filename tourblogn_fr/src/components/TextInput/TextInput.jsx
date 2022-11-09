import React, { Component } from "react";
import "./TextInput.css";

class TextInput extends Component {
  render() {
    return (
      <div className="container">
        <div className="container__img">
          <img src={process.env.PUBLIC_URL + this.props.link}/>
        </div>
        <input
          className="container__input"
          type={this.props.input}
          placeholder={this.props.name}
        />
      </div>
    );
  }
}

export default TextInput;
