import styled from "styled-components";
import oc from "open-color";
export const BaseButton = styled.button`
  height: 50px;
  letter-spacing: 0.5px;
  border-radius: 10px;
  padding: 0 35px 0 35px;
  font-size: 1.5rem;
  background-color: ${oc.blue[7]};
  color: ${oc.white};
  text-transform: capitalize;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bolder;
  gap: 1.2rem;
  border: 1px solid #a9b3ca;
  cursor: pointer;

  //flex layout
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &:hover {
    background: rgb(51, 135, 255);
    border: 1px solid $oc-black;
  }
`;
export const SignWithGoogle = styled(BaseButton)`
  background-color: ${oc.white};
  margin: 0;
  color: ${oc.black};
  &:hover {
    background-color: ${oc.blue[7]};
    border: none;
    color: ${oc.white};
  }
`;
export const InvertButton = styled(BaseButton)`
  background-color: ${oc.black};
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
