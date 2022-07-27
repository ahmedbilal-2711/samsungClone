import MiniNav from "./miniNav";
import Wrapper from "./boxWrappers";
// import { useState } from "react";
const TvCom = (props) => {
  console.log(props.tv);
  //   const [back, setBack] = useState("tvFirst");
  //   if (props.tv[0] === "Neo QLED") {
  //     setBack("tvFirst");
  //   } else if (props.tv[0] === "QLED") {
  //     setBack("tvSecond");
  //   } else if (props.tv[0] === "Crystal UHD") {
  //     setBack("tvThird");
  //   }
  return (
    <Wrapper>
      <div className={"flex flex-col text-white h-screen "}>
        <img
          src={props.tv[1]}
          className="w-5/6 h-[95%] absolute -z-10"
          alt=""
        />
        <MiniNav
          MN={props.miniNavs}
          id={props.id}
          onClickNav={props.onClickMNav}
        />
        <div className="flex flex-wrap flex-col justify-center h-screen items-center">
          <p className="font-bold text-5xl pb-5">
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
