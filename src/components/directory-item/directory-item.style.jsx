import styled from "styled-components";
import oc from 'open-color'
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.imageurl})`};
  background-size: cover;
  background-position: center;
`;
export const DirectoryItemContainer = styled.div`
  min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }`;

export const DirectoryItems = styled.div`
  padding: 6px 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 20px;
    color: ${oc.gray[6]};
  }
`;
