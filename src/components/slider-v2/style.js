import styled from "styled-components";
import style from '../../assets/Global-style';

export const SliderContainer = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  background: #fff;
  .swiper-slide {
    height: 160px;
    .slider-detail {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .slider-detail_title {
        margin-left: 8px;
        font-size: ${style["font-size-m"]};
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
      }
      .slider-detail_price {
        margin-top: 8px;
        font-weight: ${style["font-weight-b"]};
        font-size: ${style["font-size-m"]};
      }
    }
  }
  .swiper-pagination-bullet {
    top: -50px;
  }
`;

export const RecommendedShops = styled.div`
  height: 40px;
  .recommend {
    display: flex;
    line-height: 50px;
    justify-content: space-between;
    .recommend-left {
      margin-left: 10px;
      font-weight: 700;
    }
    .recommend-right {
      display: flex;
      font-size: ${style["font-size-m"]};
      color: ${style["font-color-default"]};
      margin-right: 15px;
    }
  }
`