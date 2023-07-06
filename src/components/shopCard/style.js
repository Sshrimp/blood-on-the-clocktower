import styled from "styled-components";
import style from '../../assets/Global-style';

export const ShopCardContainer = styled.div`
  position: fixed;
  height: 70vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: ${style["default-color"]};
  animation: Popup .4s;
  @keyframes Popup {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    100% {
      transform: none;
    }
  }
  .content {
    width: 100%;
    height: 20%;
    background: ${style["shop-theme-color"]};
    .content-left {
      display: flex;
      align-items: center;
      .content-left_image {
        width: 110px;
        height: 80px;
        margin-top: 10px;
      }
      .content-left_price {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        font-size: ${style["font-size-b"]};
      }
      .select-size {
        margin-left: 20px;
        font-size: ${style["font-size-m"]};
      }
    }
    .icon-delete {
      position: absolute;
      right: 10px;  
      top: 15px;
    }
  }
  .size-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, auto);
    .size-box {
      overflow: hidden;
      box-sizing: border-box;
      line-height: 80px;
      text-align: center;
      background: ${style["background-color"]};
      border: 4px solid ${style["default-color"]};
    }
    .size-box:hover {
      border: 4px solid black;
    }
  }
`

export const ShadowContainer = styled.div`
  z-index: 1500;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`

export const SizeBox = styled.div`

`
