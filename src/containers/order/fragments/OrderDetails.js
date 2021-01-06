import React, { useState } from "react";
import {
  OrderContainer,
  OrderDataContainer,
  OrderDataHead,
  FoodName,
  ToggleBtn,
  Allergy,
  AllergyTitle,
  AllergyBtnContainer,
  AllergyCheckBtn,
  AllergyInput,
  Ingredients,
  IngredientsHead,
  IngredientsTitle,
  IngredientsCheckLabel,
  IngredientsCheck,
  IngredientsBtnContainer,
  IngredientsBtn,
  AddItem,
  AddItemHead,
  AddItemTitle,
  AddItemCheckLabel,
  AddItemCheck,
  AddItemBtnContainer,
  AddItemBtn,
  ResetSaveContainer,
  ResetBtn,
  SaveBtn,
  AddBtn,
  OrderBtn,
} from "./OrderDetailsStyle";

const OrderDetails = ({ showMenuDetails, count }) => {
  const addItemArray = ["맛보기 랜덤", "맛보기 연어쿠키", "미니 양치츄"];
  const [detailOrder, setDetailOrder] = useState([{}]);
  const [addCount, setAddCount] = useState(1);

  return (
    <OrderContainer>
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
      {Object.keys(detailOrder[detailOrder.length - 1]).length !== 0 &&
        addCount < count && (
          <AddBtn
            onClick={() => {
              setDetailOrder(detailOrder.concat({}));
              setAddCount(addCount + 1);
            }}
          >
            추가하기(주문개수까지 가능)
          </AddBtn>
        )}
      {Object.keys(detailOrder[detailOrder.length - 1]).length !== 0 && (
        <OrderBtn>주문하기</OrderBtn>
      )}
    </OrderContainer>
  );
};

export default OrderDetails;
