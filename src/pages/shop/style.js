import styled  from "styled-components";
import style from '../../assets/Global-style';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  background: ${style["default-color"]};
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear{
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    transition: all .3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit{
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    transition: all .3s;
    transform: translate3d(100%, 0, 0);
  }
`

export const ShopDetailContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  border-radius: 5px;
  height: 110px;
  background: ${style["shop-theme-color"]};
  position: relative;
  .shop-price {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .shop-left {
      margin-left: 5px;
      .shop-left_font {
      display: inline-block;
      margin-left: 5px;
      margin-top: 15px;
      font-size: ${style["font-size-b"]};
      }
    }
    .shop-right {
      margin-top: 25px;
      margin-right: 10px;
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-default"]}
    }
  }
  .shop-description {
    margin-top: 20px;
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .shop-hint {
    margin-top: 8px;
    width: 90%;
    color: ${style["font-color-default"]};
    font-size: ${style["font-size-s"]};
    margin-left: 49%;
    transform: translateX(-50%);
  }
`

export const ShopIndentify = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px auto;
  .shopIdentify {
    width: 100%;
    height: 100%;
  }
`

export const BuyBtn = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  width: 100%;
  height: 60px;
  background: ${style["shop-theme-color"]};
  .BuyBtn {
    margin: 0 auto;
    width: 96%;
    text-align: center;
    line-height: 40px;
    height: 40px;
    background: ${style["theme-color"]};
    color: ${style["font-color-buy"]};
  }
`

export const CommentsBox = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  margin: 5px 0px;
  .title {
    line-height: 50px;
    width: 340px;
    height: 50px;
    padding-left: 20px;
    background-color: #fff;
    font-weight: 500;
  }
  .iconfont-arrow {
    flex: 1;
    height: 32px;
    padding-top: 18px;
    background-color: #fff;
  }
`