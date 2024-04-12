// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/swiper-bundle-min.css';
import photo1 from "../../../assets/pexels-maria-orlova-4917148.jpg";
import photo2 from "../../../assets/pexels-maria-orlova-4946727.jpg";
import photo3 from "../../../assets/pexels-max-vakhtbovycn-7031408.jpg";
import photo4 from "../../../assets/pexels-pixabay-247597.jpg";
import photo5 from "../../../assets/pexels-spacex-586107.jpg";

const Banner = () => {
  return (
    <div className='max-h-30 flex justify-center py-2 gap-2'>
    <Swiper
     // install Swiper modules
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
   >
     <SwiperSlide><img width={2000} height={200} src={photo1} alt="" /></SwiperSlide>
     <SwiperSlide><img width={2000} height={400}  src={photo2} alt="" /></SwiperSlide>
     <SwiperSlide><img width={2000} height={400}  src={photo3} alt="" /></SwiperSlide>
     <SwiperSlide><img width={2000} height={400}  src={photo4} alt="" /></SwiperSlide>
     <SwiperSlide><img width={2000} height={400}  src={photo5} alt="" /></SwiperSlide>
   
   </Swiper>
  </div>
  );
};

export default Banner;