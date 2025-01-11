import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({image1,image2,image3}) {
	return (
		<Swiper
	      modules={[Pagination, A11y]}
	      spaceBetween={50}
	      slidesPerView={1}
	      pagination={{ clickable: true }}
	      onSlideChange={() => console.log('slide change')}
    	>
	      <SwiperSlide>
	      	<img src={image1} alt=""/>
	      </SwiperSlide>
	      {
	      	image2&&
	      	<SwiperSlide>
	      	<img src={image2} alt=""/>
	      	</SwiperSlide>
	      }
	      {
	      	image3&&
	      	<SwiperSlide>
	      	<img src={image3} alt=""/>
	      	</SwiperSlide>
	      }
	    </Swiper>
	)
}

export default Slider