import styled from "styled-components";
import style from '../assets/Global-style';

export const Tab = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0; 
  z-index: 999;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${style["theme-color-tab"]};
  border-top: 1px solid rgba(220, 220, 220, 0.8);
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: black;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: ${style["active-color"]};
        border-bottom: 2px solid black;
      }
    }
  }
`;

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
