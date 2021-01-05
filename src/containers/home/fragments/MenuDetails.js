import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const MenuDetails = ({
  showMenuDetails,
  setShowMenuDetails,
  favorite,
  setFavorite,
}) => {
  const [count, setCount] = useState(1);

  return (
    <MenuDetailsContainer>
      <MenuDetailsCard>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BackBtn onClick={() => setShowMenuDetails({})} />
          {favorite.some((item) => item === showMenuDetails.name) ? (
            <FillHeartIcon
              onClick={() =>
                setFavorite(
                  favorite.filter((item) => item !== showMenuDetails.name)
                )
              }
            />
          ) : (
            <HeartIcon
              onClick={() => setFavorite([...favorite, showMenuDetails.name])}
            />
          )}
        </div>
        <MenuDetailsName>{showMenuDetails.name}</MenuDetailsName>
        <MenuDetailsPicture image={showMenuDetails.image} />
        <CountContainer>
          <MinusBtn
            onClick={() => (count <= 1 ? setCount(1) : setCount(count - 1))}
          />
          <Count>{count}</Count>
          <PlusBtn onClick={() => setCount(count + 1)} />
        </CountContainer>
        <PriceBuyContainer>
          <Price>{count * showMenuDetails.price} 원</Price>
          <BuyBtn>Buy Now</BuyBtn>
        </PriceBuyContainer>
      </MenuDetailsCard>
    </MenuDetailsContainer>
  );
};

export default MenuDetails;

const MenuDetailsContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuDetailsCard = styled.div`
  width: 90%;
  height: 94%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackBtn = styled(AiOutlineArrowLeft)`
  margin: 5px;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
`;

const HeartIcon = styled(AiOutlineHeart)`
  margin: 5px;
  padding: 10px;
  font-size: 2.5rem;
  cursor: pointer;
`;

const FillHeartIcon = styled(AiFillHeart)`
  margin: 5px;
  padding: 10px;
  font-size: 2.5rem;
  color: rgb(237, 73, 86);
  cursor: pointer;
`;

const MenuDetailsName = styled.h1``;

const MenuDetailsPicture = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
`;

const CountContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MinusBtn = styled(AiOutlineMinusCircle)`
  padding: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

const Count = styled.span`
  font-size: 2rem;
`;

const PlusBtn = styled(AiOutlinePlusCircle)`
  padding: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

const PriceBuyContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Price = styled.span`
  padding: 20px 40px;
  font-size: 1.8rem;
`;

const BuyBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 15px;
  font-size: 1.8rem;
  padding: 20px 40px;
  cursor: pointer;
`;
