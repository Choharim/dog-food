import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import ButtonComponet from "../../../components/Button";

const OrderDetails = ({ showMenuDetails, count }) => {
  const addItemArray = ["맛보기 랜덤", "맛보기 연어쿠키", "미니 양치츄"];
  const [detailOrder, setDetailOrder] = useState([{}]);

  return (
    <>
      {detailOrder.map((food, index) => (
        <OrderDataContainer>
          <OrderDataHead>
            <FoodName>
              {showMenuDetails.name} {index + 1}
            </FoodName>
            <ToggleBtn />
          </OrderDataHead>
          <Allergy>
            <AllergyTitle>알러지 유무</AllergyTitle>
            <AllergyBtnContainer>
              <AllergyCheckBtn>O</AllergyCheckBtn>
              <AllergyCheckBtn>X</AllergyCheckBtn>
            </AllergyBtnContainer>
            <AllergyInput type="text" placeholder="알러지 종류를 적어주세요." />
          </Allergy>
          {showMenuDetails.ingredients && (
            <Ingredients>
              <IngredientsHead>
                <IngredientsTitle>제외할 재료 선택</IngredientsTitle>
                <IngredientsCheckLabel>
                  없음
                  <IngredientsCheck type="checkbox" />
                </IngredientsCheckLabel>
              </IngredientsHead>
              <IngredientsBtnContainer>
                {showMenuDetails.ingredients.map((ing) => (
                  <IngredientsBtn>{ing}</IngredientsBtn>
                ))}
              </IngredientsBtnContainer>
            </Ingredients>
          )}
          <AddItem>
            <AddItemHead>
              <AddItemTitle>추가할 재료 선택</AddItemTitle>
              <AddItemCheckLabel>
                없음
                <AddItemCheck type="checkbox" />
              </AddItemCheckLabel>
            </AddItemHead>
            <AddItemBtnContainer>
              {addItemArray.map((item) => (
                <AddItemBtn>{item}</AddItemBtn>
              ))}
            </AddItemBtnContainer>
          </AddItem>
          <ResetSaveContainer>
            <ResetBtn>삭제</ResetBtn>
            <SaveBtn>임시 저장</SaveBtn>
          </ResetSaveContainer>
        </OrderDataContainer>
      ))}
    </>
  );
};

export default OrderDetails;

const OrderDataContainer = styled.div`
  width: 90%;
  margin-bottom: 20px;
`;

const OrderDataHead = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
`;

const FoodName = styled.span`
  font-size: 1.5rem;
`;

const ToggleBtn = styled(IoIosArrowUp)``;

const Allergy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AllergyTitle = styled.span`
  margin: 10px 0;
  font-size: 1.2rem;
`;

const AllergyBtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AllergyCheckBtn = styled(ButtonComponet)`
  width: 50%;
  margin: 0 10px;
  height: 40px;
`;

const AllergyInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  width: calc(100% - 40px);
  margin: 15px 0;
  padding: 0 10px;
  height: 30px;
  font-size: 1.2rem;
  align-self: center;
`;

const Ingredients = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const IngredientsHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IngredientsTitle = styled.span`
  margin: 10px 0;
  font-size: 1.2rem;
`;

const IngredientsCheckLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

const IngredientsCheck = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const IngredientsBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const IngredientsBtn = styled(ButtonComponet)`
  width: 31%;
  margin: 5px 0;
  height: 40px;
`;

const AddItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AddItemHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddItemTitle = styled.span`
  margin: 10px 0;
  font-size: 1.2rem;
`;

const AddItemCheckLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

const AddItemCheck = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const AddItemBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AddItemBtn = styled(ButtonComponet)`
  width: 31%;
  margin: 5px 0;
  height: 40px;
`;

const ResetSaveContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ResetBtn = styled(ButtonComponet)`
  width: 50%;
  height: 50px;
  margin-right: 5px;
  border-radius: 30px;
`;

const SaveBtn = styled(ButtonComponet)`
  width: 50%;
  height: 50px;
  border-radius: 30px;
`;
