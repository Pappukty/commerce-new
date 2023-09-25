import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../until.Reducers/cartReducer";
import { Productdetail } from "../Productdetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

const initialData = {
  cart: Productdetail,
  totalQuantity: 0,
  totalPrice: 0,
  subTotal: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialData);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.success("Successfully Clear Cart");
  };

  const checkOut = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.success("Your order as been placed");
  };

  return ( 
    <CartContext.Provider
      value={{
        ...state,
        clearCart,

        checkOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const CartConsumer = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, CartConsumer };
