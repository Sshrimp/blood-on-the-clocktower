import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContainer = styled.div `
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 35%;
  margin: auto;
  overflow: hidden;
  background: #fff;
  .swiper-slide {
    height: 300px;
  }
  .swiper-pagination-bullet {
    position: relative;
    bottom: 10px;
  }
  .slider-container{
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`