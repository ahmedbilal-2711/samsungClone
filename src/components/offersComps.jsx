// import { Component } from "react";

import { useState } from "react";

let OffersComps = (props) => {
  const [scale, setScale] = useState("scale-100");
  const [content, setContent] = useState(
    <>
      <p>{props.offers[props.comNo].price}</p>
    </>
  );
  function hoverOffer() {
    setContent(
      <>
        <button className="w-28 bg-black hover:bg-gray-700 text-white p-2 py-2.5 rounded-3xl">
          Buy Now
        </button>
      </>
    );
    setScale("scale-105");
  }
  function Offer() {
    setContent(
      <>
        <p>{props.offers[props.comNo].price}</p>
      </>
    );
    setScale("scale-100");
  }

  return (
    <div
      className="bg-[#F4F4F4] h-[380px] flex flex-wrap flex-col items-center p-12 rounded-md hover:cursor-pointer gap-5"
      onMouseEnter={hoverOffer}
      onMouseLeave={Offer}
    >
      <img className={scale} src={props.offers[props.comNo].src} alt="" />
      <p className="font-semibold text-xl">{props.offers[props.comNo].name}</p>
      {content}
    </div>
  );
};

export default OffersComps;
