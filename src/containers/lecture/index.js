import React, { useState } from "react";
import { Data } from "../home/Data";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import ButtonComponet from "../../components/Button";
import cookingClass from "../../images/cookingClass.jpg";

const Lecture = () => {
  const [step, setStep] = useState(1);
  return (
    <LectureBg>
      <BackBtn />
      <LectureTitle>요리 수업</LectureTitle>
      {Data.map(
        (food, index) =>
          step === 1 &&
          index < 5 && (
            <LectureCard key={index}>
              <CardPicture image={food.image} />
              <CardTextContainer>
                <CardName>{food.name}</CardName>
                <CardPrice>{food.price + 15000} 원</CardPrice>
              </CardTextContainer>
              <ApplyBtn>수업 신청</ApplyBtn>
            </LectureCard>
          )
      )}
      <PageMoveBtnContainer>
        <PrevBtn />
        <NextBtn />
      </PageMoveBtnContainer>
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

const BackBtn = styled(AiOutlineArrowLeft)`
  margin-left: 5px;
  padding: 10px;
  font-size: 2rem;
  color: white;
  align-self: flex-start;
  cursor: pointer;
`;

const LectureTitle = styled.span`
  font-size: 2rem;
  font-weight: bolder;
  color: white;
`;

const LectureCard = styled.div`
  margin-top: 25px;
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

const PageMoveBtnContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
`;

const PrevBtn = styled(IoIosArrowDropleft)`
  padding: 3px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 2.5rem;
  border-radius: 50%;
`;

const NextBtn = styled(IoIosArrowDropright)`
  padding: 3px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 2.5rem;
  border-radius: 50%;
`;
