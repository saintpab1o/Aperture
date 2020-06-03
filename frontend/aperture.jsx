import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  const rootEl = document.getElementById("root");
  ReactDOM.render(<h1>Aperture </h1>, rootEl);
});