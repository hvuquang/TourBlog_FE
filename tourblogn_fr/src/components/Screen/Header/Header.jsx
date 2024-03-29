import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import store from "../../../redux/store";
import { connect, useSelector } from "react-redux";

function Header() {
  const user= useSelector((state)=> state.auth.login?.currentUser);
  return (
    <div className="Header">
      <Link to={"/"}>
        <img
          className="Header_Logo"
          src={process.env.PUBLIC_URL + "/images/logoTravel.png"}
          alt="logo"
        />
      </Link>
      <div className="Header_Profile">
        <h3 className="Header_NameProfile">
          {store.getState().auth.login.currentUser == null ? <p>ĐĂNG NHẬP</p> : <p>{store.getState().auth.login.currentUser.userName}</p>}
        </h3>
        { user?
        <Link to={"/profile"}>
          <img
            className="Header_icProfile"
            src={
              process.env.PUBLIC_URL + "/images/username-removebg-preview.png"
            }
            alt="Header_icProfile"
          />
        </Link>
        : <Link to={"/login"}>
        <img
            className="Header_icProfile"
            src={
              process.env.PUBLIC_URL + "/images/username-removebg-preview.png"
            }
            alt="Header_icProfile"
          />
        </Link>}
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     auths: state.auths
//   }
// }

// function getUsername() {
//  return () => this.props.auths.map((auth) => {
//     return (
//       <p key={auth.login.currentUser.id}>{auth.login.currentUser.userName}</p>
//     )
//  })
// }

// export default connect(mapStateToProps)(Header)
export default Header