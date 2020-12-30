import React, { useState } from "react";
import styled from "styled-components";
import { FaDog } from "react-icons/fa";

const LogIn = () => {
  const [currentUser, setCurrentUser] = useState({ id: "", pw: "" });
  const [logInSuccess, setLogInSuccess] = useState(false);
  const str_LS_users = localStorage.getItem("users");
  const pars_LS_users = JSON.parse(str_LS_users);
  const { id, pw } = currentUser;

  const handleChange = (input) => (e) => {
    setCurrentUser({ ...currentUser, [input]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pars_LS_users !== null) {
      pars_LS_users.forEach((user) => {
        if (user.id === currentUser.id && user.pw === currentUser.pw) {
          setLogInSuccess(true);
        }
      });
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
        <IDInput onChange={handleChange("id")} />
        <PWLabel>Password</PWLabel>
        <PWInput onChange={handleChange("pw")} />
        <SubmitBtn type="submit">Log In</SubmitBtn>
      </LogInForm>
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

const SubmitBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  align-self: flex-end;
`;
