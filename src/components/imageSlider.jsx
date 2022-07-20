// import React, { Component } from "react";
import Wrapper from "./boxWrappers"
const imageSlider = (props) => {
  const styleBtn =
    "bg-gray-500/75 flex justify-between w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full";
  return (
    <Wrapper>
    <div className="h-screen flex flex-col m-auto">
      <div className="flex justify-between px-3 z-10">
        <button className={styleBtn}>&lt;</button>
        <button className={styleBtn}>&gt;</button>
      </div>
      <img src="//images.samsung.com/is/image/samsung/assets/pk/1440x640-without-text.png?imwidth=1366" alt="" />
    </div>
      </Wrapper>
  );
};

export default imageSlider;
