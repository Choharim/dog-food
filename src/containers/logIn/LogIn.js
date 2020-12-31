import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaDog } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";

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
    history.push("/menu");
  }
  // console.log(currentUser, logInSuccess, pwError);

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
  color: black;
  &:visited {
    color: black;
  }
`;

const SignUpIcon = styled(AiOutlineArrowRight)`
  font-size: 1.5rem;
  padding-left: 5px;
`;
