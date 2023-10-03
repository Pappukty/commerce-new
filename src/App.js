import React from "react";
import { useState } from "react";

import Rout from "./Rout";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import { Productdetail } from "./Productdetail";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  ///
  const [search, setSearch] = useState();
  //
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
  ///search  filter method
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat.toLocaleLowerCase() === product;
    });
    setProduct(change);
  };
  //cart
  const addtocart = (product) => {
    // setCart([...cart, {...product, quantity:1 }])
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert("This Product is allready added to cart ");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      // alert("product is added to cart");
      toast.success("addcart successfully");
    }
  };
  // const updateQuantity = state.cart.reduce((prev, curr) => {
  //   return prev + curr.quantity;
  // }, 0);

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
          count={cart.length}
          searchbtn={searchbtn}
        />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
