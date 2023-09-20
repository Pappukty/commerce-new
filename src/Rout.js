import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./comb/Home";
import Product from "./comb/Product";
import Cart from "./comb/Cart";
import Footer from "./comb/Footer";
import Productdetail from "./Productdetail";
import HomeProduct from "./HomeProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cantact from "./comb/Contact";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import Nav from "./nav";
import { auth } from "./firestore/firebase-config";
import { useState, useEffect } from "react";
import { AuthContext, useAuthContext } from "./contexts/Authcontext";
const Rout = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  cart,
  setCart,
  addtocart,
  setIsAuth,
  IsAuth,
}) => {
  // const { isLogin, setIsLogin } = useStateValue();
  const { userLogin } = useAuthContext();
  // console.log(isLogin);

  //login condition

  ///search  filter method
  const searchbtn = (product) => {
    const change = (Productdetail, HomeProduct).filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            userLogin ? (
              <Nav searchbtn={searchbtn} IsAuth={IsAuth} />
            ) : (
              <Login setIsAuth={setIsAuth} />
            )
          }
        >
          <Route
            index={true}
            element={
              <Home
                product={product}
                setProduct={setProduct}
                detail={detail}
                view={view}
                close={close}
                setClose={setClose}
                addtocart={addtocart}
                IsAuth={IsAuth}
              />
            }
          />
          <Route
            path="/Product"
            element={
              <Product
                product={product}
                setProduct={setProduct}
                detail={detail}
                view={view}
                close={close}
                setClose={setClose}
                addtocart={addtocart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/contact" element={<Cantact />} />
          <Route path="/about" element={<Footer />} />
        </Route>
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </>
  );
};

export default Rout;
