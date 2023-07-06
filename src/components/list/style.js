import styled from 'styled-components';
import style from '../../assets/global-style';


export const List = styled.div `
  /* border-top: 5px solid ${style["default-color"]}; */
  top: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListItem = styled.div `
  position: relative;
  width: 50%;
  background-color: ${style["default-color"]};
  .img_wrapper{
    position: relative;
    background-color: #fff;
    height: 0;
    padding-bottom: 100%;
    margin: 1px;
    .show_price {
      position: absolute;
      left: 10px;
      bottom: 20px;
      display: flex;
      align-items: center;
      font-size: ${style["font-size-m"]};
    }
    .play_count {
      position: absolute;
      right: 10px;
      bottom: 20px;
      font-size: ${style["font-size-s"]};
      line-height: 15px;
      color: ${style["font-color-light"]} !important;
      z-index: 1;
      .count{
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 60%;
      border-radius: 3px;

    }
    .desc {
      /* overflow: hidden; 创建BFC */
      position: absolute;
      bottom: 20px;
      padding: 0 20px;
      height: 50px;
      text-align: left;
      font-size: ${style["font-size-s"]};
      line-height: 1.4;
      color: ${style["font-color-desc"]};
    }
  }

`