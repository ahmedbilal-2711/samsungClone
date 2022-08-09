import MiniNav from "./miniNav";
import Wrapper from "./boxWrappers";
// import { useState } from "react";
const TvCom = (props) => {
  return (
    <Wrapper>
      <div className={"flex flex-col text-white h-[screen+130px]"}>
        <img
          src={props.tv[1]}
          className="w-screen h-[screen] absolute -z-10"
          alt=""
        />
        <MiniNav
          MN={props.miniNavs}
          id={props.id}
          onClickNav={props.onClickMNav}
        />
        <div className="flex flex-wrap flex-col justify-center h-screen items-center">
          <p className="font-bold text-5xl pb-5 mt-96">
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
