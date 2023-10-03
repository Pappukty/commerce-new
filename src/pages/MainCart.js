// import React, { useEffect } from "react";
// import { UseCartGlobalContext } from "../contexts/cartContext";

// import Cart from "../comb/Cart";
// const MainCart = () => {
//   const { cart, totalPrice, clearCart } = UseCartGlobalContext;
//   if (cart.length === 0) {
//     return (
//       <section className="cart-container">
//         {/* {cart header} */}
//         <header>
//           <h2 className="title">your bag</h2>
//           <h4 className="empty-cart">is currently empty</h4>
//         </header>
//       </section>
//     );
//   }

//   return (
//     <section className="cart-container">
//       {/* {cart header} */}
//       <header>
//         <h2 className="title">Your Bag</h2>
//       </header>
//       {/* {cart item} */}
//       <div>
//         {cart.map((item) => {
//           return <Cart key={item.id} {...item} />;
//         })}
//       </div>
//       {/* {cart footer} */}
//       <footer>
//         <hr className="hr" />
//         <div className="cart-total">
//           <>{/* <h2 className="totalprice">total: $ {totalPrice}</h2> */}</>
//           <h4>
//             Total
//             <span className="totalprice">${`${totalPrice.toFixed(2)}`}</span>
//           </h4>
//         </div>
//         <button className="checkout" onClick={clearCart}>
//           Checkout
//         </button>
//         <button className="btn-clear-btn" onClick={() => clearCart()}>
//           clear cart
//         </button>
//       </footer>
//     </section>
//   );
// };

// export default MainCart;
