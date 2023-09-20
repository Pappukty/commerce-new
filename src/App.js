import React from "react";
import { useState } from "react";
import Nav from "./nav";
import Rout from "./Rout";
import Footer from "./comb/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Productdetail from "./Productdetail";

import { BrowserRouter } from "react-router-dom";
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  //cart
  const [cart, setCart] = useState([]);
  //product detail
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  //filter product
  const [product, setProduct] = useState(Productdetail);

  //product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };
  ///add to cart

  //cart
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert("This Product is allready added to cart ");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("product is added to cart");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
          setIsAuth={setIsAuth}
          isAuth={isAuth}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
