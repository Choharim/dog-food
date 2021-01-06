import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import OrderDetails from "./fragments/OrderDetails";

const Order = () => {
  let history = useHistory();
  const location = useLocation();

  return (
    <>
      {location.state === undefined ? (
        history.push("/")
      ) : (
        <Container>
          <FoodPicture showMenuDetails={location.state.showMenuDetails}>
            <BackBtn onClick={() => history.push("/")} />
          </FoodPicture>
          <OrderDetails
            showMenuDetails={location.state.showMenuDetails}
            count={location.state.count}
          />
        </Container>
      )}
    </>
  );
};

export default Order;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FoodPicture = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.showMenuDetails.image2});
  background-size: contain;
`;

const BackBtn = styled(AiOutlineArrowLeft)`
  margin: 5px;
  padding: 10px;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;
