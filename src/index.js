import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { StateProvider } from "./contexts/context";
import { reducer } from "./until.Reducers/Reducer";
import { initialState } from "./initialState/initialState";
import { AuthProvider } from "./contexts/Authcontext";
import { UserProvider } from "./contexts/userContext";
import { SearchProvider } from "./contexts/SearchProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <UserProvider>
        <AuthProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </AuthProvider>
      </UserProvider>
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
