import React, { useState } from "react";
import { Data } from "../home/Data";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import ButtonComponet from "../../components/Button";
import cookingClass from "../../images/cookingClass.jpg";
import { useHistory } from "react-router-dom";
import LectureDetails from "./fragments/LectureDetails";

const Lecture = () => {
  let history = useHistory();
  const [lecture, setLecture] = useState({});
  const [step, setStep] = useState(1);
  const pageCount = Math.ceil(Data.length / 5);

  console.log(lecture);
  return (
    <>
      {Object.keys(lecture).length === 0 ? (
        <LectureBg>
          <BackBtn onClick={() => history.push("/")} />
          <LectureTitle>요리 수업</LectureTitle>
          {[...Array(pageCount)].map(
            (n, page) =>
              step === page + 1 &&
              Data.map(
                (food, index) =>
                  index < 5 * (page + 1) &&
                  index >= 5 * page && (
                    <LectureCard key={index}>
                      <CardPicture image={food.image} />
                      <CardTextContainer>
                        <CardName>{food.name}</CardName>
                        <CardPrice>{food.price + 15000} 원</CardPrice>
                      </CardTextContainer>
                      <ApplyBtn onClick={() => setLecture(food)}>
                        수업 신청
                      </ApplyBtn>
                    </LectureCard>
                  )
              )
          )}
          <PageMoveBtnContainer>
            <PrevBtn onClick={() => (step === 1 ? null : setStep(step - 1))} />
            <NextBtn
              onClick={() => (step === pageCount ? null : setStep(step + 1))}
            />
          </PageMoveBtnContainer>
        </LectureBg>
      ) : (
        <LectureDetails lecture={lecture} setLecture={setLecture} />
      )}
    </>
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
  margin-right: 10px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  font-size: 1.2rem;
`;

const PageMoveBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 10px;
`;

const PrevBtn = styled(IoIosArrowDropleft)`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

const NextBtn = styled(IoIosArrowDropright)`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
`;
