import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import SuccessOrder from "./fragments/SuccessOrder";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { TiDelete } from "react-icons/ti";

const OrderUserInfo = () => {
  let history = useHistory();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [orderInfo, setOrderInfo] = useState({});
  const [searchAddress, setSearchAddress] = useState(false);

  useEffect(() => {
    if (location.state !== undefined) {
      if (localStorage.getItem("currentUser")) {
        const users = JSON.parse(localStorage.getItem("users"));
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        currentUser = users.find(
          (user) => user.id === currentUser.id && user.pw === currentUser.pw
        );
        setOrderInfo({
          ...currentUser,
          menu: location.state.showMenuDetails.name,
          price: location.state.showMenuDetails.price,
          count: location.state.count,
        });
      } else {
        setOrderInfo({
          menu: location.state.showMenuDetails.name,
          price: location.state.showMenuDetails.price,
          count: location.state.count,
        });
      }
    }
  }, []);

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
    setOrderInfo({ ...orderInfo, zoneCode, address });
  };

  console.log(orderInfo, "info");

  return (
    <>
      {location.state === undefined ? (
        history.push("/")
      ) : (
        <>
          {step === 1 ? (
            <Container>
              <Title>{orderInfo.menu} 주문하기</Title>
              <InputContainer>
                <InputLabel>이름</InputLabel>
                <InputBox
                  defaultValue={orderInfo.name !== "" ? orderInfo.name : ""}
                  type="text"
                  placeholder="이름을 적어주세요"
                />
                <InputLabel>전화번호</InputLabel>
                <InputBox
                  defaultValue={orderInfo.phone !== "" ? orderInfo.phone : ""}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  placeholder="ex)010-1234-5678"
                />
                <InputLabel>주소</InputLabel>
                <ZoncodeInput
                  defaultValue={
                    orderInfo.zoneCode !== "" ? orderInfo.zoneCode : ""
                  }
                />
                <div style={{ display: "flex" }}>
                  <AddressInput
                    defaultValue={
                      orderInfo.address !== "" ? orderInfo.address : ""
                    }
                  />
                  <AddressBtn onClick={() => setSearchAddress(true)}>
                    주소 검색
                  </AddressBtn>
                </div>
                {searchAddress && (
                  <DaumPostContainer>
                    <ZoneCodeDelBtn onClick={() => setSearchAddress(false)} />
                    <DaumPostcode onComplete={handleAddress} />
                  </DaumPostContainer>
                )}
                <AddressInput
                  defaultValue={
                    orderInfo.extraAddress !== "" ? orderInfo.extraAddress : ""
                  }
                />
              </InputContainer>
              <MenuContainer>
                <Menu>{orderInfo.menu}</Menu>
                <MenuPice>
                  {orderInfo.price} 원 * {orderInfo.count} 개 ={" "}
                  {orderInfo.price * orderInfo.count} 원
                </MenuPice>
              </MenuContainer>
              <OrderBtn onClick={() => setStep(step + 1)}>주문하기</OrderBtn>
            </Container>
          ) : (
            <SuccessOrder setStep={setStep} />
          )}
        </>
      )}
    </>
  );
};

export default OrderUserInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.5rem;
  margin-top: 100px;
`;

const InputContainer = styled.form`
  margin-top: 70px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const InputLabel = styled.label``;

const InputBox = styled.input`
  width: 30%;
  margin: 5px 0 10px;
`;

const ZoncodeInput = styled(InputBox)`
  width: 20%;
`;

const AddressInput = styled(InputBox)`
  width: 70%;
`;

const AddressBtn = styled.button`
  margin-left: 10px;
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

const ZoneCodeDelBtn = styled(TiDelete)`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
`;

const MenuContainer = styled.div`
  width: 80%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.span`
  font-size: 2rem;
`;

const MenuPice = styled.span`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const OrderBtn = styled.button`
  margin-top: 100px;
  width: 80%;
  font-size: 2rem;
`;
