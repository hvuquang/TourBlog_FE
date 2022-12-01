import React, { Component } from 'react'
import { Router, Routes, Route, Link } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./redux/store";
export default class callLogin extends Component {
  render() {
    return (
        <Router>
        <Provider store={store}>
          <LogIn />
        </Provider>
        {/* <Profile /> */}
      </Router>
    )
  }
}
