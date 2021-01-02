import React, { useState, useEffect } from "react";
import drink from "../../icons/drink.png";
import dish from "../../icons/dish.png";
import snack from "../../icons/snack.png";
import {
  BarIcon,
  Navbar,
  LogOut,
  LogIn,
  MenuFilterContainer,
  MenuFilterItem,
  MenuFilterIcon,
  MenuFilterText,
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
    <>
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
        <MenuFilterItem onClick={() => setCategory("dish")}>
          <MenuFilterIcon src={dish} />
          <MenuFilterText>Dish</MenuFilterText>
        </MenuFilterItem>
        <MenuFilterItem onClick={() => setCategory("drink")}>
          <MenuFilterIcon src={drink} />
          <MenuFilterText>Drink</MenuFilterText>
        </MenuFilterItem>
        <MenuFilterItem onClick={() => setCategory("snack")}>
          <MenuFilterIcon src={snack} />
          <MenuFilterText>Snack</MenuFilterText>
        </MenuFilterItem>
      </MenuFilterContainer>
    </>
  );
};

export default Home;
