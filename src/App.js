import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import LogInPage from "./pages/logIn/index";
import SignUpPage from "./pages/signUp/index";
import HomePage from "./pages/home/index";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/signIn" exact>
        <LogInPage />
      </Route>
      <Route path="/signUp" exact>
        <SignUpPage />
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
