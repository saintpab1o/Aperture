
import React from 'react'
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import * as SessionUtil from './util/session.js'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

//  // TESTING START
//   window.getState = store.getState;
//   window.dispatch = store.dispatch;
//   window.ajax = SessionUtil;
//  TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});


// import React from "react";
// import ReactDOM from "react-dom";
// // import login from './actions/session';

// document.addEventListener("DOMContentLoaded", () => {
//   // window.login = login;
//   const root = document.getElementById("root");
//   ReactDOM.render(<h1>Aperture</h1>, root);
// });


  // // TESTING START
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // //  TESTING END