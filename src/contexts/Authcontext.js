import { createContext, useContext, useReducer } from "react";
import { useState, useEffect } from "react";
import { auth } from "../firestore/firebase-config";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(false);
  ///userprofile name function and  effects
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  //
  const fetchLoginInfo = () => {
    const LoginInfo =
      localStorage.getItem("userLogin") !== "undefined"
        ? JSON.parse(localStorage.getItem("userLogin"))
        : localStorage.clear();

    return LoginInfo;
  };

  useEffect(() => {
    const user = fetchLoginInfo;
    setUserLogin(user);
  }, []);
  console.log(userLogin);
  // useReducer(reducer, initialState,
  return (
    <AuthContext.Provider
      value={{ userLogin, setUserLogin, userName, setUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};
export { AuthProvider, AuthContext, useAuthContext };
