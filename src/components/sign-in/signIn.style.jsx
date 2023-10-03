import styled from "styled-components";
import oc from "open-color";
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 8px;
  width: 40%;
`;
export const ButtonContainer = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const SignInIcon = styled.img`
  background-color: white;
  padding: 2.5px;
`;
export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: normal;
  color: ${oc.red[9]};
`;
export const SignInTitle = styled.h2`
  margin: 10px 0;
  font-size: 2.6rem;
`;
