import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const SignUp = () => {
  const [users, setUsers] = useState({
    step: 1,
    id: "",
    pw: "",
    name: "",
    address: "",
    phone: "",
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleChange = (input) => (e) => {
    setUsers((pre) => ({ ...pre, [input]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      users.id !== "" &&
      users.pw.length >= 3 &&
      users.pw.length <= 10 &&
      users.name !== "" &&
      users.address !== "" &&
      users.phone !== ""
    ) {
      setSignUpSuccess(true);
      setUsers((pre) => ({ ...pre, step: pre.step + 1 }));
    } else {
      setSignUpSuccess(false);
    }
  };

  if (signUpSuccess) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  return (
    <SignUpContainer>
      {users.step === 1 && (
        <>
          <h1>Sign Up</h1>
          <SignUpForm onSubmit={handleSubmit}>
            <IDLabel>ID</IDLabel>
            <IDInput onChange={handleChange("id")} type="text" />
            <PWLabel>Password</PWLabel>
            <PWInput onChange={handleChange("pw")} type="password" />
            <NameLabel>Name</NameLabel>
            <NameInput onChange={handleChange("name")} />
            <AddressLabel>Address</AddressLabel>
            <AddressInput onChange={handleChange("address")} />
            <PhoneLabel>Phone Number</PhoneLabel>
            <PhoneInput
              onChange={handleChange("phone")}
              type="tel"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              placeholder="ex)010-1234-5678"
            />
            <SubmitBtn type="submit">Sign Up</SubmitBtn>
          </SignUpForm>
        </>
      )}
      {users.step === 2 && (
        <LogInBtn to="/">
          Log In
          <LogInIcon />
        </LogInBtn>
      )}
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpForm = styled.form`
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

const NameLabel = styled.label`
  font-size: 1.2rem;
`;

const NameInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

const AddressLabel = styled.label`
  font-size: 1.2rem;
`;

const AddressInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

const PhoneLabel = styled.label`
  font-size: 1.2rem;
`;

const PhoneInput = styled.input`
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

const LogInBtn = styled(Link)`
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

const LogInIcon = styled(AiOutlineArrowRight)`
  font-size: 1.5rem;
  padding-left: 5px;
`;
