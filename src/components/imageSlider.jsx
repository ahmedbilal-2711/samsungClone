// import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import "../index.css";
import { Navigation } from "swiper";

// import "animate.css"
const ImageSlider = (props) => {
  let srcArr = [
    "//images.samsung.com/is/image/samsung/assets/pk/home/720x1080.jpg?imwidth=720",
    "//images.samsung.com/is/image/samsung/assets/pk/1440x640-without-text.png?imwidth=1366",
    "//images.samsung.com/pk/galaxy-buds2/feature/galaxy-buds2-key-visual.jpg",
  ];
  return (
    <div className="flex justify-center align-middle">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper h-[530px]"
      >
        {srcArr.map((imgSrc) => {
          return (
            <SwiperSlide className="h-36 w-screen">
              <img src={imgSrc} alt="" className="h-screen w-screen" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
