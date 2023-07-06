import styled from 'styled-components';
import style from '../../assets/Global-style'

export const Content = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  background-color: #fff;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  background-color: #fff;
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

export const Lcontent = styled.div`
  position: relative;
  width: 75px;
  height: 100%;
  top: 60px;
`

export const Rcontent = styled.div`
  flex: 1;
  background-color: #fff;
  width: 295px;
  position: relative;
  top: 60px;
  .search {
    z-index: 2;
    position: fixed;
    top: 70px;
    width: 100%;
    height: 30px;
  }
  .content {
    background-color: #fff;
    position: absolute;
    top: 60px;
    bottom: 0;
  }
  .desc {
    position: fixed;
    top: 170px;
    bottom: 0px;
    width: 100%;
  }
`

export const Rtitle = styled.div`
  display: flex;
  height: 54px;
  background-color: #fff;
  .nav {
    box-sizing: border-box;
    position: fixed;
    top: 120px;
    width: 100%;
    padding: 5px;
    overflow: hidden;
    background-color: #fff;
    z-index: 9999;
  }
  .rt {
    display: none;
  }
`

export const Rkind = styled.div`
  /* height: 700px; */
  width: 100%;
  display: grid;
  grid-template-columns: 104px 104px 104px;
  grid-template-rows: 100px 100px 100px;
  background-color: #fff;
`

export const ListItem = styled.div`
  .icon {
    width: 80px;
    height: 50px;
    padding: 7px 10px;
  }
  .title {
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    bottom: 0;
  }
`

export const NavContainer  = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${style["default-color"]};
`

export const BackBoxContainer = styled.div`
  height: 45px;
  position: fixed;
  width: 100vw;
  top: 0;
  background: ${style["default-color"]};
`


