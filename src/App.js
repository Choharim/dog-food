import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import LogInPage from "./pages/logIn/index";
import SignUpPage from "./pages/signUp/index";
import MenuPage from "./pages/menu/index";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Route path="/" exact>
        <LogInPage />
      </Route>
      <Route path="/signUp" exact>
        <SignUpPage />
      </Route>
      <Route path="/menu" exact>
        <MenuPage />
      </Route>
    </HashRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Lora', serif;
  }
`;
