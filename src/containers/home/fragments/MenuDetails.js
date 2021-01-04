import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MenuDetails = ({ showMenuDetails, setShowMenuDetails }) => {
  return (
    <MenuDetailsContainer>
      <MenuDetailsPicture image={showMenuDetails.image2}>
        <BackBtn onClick={() => setShowMenuDetails({})} />
      </MenuDetailsPicture>
    </MenuDetailsContainer>
  );
};

export default MenuDetails;

const MenuDetailsContainer = styled.div`
  width: 100%;
`;

const MenuDetailsPicture = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.image});
  background-size: 60%;
`;

const BackBtn = styled(AiOutlineArrowLeft)`
  margin: 5px;
  padding: 10px;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;
