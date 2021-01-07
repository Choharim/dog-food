import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ButtonComponet from "../../../components/Button";

const LectureDetails = ({ lecture, setLecture }) => {
  const [date, setDate] = useState(new Date());
  const [dataObj, setDataObj] = useState({
    data: "",
    time: "",
    items: [],
    service: "",
  });
  console.log(date);

  return (
    <DetailsContainer image={lecture.image2}>
      <BackBtn onClick={() => setLecture({})} />
      <DetailsTitle>{lecture.name} Class</DetailsTitle>
      <Container>
        <Title>수업 날짜</Title>
        <CalendarBox onChange={setDate} date={date} />
      </Container>
      <Container>
        <Title>수업 시간</Title>
        <TimeContainer>
          <ChoiceBtn>오전 10:30 ~ 12:30</ChoiceBtn>
          <ChoiceBtn>오후 1:30 ~ 3:30</ChoiceBtn>
          <ChoiceBtn>오후 4:00 ~ 6:00</ChoiceBtn>
        </TimeContainer>
      </Container>
      <Container>
        <Title>무료 서비스</Title>
        <ServiceContainer>
          <ChoiceBtn>앞치마</ChoiceBtn>
          <ChoiceBtn>포장 그릇</ChoiceBtn>
          <ChoiceBtn>강아지 방석</ChoiceBtn>
          <ChoiceBtn>그 외</ChoiceBtn>
        </ServiceContainer>
      </Container>
      <Container>
        <Title>수업 후</Title>
        <ServiceContainer>
          <ChoiceBtn>소모임 파티</ChoiceBtn>
          <ChoiceBtn>개인 파티</ChoiceBtn>
          <ChoiceBtn>포장</ChoiceBtn>
        </ServiceContainer>
      </Container>
      <ApplyBtn>수업 신청</ApplyBtn>
    </DetailsContainer>
  );
};

export default LectureDetails;

const DetailsContainer = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.image});
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackBtn = styled(AiOutlineCloseCircle)`
  margin: 10px 10px 0 0;
  padding: 5px;
  font-size: 2.5rem;
  color: white;
  border-radius: 50%;
  align-self: flex-end;
  cursor: pointer;
`;

const DetailsTitle = styled.span`
  font-size: 1.5rem;
  color: white;
`;

const Container = styled.div`
  width: 85%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  color: white;
  align-self: flex-start;
  font-size: 1.2rem;
  margin: 0 0 15px 5px;
`;

const CalendarBox = styled(Calendar)`
  width: 100%;
  padding: 10px 10px 25px 10px;
  border-radius: 20px;
  font-size: 1.5rem;
`;

const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ChoiceBtn = styled(ButtonComponet)`
  background-color: white;
  border: none;
  padding: 15px;
  width: 30%;
  margin-bottom: 10px;
`;

const ServiceContainer = styled(TimeContainer)`
  flex-wrap: wrap;
`;

const ApplyBtn = styled(ButtonComponet)`
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 0;
`;
