const cartReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE_ITEM":
      const filteredItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: filteredItems };
  }
};

export { cartReducer };
