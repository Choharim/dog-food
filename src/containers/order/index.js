import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import OrderData from "./fragments/OrdeData";

const Order = () => {
  let history = useHistory();
  const location = useLocation();
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const DataArray = [];
    if (location.state !== undefined) {
      for (let i = 1; i <= location.state.count; i++) {
        DataArray.push({});
      }
    }
    setOrderData(DataArray);
  }, []);

  return (
    <>
      {location.state === undefined ? (
        history.push("/")
      ) : (
        <Container>
          <FoodPicture showMenuDetails={location.state.showMenuDetails}>
            <BackBtn onClick={() => history.push("/")} />
          </FoodPicture>
          <OrderData
            showMenuDetails={location.state.showMenuDetails}
            orderData={orderData}
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
