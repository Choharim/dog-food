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
  AddBtn,
  OrderBtn,
} from "./OrderDetailsStyle";
import { useHistory } from "react-router-dom";

const OrderDetails = ({ showMenuDetails, count }) => {
  const addItemArray = ["맛보기 랜덤", "맛보기 연어쿠키", "미니 양치츄"];
  const [detailOrder, setDetailOrder] = useState([
    { allergy: "", allergyText: "", except: [], add: [] },
  ]);
  const [addCount, setAddCount] = useState(1);
  let history = useHistory();

  const handleChoice = (input, index) => (e) => {
    let copy = detailOrder.slice();
    copy[index] = Object.assign(detailOrder[index], {
      [input]: e.target.value,
    });
    if (e.target.value === "no") {
      copy[index] = Object.assign(detailOrder[index], {
        allergyText: "",
      });
    }
    setDetailOrder(copy);
  };
  const handleExcept = (index) => (e) => {
    let check;
    let copy = detailOrder.slice();

    if (e.target.value === "no") {
      copy[index].except = ["no"];
    } else {
      if (detailOrder[index].except.some((item) => item === e.target.value)) {
        check = detailOrder[index].except.filter(
          (item) => item !== e.target.value && item !== "no"
        );
        copy[index].except = check;
      } else {
        check = detailOrder[index].except.filter((item) => item !== "no");
        copy[index].except = check;
        copy[index].except.push(e.target.value);
      }
    }
    setDetailOrder(copy);
  };

  const handleAdd = (index) => (e) => {
    let check;
    let copy = detailOrder.slice();

    if (e.target.value === "no") {
      copy[index].add = ["no"];
    } else {
      if (detailOrder[index].add.some((item) => item === e.target.value)) {
        check = detailOrder[index].add.filter(
          (item) => item !== e.target.value && item !== "no"
        );
        copy[index].add = check;
      } else {
        check = detailOrder[index].add.filter((item) => item !== "no");
        copy[index].add = check;
        copy[index].add.push(e.target.value);
      }
    }
    setDetailOrder(copy);
  };

  const handleValidaion = () => {
    if (
      detailOrder.every(
        (obj) => obj.allergy !== "" && obj.except.length && obj.add.length
      )
    ) {
      if (
        detailOrder.some(
          (obj) => obj.allergy === "yes" && obj.allergyText === ""
        )
      ) {
        alert("알러지 종류를 적어주세요!");
        return;
      } else {
        localStorage.setItem("orderDetails", JSON.stringify(detailOrder));
        alert("수업 신청이 완료되었습니다.");
        history.push("/");
      }
    } else {
      alert("알러지 유무, 제외할 재료, 추가할 재료를 모두 선택해주세요!");
    }
  };

  console.log(detailOrder);
  return (
    <OrderContainer>
      {detailOrder.map((food, index) => (
        <OrderDataContainer key={index}>
          <OrderDataHead>
            <FoodName>
              {showMenuDetails.name} {index + 1}
            </FoodName>
            <ToggleBtn />
          </OrderDataHead>
          <Allergy>
            <AllergyTitle>알러지 유무</AllergyTitle>
            <AllergyBtnContainer>
              <AllergyCheckBtn
                color={detailOrder[index].allergy === "yes"}
                value="yes"
                onClick={handleChoice("allergy", index)}
              >
                O
              </AllergyCheckBtn>
              <AllergyCheckBtn
                color={detailOrder[index].allergy === "no"}
                value="no"
                onClick={handleChoice("allergy", index)}
              >
                X
              </AllergyCheckBtn>
            </AllergyBtnContainer>
            {detailOrder[index].allergy === "yes" && (
              <AllergyInput
                onChange={handleChoice("allergyText", index)}
                type="text"
                placeholder="알러지 종류를 적어주세요."
              />
            )}
          </Allergy>
          {showMenuDetails.ingredients && (
            <Ingredients>
              <IngredientsHead>
                <IngredientsTitle>제외할 재료 선택</IngredientsTitle>
                <IngredientsCheckLabel>
                  없음
                  <IngredientsCheck
                    value="no"
                    name="except"
                    checked={detailOrder[index].except.some(
                      (element) => element === "no"
                    )}
                    onChange={handleExcept(index)}
                    type="checkbox"
                  />
                </IngredientsCheckLabel>
              </IngredientsHead>
              <IngredientsBtnContainer>
                {showMenuDetails.ingredients.map((ing, i) => (
                  <IngredientsBtn
                    key={i}
                    color={detailOrder[index].except.some(
                      (item) => item === ing
                    )}
                    value={ing}
                    name="except"
                    onClick={handleExcept(index)}
                  >
                    {ing}
                  </IngredientsBtn>
                ))}
              </IngredientsBtnContainer>
            </Ingredients>
          )}
          <AddItem>
            <AddItemHead>
              <AddItemTitle>추가할 재료 선택</AddItemTitle>
              <AddItemCheckLabel>
                없음
                <AddItemCheck
                  value="no"
                  name="add"
                  onChange={handleAdd(index)}
                  checked={detailOrder[index].add.some(
                    (element) => element === "no"
                  )}
                  type="checkbox"
                />
              </AddItemCheckLabel>
            </AddItemHead>
            <AddItemBtnContainer>
              {addItemArray.map((item, i) => (
                <AddItemBtn
                  key={i}
                  color={detailOrder[index].add.some(
                    (element) => element === item
                  )}
                  value={item}
                  name="add"
                  onClick={handleAdd(index)}
                >
                  {item}
                </AddItemBtn>
              ))}
            </AddItemBtnContainer>
          </AddItem>
          <ResetSaveContainer></ResetSaveContainer>
        </OrderDataContainer>
      ))}
      {addCount < count && (
        <AddBtn
          onClick={() => {
            setDetailOrder(
              detailOrder.concat({
                allergy: "",
                allergyText: "",
                except: [],
                add: [],
              })
            );
            setAddCount(addCount + 1);
          }}
        >
          추가하기(주문개수까지 가능)
        </AddBtn>
      )}
      {Object.keys(detailOrder[detailOrder.length - 1]).length !== 0 && (
        <OrderBtn onClick={handleValidaion}>주문하기</OrderBtn>
      )}
    </OrderContainer>
  );
};

export default OrderDetails;
