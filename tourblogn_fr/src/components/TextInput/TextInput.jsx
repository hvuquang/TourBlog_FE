import React, { Component } from "react";
import "./TextInput.css";
import { BiUserCircle } from "react-icons/bi";
import { IconContext } from "react-icons";

class TextInput extends Component {
  render() {
    return (
      <div className="container">
        <div className="container__img">
          <IconContext.Provider value={{ color: "black", size: "35px" }}>
            <BiUserCircle />
          </IconContext.Provider>
        </div>
        <input
          className="container__input"
          type="text"
          placeholder={this.props.name}
        />
      </div>
    );
  }
}

export default TextInput;
