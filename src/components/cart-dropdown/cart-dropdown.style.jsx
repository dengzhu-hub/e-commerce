import styled from "styled-components";

import {
  BaseButton,
  SignWithGoogle,
  InvertButton,
} from "../button/button.style";

export const CartContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${BaseButton},
  ${SignWithGoogle},
 ${InvertButton} {
    margin-top: auto;
  }
`;

export const CartEmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
