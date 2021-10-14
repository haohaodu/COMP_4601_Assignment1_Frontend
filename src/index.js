/** @format */

import React from "react";
import ReactDOM from "react-dom";
import store from "store";
import App from "./App";

import axios from "axios";
import "./index.css";

console.log(process.env.REACT_APP_DEPLOY_ENV === "dev");
if (process.env.REACT_APP_DEPLOY_ENV === "dev") {
  console.log("react app is dev 2.");
  axios.defaults.baseURL = process.env.REACT_APP_DEV_API_URL;
} else {
  console.log("react app is prod 2.");
  axios.defaults.baseURL = process.env.REACT_APP_PROD_API_URL;
}

console.log("REACT_APP_DEV_API_URL", process.env.REACT_APP_DEV_API_URL);
console.log("REACT_APP_PROD_API_URL", process.env.REACT_APP_PROD_API_URL);

console.log("REACT_APP_DEPLOY_ENV: ", process.env.REACT_APP_DEPLOY_ENV);
console.log("axios.defaults.baseURL: ", axios.defaults.baseURL);

store.set("cart", []);
store.set("curr_order", []);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
