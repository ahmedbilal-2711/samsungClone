// import React, { Component } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Wrapper from "./boxWrappers";
import swiper from "swiper";
import { useRef, useCallback } from "react";

const ImageSlider = (props) => {
   const sliderRef = useRef(null);
   const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
   }, []);

   const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
   }, []);
   return (
      <Wrapper>
         {/* <div className="flex absolute justify-end align-bottom z-20"> */}
         <button
            onClick={handlePrev}
            className={
               "absolute object-left-top right-[94%] bg-gray-500/75 content-center z-20 w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full"
            }
         >
            &lt;
         </button>
         <button
            onClick={handleNext}
            className="absolute object-right-top left-[94%]  bg-gray-500/75 content-center z-20 w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full"
         >
            &gt;
         </button>
         {/* </div> */}
         <Swiper
            ref={sliderRef}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <img
                  src="//images.samsung.com/is/image/samsung/assets/pk/1440x640-without-text.png?imwidth=1366"
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src="//images.samsung.com/is/image/samsung/assets/pk/1440x640-without-text.png?imwidth=1366"
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src="//images.samsung.com/is/image/samsung/assets/pk/1440x640-without-text.png?imwidth=1366"
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src="//images.samsung.com/is/image/samsung/assets/pk/1440x640-without-text.png?imwidth=1366"
                  alt=""
               />
            </SwiperSlide>
         </Swiper>
      </Wrapper>
   );
};

export default ImageSlider;
