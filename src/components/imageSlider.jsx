// import React, { Component } from "react";
import Wrapper from "./boxWrappers"
const imageSlider = (props) => {
  const styleBtn =
    "bg-gray-500/75 flex justify-between w-12 h-12 px-4 text-xl py-2 hover:bg-black text-center hover:text-white rounded-full";
  return (
    <Wrapper>
    <div className="h-screen bg-pink-400">
      <div className="absolute bottom-1/4 w-5/6 flex justify-between px-3 z-10">
        <button className={styleBtn}>&lt;</button>
        <button className={styleBtn}>&gt;</button>
      </div>
      {/* <img src="//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg" alt="" /> */}
    </div>
      </Wrapper>
  );
};

export default imageSlider;
