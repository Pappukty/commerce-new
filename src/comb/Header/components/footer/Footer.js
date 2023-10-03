import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="./img/LOGO.png" alt="logo" className="logo-img"></img>
            </Link>
          </div>

          <div className="icon">
            <li>
              <Link to="https://www.facebook.com/ajay.rockers.54?mibextid=2JQ9oc">
                {" "}
                <RiFacebookFill />
              </Link>
            </li>
            <li>
              <Link to="https://instagram.com/aju_pappu?igshid=OGQ5ZDc2ODk2ZA==">
                {" "}
                <AiOutlineInstagram />
              </Link>
            </li>

            <li>
              <Link to="https://www.linkedin.com/in/ajay-k-4a2895283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <AiFillLinkedin />
              </Link>
            </li>
          </div>

          {/* <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>shipping</li>
              <li>return</li>
            </ul>
          </div> */}
          {/* <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terma & Condition</li>
            </ul>
          </div> */}
          <div className="desc-footer">
            <h4>
              ©2023 All Rights Reserverd. This template is made with by ❤️{" "}
              <span>Ajay</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
