
import React from 'react'
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import * as SessionUtil from './util/session.js'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});

//  // TESTING START
//   window.getState = store.getState;
//   window.dispatch = store.dispatch;
//   window.ajax = SessionUtil;
//  TESTING END


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