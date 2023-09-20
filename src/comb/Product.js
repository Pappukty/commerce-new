import React, { useState } from "react";
import "../pages/style/Product.css";
import { BsCart2 } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Productdetail from "../Productdetail";
const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const filtterproduct = (product) => {
    const update = Productdetail.filter((X) => {
      return X.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(Productdetail);
  };
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
      <div className="products">
        <h2># Products</h2>
        <p>Home. Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("Smart")}>Smart Watch</li>
                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>

                <li onClick={() => filtterproduct("Camera")}>Camera</li>

                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <>
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
                        <h4>${curElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
