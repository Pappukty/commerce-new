import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { google } from "./img/google.png";
import { auth, provider } from "../firestore/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useAuthContext } from "../contexts/Authcontext";
import { useNavigate } from "react-router-dom";
import "./style/Login.css";
import { actionType } from "../until.Reducers/Reducer";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const { setUserLogin } = useAuthContext();
  // const [{ isLogin }, dispatch] = useStateValue();
  //google login method
  const signInWithGoogle = () => {
    // signInWithPopup(auth, provider).then((result) => {
    //   localStorage.setItem("isAuth", true);
    //   setIsAuth(true);
    signInWithPopup(auth, provider).then((data) => {
      setIsAuth(data.user.email);
      setUserLogin(true);
      localStorage.setItem("email", data.user.email);
      navigate("/");
    });

    // });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const onLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // dispatch({ type: actionType.SET_USER, isLogin: !isLogin });
        setUserLogin(true);
        console.log(user);
        setEmail("");
        setPassword("");

        navigate("/");

        localStorage.setItem("user", JSON.stringify(user.providerData[0]));
        localStorage.setItem("userLogin", JSON.stringify(true));
      })
      .catch((err) => {
        console.log("Ar error occured", err.message);
      });
  };
  const showTestLogin = () => {
    setIsShowLogin(!isShowLogin);
  };

  return (
    <div className="loginPage">
      <form className="login">
        <h2 className="title-login">Login</h2>
        <div className="input-email">
          <input
            type="email"
            placeholder="Enter the Email@"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="submit-btn-btn">
            <button className="submit-btn" onClick={onLogin}>
              submit
            </button>
          </div>
        </div>
        <div className="login-with-google">
          <p className="google-p"></p>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            <img
              src="./img/google.png"
              alt=""
              width="30px"
              className="google"
            ></img>
            <span className="google-p">Sign in with Google</span>
          </button>
        </div>
        <div className="login-test-credential-btn">
          <button
            type="button"
            className="login-credential-btn"
            onClick={showTestLogin}
          >
            Test Credentials
          </button>
          {isShowLogin && (
            <div>
              <p>Email: test@gmail.com</p>
              <p>Password: test@123</p>
            </div>
          )}
        </div>
        <div className="res-link">
          <span>create a Register</span>
          <Link to="/register" className="signupclick">
            click here to register
          </Link>
          <p className="error">{error}</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
