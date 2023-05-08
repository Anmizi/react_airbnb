import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider as MyThemeProvider } from "styled-components";
import theme from "./assets/theme";
import App from "@/App";
import "normalize.css";
import "@/assets/css/index.less";
import store from "./store";
import { ThemeProvider, THEME_ID, createTheme } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
const materialTheme = createTheme({});
root.render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <MyThemeProvider theme={theme}>
        <ThemeProvider theme={{ [THEME_ID]: materialTheme }}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </MyThemeProvider>
    </Suspense>
  </Provider>
);
