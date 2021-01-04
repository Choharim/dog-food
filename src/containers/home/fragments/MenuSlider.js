import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const MenuSlider = ({ foodArray, gotMenuDetails }) => {
  const [favorite, setFavorite] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <MenuContainer {...settings}>
      {foodArray.map((food, index) => {
        return (
          <MenuItemContainer
            id="food"
            key={index}
            onClick={(e) => {
              if (e.target.id === "food") {
                gotMenuDetails(food);
              }
            }}
          >
            {index === favorite.find((item) => item === index) ? (
              <FillHeartIcon
                onClick={() =>
                  setFavorite(favorite.filter((item) => item !== index))
                }
              />
            ) : (
              <HeartIcon onClick={() => setFavorite([...favorite, index])} />
            )}
            <FoodPicture src={food.image} />
            <FoodName>{food.name}</FoodName>
            <FoodPrice>{food.price} 원</FoodPrice>
          </MenuItemContainer>
        );
      })}
    </MenuContainer>
  );
};

export default MenuSlider;

const MenuContainer = styled(Slider)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;
  .slick-dots {
    > li {
      margin: -5px -2px;
    }
  }
`;

const MenuItemContainer = styled.button`
  height: 380px;
  margin: 0 20px;
  outline: none;
  border-radius: 10px;
  border: 2px solid;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: relative;
  top: 15px;
  right: -55%;
  font-size: 2rem;
`;

const FillHeartIcon = styled(AiFillHeart)`
  position: relative;
  top: 15px;
  right: -55%;
  font-size: 2rem;
  color: rgb(237, 73, 86);
`;

const FoodPicture = styled.img`
  border-radius: 50%;
  width: 210px;
  height: 210px;
  margin-bottom: 20px;
`;

const FoodName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
const FoodPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
`;
