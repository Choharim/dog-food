import React from "react";
import { Data } from "../home/Data";
import styled from "styled-components";
import ButtonComponet from "../../components/Button";
import cookingClass from "../../images/cookingClass.jpg";

const Lecture = () => {
  return (
    <LectureBg>
      <LectureTitle>요리 수업</LectureTitle>
      {Data.map((food) => (
        <LectureCard>
          <CardPicture image={food.image} />
          <CardTextContainer>
            <CardName>{food.name}</CardName>
            <CardPrice>{food.price + 15000} 원</CardPrice>
          </CardTextContainer>
          <ApplyBtn>수업 신청</ApplyBtn>
        </LectureCard>
      ))}
    </LectureBg>
  );
};

export default Lecture;

const LectureBg = styled.div`
  width: 100%;
  background-image: url(${cookingClass});
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LectureTitle = styled.span`
  font-size: 2rem;
  font-weight: bolder;
  color: white;
  padding: 10px;
`;

const LectureCard = styled.div`
  margin: 15px 0;
  padding: 10px;
  width: 80%;
  border-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardPicture = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  border-radius: 50%;
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardName = styled.span`
  font-weight: bolder;
  font-size: 1.4rem;
`;

const CardPrice = styled.span`
  font-size: 1.2rem;
`;

const ApplyBtn = styled(ButtonComponet)`
  width: 70px;
  height: 70px;
  margin-right: 10px;
  border-radius: 50%;
  font-size: 1.2rem;
`;
