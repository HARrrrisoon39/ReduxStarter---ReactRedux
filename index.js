import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import combineReducers from "./reducer";
import { Provider } from "react-redux";

let store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
