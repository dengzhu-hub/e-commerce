import styled, { css } from "styled-components";
import oc from "open-color";
const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${oc.black};
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${oc.gray[4]};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${(props) => props.$shrink && shrinkLabel}
`;
export const Input = styled.input`
  background: none;
  background-color: ${oc.white};
  color: ${oc.blue[2]};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${oc.gray[6]};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabel}
  }
`;
export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3rem;
  }
`;
