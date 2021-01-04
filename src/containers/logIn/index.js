import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  LogInContainer,
  LogInIcon,
  LogInForm,
  IDLabel,
  IDInput,
  PWLabel,
  PWInput,
  PWError,
  SubmitBtn,
  SignUpBtn,
  SignUpIcon,
} from "./Style";

const LogIn = () => {
  let history = useHistory();
  const [currentUser, setCurrentUser] = useState({ id: "", pw: "" });
  const [localUsers, setLocalUsers] = useState([]);
  const [logInSuccess, setLogInSuccess] = useState(false);
  const [pwError, setPwError] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("users"))) {
      setLocalUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, []);

  const handleChange = (input) => (e) => {
    setCurrentUser({ ...currentUser, [input]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser.pw.length >= 3 && currentUser.pw.length <= 10) {
      setPwError(false);
    } else {
      setPwError(true);
    }
    if (localUsers !== null) {
      if (
        localUsers.some(
          (user) => user.id === currentUser.id && user.pw === currentUser.pw
        )
      ) {
        setLogInSuccess(true);
      } else {
        setLogInSuccess(false);
        localStorage.removeItem("currentUser");
        setCurrentUser({ id: "", pw: "" });
      }
    } else {
      setLogInSuccess(false);
    }
  };

  if (logInSuccess) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    history.push("/");
  }

  return (
    <LogInContainer>
      <LogInIcon />
      <h1>Log In</h1>
      <LogInForm onSubmit={handleSubmit}>
        <IDLabel>ID</IDLabel>
        <IDInput
          onChange={handleChange("id")}
          type="text"
          value={currentUser.id}
        />
        <PWLabel>Password</PWLabel>
        <PWInput
          onChange={handleChange("pw")}
          type="password"
          value={currentUser.pw}
        />
        {pwError && <PWError>more than 3 and less than 10</PWError>}
        <SubmitBtn type="submit">Log In</SubmitBtn>
      </LogInForm>
      <SignUpBtn to="/signUp">
        Sign Up
        <SignUpIcon />
      </SignUpBtn>
    </LogInContainer>
  );
};

export default LogIn;
