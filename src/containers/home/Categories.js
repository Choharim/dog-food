import React, { useState } from "react";
import drink from "../../icons/drink.png";
import dish from "../../icons/dish.png";
import snack from "../../icons/snack.png";
import {
  MenuFilterContainer,
  MenuFilterItem,
  MenuFilterIcon,
  MenuFilterText,
} from "./Style";

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
