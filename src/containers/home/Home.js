import React, { useState, useEffect } from "react";
import { BarContainer, BarIcon, Navbar, LogOut, LogIn } from "./Style";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isUser, setIsUser] = useState(false);

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

  return (
    <BarContainer>
      <BarIcon onClick={() => setShowNavbar(!showNavbar)} />
      {showNavbar && (
        <Navbar>
          {isUser ? (
            <LogOut onClick={logOut}>Log Out</LogOut>
          ) : (
            <LogIn to="/signIn">Log In</LogIn>
          )}
        </Navbar>
      )}
    </BarContainer>
  );
};

export default Home;
