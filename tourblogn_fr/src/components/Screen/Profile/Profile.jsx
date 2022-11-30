import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

export default function Profile() {
  return (
    <div className="Profile">
      <div className="Profile_section">
        <div className="Profile_header">
          <img
            className="Profile_header_icon"
            src={require("../../../assets/user.png")}
            alt="Profile_header_icon"
          />
          <h2 className="Profile_header_name">Vũ Quang Huy</h2>
          <p className="Profile_header_details">A web developer, love cats</p>
        </div>
        <div className="Profile_content">
          <div className="Profile_information">
            <div className="Profile_information--static">
              <div className="static posts">
                <p>Posts</p>
                <p>100</p>
              </div>
              <div className="static line"></div>
              <div className="static visitors">
                <p>Visitors</p>
                <p>300000</p>
              </div>
            </div>
            <div className="Profile_information--phone">
              <div>
                <img
                  src={require("../../../assets/phone-call.png")}
                  alt="phone-icon"
                />
              </div>
              <p>0123456789</p>
            </div>
            <div className="Profile_information--email">
              <div>
                <img src={require("../../../assets/email.png")} alt="email" />
              </div>
              <p>abc@gmail.com</p>
            </div>
            <div className="Profile_contact">
              <img
                className="Profile_contact1"
                src={require("../../../assets/instagram.png")}
                alt="Profile_contact_instagram"
              />
              <img
                className="Profile_contact2"
                src={require("../../../assets/facebook.png")}
                alt="Profile_contact_facebook"
              />
              <img
                className="Profile_contact2"
                src={require("../../../assets/twitter.png")}
                alt="Profile_contact_facebook"
              />
              <img
                className="Profile_contact2"
                src={require("../../../assets/github-sign.png")}
                alt="Profile_contact_facebook"
              />
            </div>
          </div>
        </div>
        <div className="Profile_Logout">
          <button className="Button_Logout">Đăng xuất</button>
        </div>
      </div>
    </div>
  );
}
