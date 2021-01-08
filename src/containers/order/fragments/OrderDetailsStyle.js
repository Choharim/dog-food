import styled, { css } from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import ButtonComponet from "../../../components/Button";

export const OrderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderDataContainer = styled.div`
  width: 90%;
  margin-bottom: 20px;
`;

export const OrderDataHead = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
`;

export const FoodName = styled.span`
  font-size: 1.5rem;
`;

export const ToggleBtn = styled(IoIosArrowUp)``;

export const Allergy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AllergyTitle = styled.span`
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const AllergyBtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AllergyCheckBtn = styled(ButtonComponet)`
  width: 50%;
  margin: 0 10px;
  height: 40px;
  ${(props) =>
    props.color &&
    css`
      color: white;
    `}
`;

export const AllergyInput = styled.input`
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

export const Ingredients = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const IngredientsHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IngredientsTitle = styled.span`
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const IngredientsCheckLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const IngredientsCheck = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const IngredientsBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const IngredientsBtn = styled(ButtonComponet)`
  width: 31%;
  margin: 5px 0;
  height: 40px;
  ${(props) =>
    props.color &&
    css`
      color: white;
    `}
`;

export const AddItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AddItemHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddItemTitle = styled.span`
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const AddItemCheckLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const AddItemCheck = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const AddItemBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const AddItemBtn = styled(ButtonComponet)`
  width: 31%;
  margin: 5px 0;
  height: 40px;
  ${(props) =>
    props.color &&
    css`
      color: white;
    `}
`;

export const ResetSaveContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AddBtn = styled(ButtonComponet)`
  width: 90%;
  font-size: 1.2rem;
  padding: 10px 0;
`;

export const OrderBtn = styled(ButtonComponet)`
  position: fixed;
  bottom: 0;
  max-width: 600px;
  width: 100%;
  font-size: 1.2rem;
  padding: 10px 0;
`;
