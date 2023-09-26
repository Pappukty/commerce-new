import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../pages/style/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./img/logo.svg" alt="logo"></img>
            </div>
            <div className="detail">
              <p>
                We are a team of designers and developers that create high
                quality WordPress
              </p>
              <div className="icon">
                <li>
                  <Link to="https://www.facebook.com/">
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
                  <Link to="https://twitter.com/login?lang=en">
                    <AiOutlineTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/">
                    <BsYoutube />
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>shipping</li>
              <li>return</li>
            </ul>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terma & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
