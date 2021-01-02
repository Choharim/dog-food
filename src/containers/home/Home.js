import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  BarIcon,
  Navbar,
  LogOut,
  LogIn,
  MenuContainer,
  MenuItemContainer,
  HeartIcon,
  FoodPicture,
} from "./Style";
import Categories from "./Categories";
import { Data } from "./Data";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [foodArray, setFoodArray] = useState(Data);

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

  const filterFoodArray = (category) => {
    setFoodArray(Data.filter((food) => food.category === category));
  };

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
      <Categories filterFoodArray={filterFoodArray} />
      <MenuContainer>
        {foodArray.map((food, index) => {
          return (
            <MenuItemContainer key={index}>
              <HeartIcon />
              <FoodPicture src={food.image} />
            </MenuItemContainer>
          );
        })}
      </MenuContainer>
    </HomeContainer>
  );
};

export default Home;
