import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

function Slider(props) {
  const { bannerList } = props;

  return (
    <SliderContainer>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable: true, bulletClass: "swiper-pagination-bullet"}}
      >
        {
          bannerList.map(slider => {
            return (
              <SwiperSlide className="swiper-slide" key={slider.id}>
                <div className="slider-nav">
                  <img src={slider.image} width="100%" height="100%" alt="推荐" />
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </SliderContainer>
  )
}

export default React.memo(Slider);