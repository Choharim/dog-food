import React, { useState, useEffect } from "react";
import Categories from "./fragments/Categories";
import MenuSlider from "./fragments/MenuSlider";
import MenuDetails from "./fragments/MenuDetails";
import ApplyModal from "./fragments/ApplyModal";
import { Data } from "./Data";
import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({});
  const [foodArray, setFoodArray] = useState(Data);
  const [showMenuDetails, setShowMenuDetails] = useState({});
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const users = JSON.parse(localStorage.getItem("users"));
      setIsUser(true);
      setCurrentUserInfo(
        users.find(
          (user) => user.id === currentUser.id && user.pw === currentUser.pw
        )
      );
    } else {
      setIsUser(false);
    }
  }, []);

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("favorite")));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const logOut = () => {
    localStorage.removeItem("currentUser");
    setIsUser(false);
  };
  const filterFoodArray = (category) => {
    setFoodArray(Data.filter((food) => food.category === category));
  };
  console.log(currentUserInfo);

  return (
    <>
      {Object.keys(showMenuDetails).length === 0 ? (
        <HomeContainer>
          {isUser && currentUserInfo.userPicture !== "" && (
            <UserPicture image={currentUserInfo.userPicture}></UserPicture>
          )}
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
          <MenuSlider
            foodArray={foodArray}
            setShowMenuDetails={setShowMenuDetails}
            favorite={favorite}
            setFavorite={setFavorite}
          />
          <ApplyModal />
        </HomeContainer>
      ) : (
        <MenuDetails
          showMenuDetails={showMenuDetails}
          setShowMenuDetails={setShowMenuDetails}
          favorite={favorite}
          setFavorite={setFavorite}
        />
      )}
    </>
  );
};

export default Home;
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserPicture = styled.div`
  margin: 10px 10px 0 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  right: -40%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const BarIcon = styled(FaBars)`
  position: fixed;
  right: 0;
  font-size: 1.5rem;
  padding: 10px;
  z-index: 1000;
  ${(props) =>
    props.showNavbar === true &&
    css`
      color: white;
    `};
`;
const Navbar = styled.div`
  width: 330px;
  height: 100vh;
  background-color: black;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const LogOut = styled.button`
  outline: none;
  border: none;
  font-size: 1.4rem;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

const LogIn = styled(Link)`
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
`;
