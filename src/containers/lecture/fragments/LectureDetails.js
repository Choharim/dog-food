import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ButtonComponet from "../../../components/Button";
import SuccessModal from "../fragments/SuccessModal";

const LectureDetails = ({ lecture, setLecture }) => {
  const [dataObj, setDataObj] = useState({
    lecture: lecture.name,
    date: "",
    time: "",
    items: [],
    itemsText: "",
    service: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lecture_LS = JSON.parse(localStorage.getItem("lecture"));
    if (lecture_LS && lecture_LS.lecture === lecture.name) {
      setDataObj(lecture_LS);
    }
  }, []);

  const createObj = (e) => {
    setDataObj({ ...dataObj, [e.target.name]: e.target.value });
  };
  const handleObj = (e) => {
    let check;
    if (dataObj.items.some((item) => item === e.target.value)) {
      check = dataObj.items.filter((item) => item !== e.target.value);
      if (e.target.value === "etc") {
        setDataObj({
          ...dataObj,
          [e.target.name]: check,
          itemsText: "",
        });
      } else {
        setDataObj({
          ...dataObj,
          [e.target.name]: check,
        });
      }
    } else {
      check = dataObj.items.concat([e.target.value]);
      setDataObj({
        ...dataObj,
        [e.target.name]: check,
      });
    }
  };
  const handleEtc = (e) => {
    if (dataObj.items.some((item) => item === "etc")) {
      setDataObj({ ...dataObj, itemsText: e.target.value });
    }
  };
  const handleApplication = () => {
    if (dataObj.date !== "" && dataObj.time !== "" && dataObj.service !== "") {
      if (
        dataObj.items.some((item) => item === "etc" && dataObj.itemsText === "")
      ) {
        alert("추가 물품을 적어주세요!");
        localStorage.removeItem("lecture");
        return;
      } else {
        localStorage.setItem("lecture", JSON.stringify(dataObj));
        setShowModal(true);
      }
    } else {
      alert("날짜, 시간, 수업 후를 모두 작성해주세요!");
      localStorage.removeItem("lecture");
    }
  };

  return (
    <>
      {showModal === false ? (
        <DetailsContainer image={lecture.image2}>
          <BackBtn onClick={() => setLecture({})} />
          <DetailsTitle>{lecture.name} Class</DetailsTitle>
          <Container>
            <Title>수업 날짜</Title>
            <CalendarBox
              onChange={(data) => setDataObj({ ...dataObj, date: data })}
              value={dataObj.date}
            />
          </Container>
          <Container>
            <Title>수업 시간</Title>
            <TimeContainer>
              <ChoiceBtn
                color={dataObj.time === "AM 10:30"}
                onClick={createObj}
                name="time"
                value="AM 10:30"
              >
                오전 10:30 ~ 12:30
              </ChoiceBtn>
              <ChoiceBtn
                color={dataObj.time === "PM 1:30"}
                onClick={createObj}
                name="time"
                value="PM 1:30"
              >
                오후 1:30 ~ 3:30
              </ChoiceBtn>
              <ChoiceBtn
                color={dataObj.time === "PM 4:00"}
                onClick={createObj}
                name="time"
                value="PM 4:00"
              >
                오후 4:00 ~ 6:00
              </ChoiceBtn>
            </TimeContainer>
          </Container>
          <Container>
            <Title>대신 준비해드려요</Title>
            <ServiceContainer>
              <ChoiceBtn
                color={dataObj.items.some((item) => item === "apron")}
                onClick={handleObj}
                name="items"
                value="apron"
              >
                앞치마
              </ChoiceBtn>
              <ChoiceBtn
                color={dataObj.items.some((item) => item === "package")}
                onClick={handleObj}
                name="items"
                value="package"
              >
                포장 그릇
              </ChoiceBtn>
              <ChoiceBtn
                color={dataObj.items.some((item) => item === "cushion")}
                onClick={handleObj}
                name="items"
                value="cushion"
              >
                강아지 방석
              </ChoiceBtn>
              <ChoiceBtn
                color={dataObj.items.some((item) => item === "etc")}
                onClick={handleObj}
                name="items"
                value="etc"
              >
                그 외
              </ChoiceBtn>
              {dataObj.items.some((item) => item === "etc") && (
                <EtcText
                  onChange={handleEtc}
                  value={dataObj.itemsText}
                  wrap="hard"
                  placeholder="추가로 필요한 준비물을 적어주세요."
                />
              )}
            </ServiceContainer>
          </Container>
          <Container>
            <Title>수업 후</Title>
            <ServiceContainer>
              <ChoiceBtn
                color={dataObj.service === "party"}
                onClick={createObj}
                name="service"
                value="party"
              >
                소모임 파티
              </ChoiceBtn>
              <ChoiceBtn
                color={dataObj.service === "alone"}
                onClick={createObj}
                name="service"
                value="alone"
              >
                개인
              </ChoiceBtn>
              <ChoiceBtn
                color={dataObj.service === "togo"}
                onClick={createObj}
                name="service"
                value="togo"
              >
                포장
              </ChoiceBtn>
            </ServiceContainer>
          </Container>
          <ApplyBtn onClick={handleApplication}>수업 신청</ApplyBtn>
        </DetailsContainer>
      ) : (
        <SuccessModal lecture={lecture} setShowModal={setShowModal} />
      )}
    </>
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
  color: white;
  width: 30%;
  padding: 10px;
  margin-bottom: 10px;
`;

const EtcText = styled.textarea`
  width: 100%;
  padding: 10px 5px;
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
