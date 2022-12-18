import React, { Component } from "react";
import "./TextInput.css";

class TextInput extends Component {

  render() {
    const childChange = () => {
    
    }
    return (
      <div className="TextInput__container">
        <div className="TextInput__container__img">
          <img src={process.env.PUBLIC_URL + this.props.link} />
        </div>
        <input
          multiple={this.props.multiple}
          onChange={() => childChange()}
          className="TextInput__container__input"
          type={this.props.input}
          placeholder={this.props.name}
        />
      </div>
    );
  }
}

export default TextInput;
