import React, { Component } from "react";
const imageSlider = () => {
  const styleBtn =
    "bg-gray-500/75 flex justify-between w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full";
  return (
    <div className="width:100%">
      <div className="absolute bottom-1/4 w-full flex justify-between px-3 z-10">
        <button className={styleBtn}>&lt;</button>
        <button className={styleBtn}>&gt;</button>
      </div>
      <img src="https://picsum.photos/1400/600" alt="" />
    </div>
  );
};

export default imageSlider;
