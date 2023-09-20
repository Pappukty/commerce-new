export const actionType = {
  SET_USER: "SET_USER",
  SET_LOGOUT: "SET_LOGOUT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
        isLogin: action.isLogin,
      };
    case actionType.SET_LOGOUT:
      return { ...state, user: null, isLogin: action.isLogin };
    default:
      return state;
  }
};
