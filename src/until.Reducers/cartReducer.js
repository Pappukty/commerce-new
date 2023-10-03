// import { Productdetail } from "../Productdetail";

// const cartReducers = (state, action) => {
//   switch (action.type) {
//     case "CLEAR_CART":
//       return { ...state, cart: [] };
//     case "REMOVE_ITEM":
//       const filteredItems = state.cart.filter(
//         (item) => item.id !== action.payload.id
//       );
//       return { ...state, cart: filteredItems };
//       case 'SET_CART_ITEMS':
//         return {
//           ...state,
//           item: action.item,
//         };
//     case "INCREASE_ITEM":
//       const productToAdd = Productdetail.find(
//         (item) => item.id === action.payload.id
//       );

//       const existingItem = state.cart.find(
//         (item) => item.id === productToAdd.id
//       );

//       if (existingItem) {
//         const updatedCart = state.cart.map((Productdetail) =>
//           Productdetail.id === productToAdd.id
//             ? { ...Productdetail, quantity: Productdetail.quantity + 1 }
//             : Productdetail
//         );
//         return { ...state, cart: updatedCart };
//       } else {
//         console.log(state.cart);
//         const updatedCart = [...state.cart, { ...productToAdd, quantity: 1 }];
//         return { ...state, cart: updatedCart };
//       }
//     case "DECREASE_ITEM":
//       const decreasedCart = state.cart
//         .map((item) => {
//           if (item.id === action.payload.id) {
//             return { ...item, quantity: item.quantity - 1 };
//           } else {
//             return item;
//           }
//         })
//         .filter((item) => item.quantity > 0);
//       return { ...state, cart: decreasedCart };
//     case "UPDATE_TOTALS":
//       const updatedQuantity = state.cart.reduce((prev, curr) => {
//         return prev + curr.quantity;
//       }, 0);

//       const updatedPrice = state.cart.reduce((prev, curr) => {
//         const amount = curr.quantity * curr.Price;
//         return prev + amount;
//       }, 0);

//       console.log(`cart modified`);
//       return {
//         ...state,
//         totalQuantity: updatedQuantity,
//         totalPrice: updatedPrice,
//       };
//     default:
//       return state;
//   }
// };

// export { cartReducers };
