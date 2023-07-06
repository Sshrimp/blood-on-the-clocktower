import styled from 'styled-components';
import style from '../../assets/global-style';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  background: #f2f3f4;
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

export const ShortcutWrapper = styled.div`
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  display: ${props => props.show ? "": "none"};
`

export const HotKey = styled.div`
  margin: 0 20px 20px 20px;
  .title{
    padding-top: 35px;
    margin-bottom: 20px;
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc-v2"]};
  }
  .item{
    display: inline-block;
    padding: 5px 10px;
    margin: 0 20px 10px 0;
    border-radius: 6px;
    background: ${style["highlight-background-color"]};
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
  }
`

export const GoodItem = styled.ul`
  li{
    display: flex;
    height: 60px;
    align-items: center;  
    background-color: #fff;
    margin-bottom: 2px;
    .info{
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      color: ${style["theme-color"]};
      padding: 5px 0 5px 20px;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${style["default-color"]};
      font-size: 14px;
    }
  }
`