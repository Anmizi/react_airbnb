import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "@/App";
import "normalize.css";
import "@/assets/css/index.less";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="loading">
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
