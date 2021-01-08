import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import SuccessOrder from "./fragments/SuccessOrder";
import styled from "styled-components";

const OrderUserInfo = () => {
  let history = useHistory();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [orderInfo, setOrderInfo] = useState({});

  useEffect(() => {
    if (localStorage.getItem("currentUser") && location.state !== undefined) {
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
    }
  }, []);

  console.log(orderInfo, "info");

  return (
    <>
      {location.state === undefined ? (
        history.push("/")
      ) : (
        <>
          {step === 1 ? (
            <Container>hi</Container>
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
