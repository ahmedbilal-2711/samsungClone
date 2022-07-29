import { useState } from "react";

let OffersMainComp = (props) => {
  // console.log(props.offers[0][0].price);
  const [scale, setScale] = useState("scale-100");
  const [content, setContent] = useState(
    <>
      <p>{props.offers[0][0].price}</p>
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
    setScale("scale-100");
    setContent(
      <>
        <p>{props.offers[0][0].price}</p>
      </>
    );
  }
  return (
    <div
      onMouseEnter={hoverOffer}
      onMouseLeave={Offer}
      className="bg-[#F4F4F4] gap-5 flex flex-wrap flex-col items-center p-12 rounded-md hover:cursor-pointer"
    >
      <img className={scale} src={props.offers[0][0].src} alt="" />
      <p className="font-semibold text-xl">{props.offers[0][0].name}</p>
      {content}
    </div>
  );
};

export default OffersMainComp;
