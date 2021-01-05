import React from "react";
import styled from "styled-components";
import {
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

const MenuDetails = ({
  showMenuDetails,
  setShowMenuDetails,
  favorite,
  setFavorite,
}) => {
  return (
    <MenuDetailsContainer>
      <MenuDetailsCard>
        <MenuDetailsPicture image={showMenuDetails.image}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        </MenuDetailsPicture>
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
`;

const BackBtn = styled(AiOutlineArrowLeft)`
  margin: 5px;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: relative;
  top: 15px;
  right: -55%;
  font-size: 2rem;
  cursor: pointer;
`;

const FillHeartIcon = styled(AiFillHeart)`
  position: relative;
  top: 15px;
  right: -55%;
  font-size: 2rem;
  color: rgb(237, 73, 86);
  cursor: pointer;
`;

const MenuDetailsPicture = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
`;
