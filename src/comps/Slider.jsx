import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Slider({image1,image2,image3}) {
	return (
		<Swiper
	      modules={[Pagination]}
	      spaceBetween={50}
	      slidesPerView={1}
	      pagination={{ clickable: true }}
    	>
	      <SwiperSlide>
	      	<img src={image1} alt="demo"/>
	      </SwiperSlide>
	      {
	      	image2&&
	      	<SwiperSlide>
	      	<img src={image2} alt="demo"/>
	      	</SwiperSlide>
	      }
	      {
	      	image3&&
	      	<SwiperSlide>
	      	<img src={image3} alt="demo"/>
	      	</SwiperSlide>
	      }
	    </Swiper>
	)
}

export default Slider