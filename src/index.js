import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { rootRedcucer } from "./rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  rootRedcucer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
