import React, { useEffect, useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import LogInPage from "./pages/logIn/index";
import SignUpPage from "./pages/signUp/index";

function App() {
  const [logIn, setLogIn] = useState(false);

  useEffect(() => {
    const str_LS_logIn = localStorage.getItem("logIn");
    const pars_LS_logIn = JSON.parse(str_LS_logIn);
    const str_LS_SignUp = localStorage.getItem("signUp");
    const pars_LS_SignUp = JSON.parse(str_LS_SignUp);

    if (pars_LS_SignUp !== null) {
      pars_LS_SignUp.map((obj) => {
        if (obj.id === pars_LS_logIn.id && obj.pw === pars_LS_logIn.pw) {
          setLogIn(true);
        } else {
          setLogIn(false);
        }
      });
    }
  }, []);

  return (
    <HashRouter>
      <GlobalStyle />
      <Route path="/" exact>
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
  }
`;
