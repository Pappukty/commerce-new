import React from "react";
import { useState } from "react";
import "../pages/style/Home.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import HomeProduct from "../HomeProduct";
const Home = ({ detail, view, close, setClose, addtocart }) => {
  const [homeProduct, setHomeProduct] = useState(HomeProduct);
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      {" "}
                      A Screen Will Love: Whether your family is streaming or
                      video chatting with friends tablet AB...
                    </p>
                    <h3>{curElm.Price}</h3>
                    <button onClick={() => addtocart(curElm)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Colletion 2023</h2>
            <Link to="/product">
              shop Now
              <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="./img/slider1-img.jpg"
              alt="slider-img"
              width="480px"
            ></img>
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="./img/Mobile phone.png" alt="Mobile" />
            </div>
            <div className="details">
              <p>20 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/headphone.png" alt="headphone" />
            </div>
            <div className="details">
              <p>50 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/smart watch.png" alt="watch" />
            </div>
            <div className="details">
              <p>64 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/cpu heat.jpg" alt="cpu" />
            </div>
            <div className="details">
              <p>63 products</p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="box">
              <div className="icon">
                <FiTruck />
              </div>
              <div className="detail">
                <h3>Free Shipping</h3>
                <p>Oder above $1000</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <BsCurrencyDollar />
              </div>
              <div className="detail">
                <h3>Return & Refund</h3>
                <p>Money Back Gaurenty</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <CiPercent />
              </div>
              <div className="detail">
                <h3>Member Discount</h3>
                <p>On every Oder</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaHeadphones />
              </div>
              <div className="detail">
                <h3>Customer Support</h3>
                <p>every Time call Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeProduct.map((curElm) => {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className="icon">
                    <li onClick={() => addtocart(curElm)}>
                      {" "}
                      <BsCart2 />
                    </li>
                    <li onClick={() => view(curElm)}>
                      {" "}
                      <BsEye />
                    </li>
                    <li> </li>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>{curElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p>
              <BsCurrencyDollar />
              986
            </p>
            <Link to="/product" className="link">
              Shop Now
              <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/image-11.jpg" alt="sliderimg" width="400px"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
