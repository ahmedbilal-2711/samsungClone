import MiniNav from "./miniNav";
import Wrapper from "./boxWrappers";
// import { useState } from "react";
const TvCom = (props) => {
  return (
    <Wrapper>
<<<<<<< HEAD
      <div className="flex flex-col text-white h-screen bg-cover bg-center bg-no-repeat bg-[url('//images.samsung.com/is/image/samsung/assets/pk/tvs/qled-tv/highlights/2021-neo-qled-tv-f01-intro-pc.png?$FB_TYPE_A_PNG$')]">
=======
      <div className={"flex flex-col text-white h-screen "}>
        <img
          src={props.tv[1]}
          className="w-5/6 h-[95%] absolute -z-10"
          alt=""
        />
>>>>>>> 5803c8dafea7409a52f82897016bbb1bb8e576bc
        <MiniNav
          MN={props.miniNavs}
          id={props.id}
          onClickNav={props.onClickMNav}
        />
<<<<<<< HEAD
        <div className="flex flex-wrap flex-col justify-end h-screen items-center">
          <p className="font-bold text-5xl pb-5">
=======
        <div className="flex flex-wrap flex-col justify-center h-screen items-center">
          <p className="font-bold text-5xl pb-5 mt-80">
>>>>>>> 5803c8dafea7409a52f82897016bbb1bb8e576bc
            Greatness never ends, but evolves
          </p>
          <button className="w-36 bg-white hover:bg-gray-200 text-black p-2 rounded-2xl mb-11">
            Learn More
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default TvCom;
