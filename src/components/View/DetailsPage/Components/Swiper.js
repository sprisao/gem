import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Swiper.css';

const DetailSwiper = (props) => {
  console.log(props.img);

  const images = props.img;

  console.log(images);
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {props.img &&
        props.img.map((item, index) => {
          return (
            <SwiperSlide key={item.id} className='swiper-slide'>
              <img src={item.url} alt={props.title} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default DetailSwiper;
