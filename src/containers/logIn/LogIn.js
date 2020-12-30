import React, { useState } from "react";
import styled from "styled-components";
import { FaDog } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [currentUser, setCurrentUser] = useState({ id: "", pw: "" });
  const [logInSuccess, setLogInSuccess] = useState(false);
  const [pwError, setPwError] = useState(false);
  const str_LS_users = localStorage.getItem("users");
  const pars_LS_users = JSON.parse(str_LS_users);
  const { id, pw } = currentUser;

  const handleChange = (input) => (e) => {
    setCurrentUser({ ...currentUser, [input]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser.pw.length < 3 || currentUser.pw.length > 10) {
      setPwError(true);
    } else {
      setPwError(false);
    }
    if (pars_LS_users !== null) {
      pars_LS_users.forEach((user) => {
        if (user.id === currentUser.id && user.pw === currentUser.pw) {
          setLogInSuccess(true);
        }
      });
    } else {
      alert("Please Sign Up");
    }
  };

  if (logInSuccess) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  return (
    <LogInContainer>
      <LogInIcon />
      <h1>Log In</h1>
      <LogInForm onSubmit={handleSubmit}>
        <IDLabel>ID</IDLabel>
        <IDInput onChange={handleChange("id")} type="text" />
        <PWLabel>Password</PWLabel>
        <PWInput onChange={handleChange("pw")} type="password" />
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

const LogInContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogInIcon = styled(FaDog)`
  font-size: 3.5rem;
`;

const LogInForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IDLabel = styled.label`
  font-size: 1.2rem;
`;

const IDInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

const PWLabel = styled.label`
  font-size: 1.2rem;
`;

const PWInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

const PWError = styled.p`
  width: 100%;
  margin: 0;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
`;

const SubmitBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  align-self: flex-end;
`;

const SignUpBtn = styled(Link)`
  width: 40%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

const SignUpIcon = styled(AiOutlineArrowRight)`
  font-size: 1.5rem;
  padding-left: 5px;
`;
