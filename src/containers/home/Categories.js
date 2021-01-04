import React, { useState } from "react";
import drink from "../../icons/drink.png";
import dish from "../../icons/dish.png";
import snack from "../../icons/snack.png";
import styled, { css } from "styled-components";

const Categories = ({ filterFoodArray }) => {
  const [clickCategory, setClickCategory] = useState("all");

  return (
    <MenuFilterContainer>
      <MenuFilterItem
        color={clickCategory === "dish"}
        onClick={() => {
          setClickCategory("dish");
          filterFoodArray("dish");
        }}
      >
        <MenuFilterIcon src={dish} />
        <MenuFilterText>Dish</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={clickCategory === "drink"}
        onClick={() => {
          setClickCategory("drink");
          filterFoodArray("drink");
        }}
      >
        <MenuFilterIcon src={drink} />
        <MenuFilterText>Drink</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={clickCategory === "snack"}
        onClick={() => {
          setClickCategory("snack");
          filterFoodArray("snack");
        }}
      >
        <MenuFilterIcon src={snack} />
        <MenuFilterText>Snack</MenuFilterText>
      </MenuFilterItem>
    </MenuFilterContainer>
  );
};

export default Categories;

const MenuFilterContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const MenuFilterItem = styled.button`
  outline: none;
  background-color: transparent;
  width: 110px;
  height: 110px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      background-color: #f0e2d0;
    `}
`;

const MenuFilterIcon = styled.img`
  width: 80px;
  height: 75px;
`;

const MenuFilterText = styled.span`
  font-size: 1.2rem;
`;
