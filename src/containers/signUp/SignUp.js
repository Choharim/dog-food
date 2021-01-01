import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import DaumPostcode from "react-daum-postcode";

const SignUp = () => {
  const [userObj, setUserObj] = useState({
    id: "",
    pw: "",
    name: "",
    extraAddress: "",
    zoneCode: "",
    address: "",
    phone: "",
  });
  const [usersArray, setUsersArray] = useState([]);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [searchAddress, setSearchAddress] = useState(false);
  const userData = {
    닉네임: userObj.id,
    비밀번호: userObj.pw,
    이름: userObj.name,
    주소: `(${userObj.zoneCode}) ${userObj.address}, ${userObj.extraAddress}`,
    전화번호: userObj.phone,
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("users"))) {
      setUsersArray(JSON.parse(localStorage.getItem("users")));
    }
  }, []);

  const backStep = () => {
    setStep(step - 1);
    setUsersArray(usersArray.slice(0, -1));
  };
  const handleAddress = (data) => {
    let address = data.address;
    let extraAddress = "";
    let zoneCode = data.zonecode;

    if (data.userSelectedType === "R") {
      address = data.roadAddress;
    } else {
      address = data.jibunAddress;
    }
    if (data.userSelectedType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setUserObj({ ...userObj, zoneCode, address });
  };

  const handleChange = (input) => (e) => {
    setUserObj((pre) => ({ ...pre, [input]: e.target.value }));
  };
  const createUsersArray = () => {
    setUsersArray((pre) => [...pre, userObj]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userObj.id !== "" &&
      userObj.pw.length >= 3 &&
      userObj.pw.length <= 10 &&
      userObj.name !== "" &&
      userObj.address !== "" &&
      userObj.phone !== "" &&
      usersArray.every(
        (user) => user.id !== userObj.id && user.phone !== userObj.phone
      )
    ) {
      createUsersArray();
      setSignUpSuccess(true);
      setStep(step + 1);
    } else {
      setSignUpSuccess(false);
    }
  };

  if (signUpSuccess) {
    localStorage.setItem("users", JSON.stringify(usersArray));
  }
  console.log(userObj);
  return (
    <SignUpContainer>
      {step === 1 && (
        <>
          <h1>Sign Up</h1>
          <SignUpForm onSubmit={handleSubmit}>
            <IDLabel>ID</IDLabel>
            <IDInput
              onChange={handleChange("id")}
              value={userObj.id}
              type="text"
            />
            <PWLabel>Password</PWLabel>
            <PWInput
              onChange={handleChange("pw")}
              value={userObj.pw}
              type="password"
            />
            <NameLabel>Name</NameLabel>
            <NameInput onChange={handleChange("name")} value={userObj.name} />
            <AddressLabel>Address</AddressLabel>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <ZoneCodeInput value={userObj.zoneCode} />
              <AddressBtn onClick={() => setSearchAddress(true)}>
                Search
              </AddressBtn>
            </div>
            <AddressInput
              onChange={handleChange("address")}
              value={userObj.address}
            />
            <ExtraAddressInput
              onChange={handleChange("extraAddress")}
              value={userObj.extraAddress}
            />
            {searchAddress && (
              <DaumPostContainer>
                <ZoneCodeDelBtn onClick={() => setSearchAddress(false)} />
                <DaumPostcode onComplete={handleAddress} />
              </DaumPostContainer>
            )}
            <PhoneLabel>Phone Number</PhoneLabel>
            <PhoneInput
              onChange={handleChange("phone")}
              value={userObj.phone}
              type="tel"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              placeholder="ex)010-1234-5678"
            />
            <SignUpBtn type="submit">Sign Up</SignUpBtn>
          </SignUpForm>
        </>
      )}
      {step === 2 && (
        <>
          <ListContainer>
            {Object.entries(userData).map((ele) => (
              <>
                <ListTitle>{ele[0]}</ListTitle>
                <ListContent>{ele[1]}</ListContent>
              </>
            ))}
          </ListContainer>
          <BackBtn onClick={backStep}>Back</BackBtn>
        </>
      )}
      <LogInBtn to="/">
        Log In
        <LogInIcon />
      </LogInBtn>
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

const AddressBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
`;

const DaumPostContainer = styled.div`
  border: 1px solid;
  margin: 3px;
  position: relative;
  top: -5px;
`;

const ZoneCodeInput = styled.input`
  width: 50%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

const ZoneCodeDelBtn = styled(TiDelete)`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
`;

const AddressInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

const ExtraAddressInput = styled.input`
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

const SignUpBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  align-self: flex-end;
`;

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListTitle = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 20px;
`;

const ListContent = styled.li`
  font-weight: lighter;
  padding-bottom: 10px;
`;

const BackBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
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
