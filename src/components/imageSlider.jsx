// import React, { Component } from "react";
import Wrapper from "./boxWrappers";
const imageSlider = (props) => {
  return (
    <Wrapper>
      {/* <div className="flex absolute justify-end align-bottom z-20"> */}
      <button
        className={
          "absolute object-left-top right-[88%] bg-gray-500/75 content-center z-20 w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full"
        }
      >
        &lt;
      </button>
      <button className="absolute object-right-top left-[88%]  bg-gray-500/75 content-center z-20 w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full">
        &gt;
      </button>
      {/* </div> */}
      <img
        src="//images.samsung.com/is/image/samsung/assets/pk/1440x640-without-text.png?imwidth=1366"
        alt=""
      />
    </Wrapper>
  );
};

export default imageSlider;
