import styled from 'styled-components'
import style from '../../assets/Global-style'

export const ShadowContainer = styled.div`
  z-index: 1500;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`

export const CommentsContainer = styled.div`
  position: fixed;
  height: 70vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: ${style["default-color"]};
  animation: Popup .4s;
  padding: 60px 0;
  @keyframes Popup {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    100% {
      transform: none;
    }
  }
  .input {
    margin: 0 5px;
    line-height: 25px;
    background: #dcdcdc;
    color: ${style["highlight-background-color"]};
    font-size: ${style["font-size-m"]};
    outline: none;
    border: none;
    position: fixed;
    left: 20px;
    bottom: 30px;
    width: 300px;
    &::placeholder{
      color: ${style["font-color-light"]};
    }
  }
  .send {
    color: #fff;
    background-color: ${style["theme-color"]};
    border: none;
    bottom: 30px;
    position: fixed;
    right: 10px;
    height: 26px;
  }
  .count {
    position: fixed;
    top: 140px;
    height: 40px;
    width: 200px;
    font-size: 20px;
    line-height: 40px;
    margin-left: 15px;
  }
  .comments-box {
    background-color: ${style["default-color"]};
  }
`

export const CommentsBox = styled.div`
  height: 80px;
  width: 100%;
  margin-bottom: 5px;
  background-color: #fff;
  position: relative;
  .comment {
    position: absolute;
    left: 15px;
    top: 10px;
  }
  .time {
    position: absolute;
    left: 15px;
    top: 35px;
    color: #8a8a8a;
  }
`