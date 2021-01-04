import React, { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import {
  SignUpContainer,
  SignUpForm,
  IDLabel,
  IDInput,
  PWLabel,
  PWInput,
  NameLabel,
  NameInput,
  AddressLabel,
  AddressBtn,
  DaumPostContainer,
  ZoneCodeInput,
  ZoneCodeDelBtn,
  AddressInput,
  ExtraAddressInput,
  PhoneLabel,
  PhoneInput,
  SignUpBtn,
  ListContainer,
  ListTitle,
  ListContent,
  BackBtn,
  LogInBtn,
  LogInIcon,
} from "./Style";

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
      <LogInBtn to="/signIn">
        Log In
        <LogInIcon />
      </LogInBtn>
    </SignUpContainer>
  );
};

export default SignUp;
