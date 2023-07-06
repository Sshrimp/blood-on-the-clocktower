import React from 'react';
import { SliderContainer, RecommendedShops } from './style';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, Grid } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/grid';


SwiperCore.use([Grid, Pagination]);

function SliderV2(props) {
  const { bannerList } = props;

  const RecommendShop = () => {
    return (
      <RecommendedShops>
        <div className='recommend'> 
          <span className='recommend-left'>相关推荐</span>
          <div className='recommend-right'>
            <div className='recommend-right_img'>全部</div>
            <div className='iconfont icon recommend-right_img'>&#xe662;</div>
          </div>
        </div>
      </RecommendedShops>
    )
  }

  return (
    <SliderContainer>
      <RecommendShop />
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{clickable: true, bulletClass: "swiper-pagination-bullet"}}
        grid={{fill: 'row', rows: 1}}
      >
        {
          bannerList.map(slider => {
            return (
              <SwiperSlide className='swiper-slide' key={slider.id}>
                <img src={slider.image}  alt="推荐" width="100%"/>
                <div className='slider-detail'>
                  <span className='slider-detail_title'>{slider.title}</span>
                  <div className='slider-detail_price'>
                    <svg t="1641216704920" className='i' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2168" width="10" height="10"><path d="M883 552.5v-87.7H617.8L864.9 107l-73-48-272.6 394.9L246 59.4 172.3 106l247.5 358.8H154.9v87.1h320v90.2h-320V731h320v234h88.7V729.8H883v-86.5H563.6v-89.5z" p-id="2169" fill="#333333"></path></svg>
                    <span>{slider.price}</span>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </SliderContainer>
  )
}

export default React.memo(SliderV2);