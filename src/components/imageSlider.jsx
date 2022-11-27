// import React, { Component } from "react";
import Wrapper from "./boxWrappers";
import { Transition, CSSTransition } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
// import "../index.css";
import { Navigation } from "swiper";

// import "animate.css"
const ImageSlider = (props) => {
  const [page, setPage] = useState(0);
  const [forwards,setForwards] = useState(false)
  const forward = () => {
    setForwards(true);
    setPage((page) => (page < src.length-1 ? page + 1 : (page = 0)));
  };
  const backward = () => {
    setForwards(false);
    setPage((page) => (page > 0 ? page - 1 : (page = src.length-1)));
  };
  let src = [
    "//images.samsung.com/is/image/samsung/assets/pk/home/720x1080.jpg?imwidth=720",
    "//images.samsung.com/is/image/samsung/assets/pk/1440x640-without-text.png?imwidth=1366",
    "//images.samsung.com/pk/galaxy-buds2/feature/galaxy-buds2-key-visual.jpg",
  ];
  return (
    <Wrapper className="flex justify-center align-middle">
      <button
        onClick={backward}
        className="absolute object-left-top right-[94%] bg-gray-500/75 content-center z-20 w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={forward}
        className="absolute object-right-top left-[94%]  bg-gray-500/75 content-center z-20 w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full"
      >
        &gt;
      </button>
      <motion.div >
        <motion.div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <img
          
          key={src[page]}
          src={src[page]}
          className="h-[400px] w-[500px]"
          />
          
          </SwiperSlide>        
        
      </Swiper>
        {/* <CSSTransition timeout={300} in={forwards} classNames="animate__animated animate_bounce">
        <img
          
          key={src[page]}
          src={src[page]}
          className="h-[400px] w-[500px]"
          />
          </CSSTransition> */}
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

export default ImageSlider;
