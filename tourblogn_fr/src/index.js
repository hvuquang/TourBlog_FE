import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LogIn from "./components/Screen/LogIn/LogIn";
import Register from "./components/Screen/Register/Register";
import ForgetPassword from "./components/Screen/ForgetPassword/ForgetPassword";
/*import Card from "./components/Card/Card";*/
import Profile from "./components/Screen/Profile/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";
<<<<<<< HEAD
import AddPost from "./components/AddPost/AddPost";
import Post from "./components/Post/Post";
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  
  <Router>
    <Provider store={store}>
      <LogIn />
    </Provider>
    {/* <Profile /> */}
  </Router>
  </BrowserRouter>
=======
import DetailPost from "./components/Screen/DetailPost/DetailPost";
import Header from "./components/Screen/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DetailPost/>
  </React.StrictMode>
>>>>>>> main
  
  // <Post />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
