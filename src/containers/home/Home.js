import React, { useState, useEffect } from "react";
import drink from "../../icons/drink.png";
import dish from "../../icons/dish.png";
import snack from "../../icons/snack.png";
import {
  HomeContainer,
  BarIcon,
  Navbar,
  LogOut,
  LogIn,
  MenuFilterContainer,
  MenuFilterItem,
  MenuFilterIcon,
  MenuFilterText,
  MenuContainer,
  MenuItemContainer,
  HeartIcon,
} from "./Style";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("currentUser");
    setIsUser(false);
  };

  console.log(category);
  return (
    <HomeContainer>
      <BarIcon
        showNavbar={showNavbar}
        onClick={() => setShowNavbar(!showNavbar)}
      />
      {showNavbar && (
        <Navbar>
          {isUser ? (
            <LogOut onClick={logOut}>Log Out</LogOut>
          ) : (
            <LogIn to="/signIn">Log In</LogIn>
          )}
        </Navbar>
      )}
      <MenuFilterContainer>
        <MenuFilterItem
          color={category === "dish"}
          onClick={() => setCategory("dish")}
        >
          <MenuFilterIcon src={dish} />
          <MenuFilterText>Dish</MenuFilterText>
        </MenuFilterItem>
        <MenuFilterItem
          color={category === "drink"}
          onClick={() => setCategory("drink")}
        >
          <MenuFilterIcon src={drink} />
          <MenuFilterText>Drink</MenuFilterText>
        </MenuFilterItem>
        <MenuFilterItem
          color={category === "snack"}
          onClick={() => setCategory("snack")}
        >
          <MenuFilterIcon src={snack} />
          <MenuFilterText>Snack</MenuFilterText>
        </MenuFilterItem>
      </MenuFilterContainer>
      <MenuContainer>
        <MenuItemContainer>
          <HeartIcon />
        </MenuItemContainer>
        <MenuItemContainer>
          <HeartIcon />
        </MenuItemContainer>
        <MenuItemContainer>
          <HeartIcon />
        </MenuItemContainer>
        <MenuItemContainer>
          <HeartIcon />
        </MenuItemContainer>
      </MenuContainer>
    </HomeContainer>
  );
};

export default Home;
