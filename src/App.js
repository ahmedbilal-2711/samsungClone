import "./App.css";
import IS from "./components/imageSlider.jsx";
import NAV from "./components/navBar.jsx";
import OFFERS from "./components/offers.jsx";
import TV from "./components/tvCom.jsx";
import Mobiles from "./components/mobileCom.jsx";
import HApp from "./components/homeAppCom";
import { useState } from "react";
// import miniNav from "./components/miniNav";

let App = () => {
  let offers = [
    {
      src: "//images.samsung.com/is/image/samsung/assets/cn/homepage/PCD_B_KV_Merchandising_376x376_.png?$376_376_PNG$",
      name: "Galaxy S22 Ultra",
      price: "just launched",
    },
    {
      src: "//images.samsung.com/is/image/samsung/assets/pk/A13-Desktop-version-Small-tile.png?$160_160_PNG$",
      name: "Galaxy A13",
      price: "just launched",
    },
    {
      src: "//images.samsung.com/is/image/samsung/assets/pk/A03_Smalltile_Desktop.png?$160_160_PNG$",
      name: "Galaxy A03",
      price: "just launched",
    },
    {
      src: "//images.samsung.com/is/image/samsung/assets/pk/S22_SmallTile_PC.png?$160_160_PNG$",
      name: "Galaxy S22",
      price: "just launched",
    },
    {
      src: "//images.samsung.com/is/image/samsung/assets/pk/2202/home/images/HOME_B2_KV_Merchandising_160X160.png?$160_160_PNG$",
      name: "Galaxy Z Flip3 5G",
      price: "just launched",
    },
  ];
  let miniNavs = [
    {
      key: 0,
      head: "This Month's Pick",
      nav: [
        { id: 0, li: "Mobile" },
        { id: 1, li: "TV&AV" },
        { id: 2, li: "Home Appliances" },
      ],
    },
    {
      key: 1,
      head: "Mobile",
      nav: [
        {
          id: 0,
          src: "//images.samsung.com/pk/smartphones/galaxy-s22-ultra/buy/S22_Ultra_Carousel_GroupKV_PC.jpg?imwidth=1366",
          li: "Galaxy S22 Ultra",
        },
        {
          id: 1,
          src: "//images.samsung.com/pk/smartphones/galaxy-z-flip3-5g/buy/zflip3_carousel_marketingsinglekv_pc.jpg?imwidth=1366",
          li: "Galaxy Z Flip3 5G",
        },
        {
          id: 2,
          src: "https://images.samsung.com/pk/galaxy-watch4/feature/watch4-kv.jpg",
          li: "Galaxy Watch 4",
        },
        {
          id: 3,
          src: "//images.samsung.com/pk/galaxy-buds2/feature/galaxy-buds2-key-visual.jpg",
          li: "Galaxy Buds2",
        },
      ],
    },
    {
      key: 2,
      head: "TV & Sound",
      nav: [
        {
          id: 0,
          src: "//images.samsung.com/is/image/samsung/assets/pk/tvs/qled-tv/highlights/2021-neo-qled-tv-f01-intro-pc.png?$FB_TYPE_A_PNG$",
          li: "Neo QLED",
        },
        {
          id: 1,
          src: "//images.samsung.com/is/image/samsung/assets/pk/tvs/pcd/AR.jpg?imwidth=1366",
          li: "QLED",
        },
        {
          id: 2,
          src: "//images.samsung.com/is/image/samsung/p6pim/pk/feature/137041140/pk-feature-vivid-crystal-color-on-our-slimmest-profile-454946918?$FB_TYPE_A_JPG$",
          li: "Crystal UHD",
        },
      ],
    },
    {
      key: 3,
      head: "Home Applicances",
      nav: [
        { id: 0, li: "Washing Machine" },
        { id: 1, li: "Refrigerators" },
      ],
    },
  ];
  const [mobile, setMobile] = useState([
    miniNavs[1].nav[0].li,
    miniNavs[1].nav[0].src,
  ]);
  const [tvSrc, setTvSrc] = useState(miniNavs[2].nav[0].src);
  // const [homeSrc, setHomeSrc] = useState(miniNavs[3].nav[0].src);
  // const [offersSrc, setOffersSrc] = useState(miniNavs[0].nav[0].src);

  let coms = [
    { id: "com1", comNo: 1 },
    { id: "com2", comNo: 2 },
    { id: "com3", comNo: 3 },
    { id: "com4", comNo: 4 },
  ];

  let onClickMNav = (e) => {
    handleMobile(e.target.innerHTML);
  };

  let handleMobile = (slide) => {
    for (const navs of miniNavs) {
      for (const elem of navs.nav) {
        if (elem.li === slide) {
          let comNo = miniNavs.indexOf(navs);
          // eslint-disable-next-line default-case
          switch (comNo) {
            case 0:
              break;
            case 1:
              setTimeout(() => {
                setMobile([elem.li, elem.src]);
              }, 100);
              break;
            case 2:
              setTvSrc(elem.src);
              break;
          }
        }
      }
    }
  };

  return (
    <div>
      <NAV />
      <IS />
      <OFFERS
        coms={coms}
        offers={offers}
        miniNavs={miniNavs}
        onClickMNav={onClickMNav}
      />
      <Mobiles
        mobile={mobile}
        miniNavs={miniNavs}
        onClickMNav={onClickMNav}
        id={miniNavs[1].key}
      />
      <TV
        tvSrc={tvSrc}
        miniNavs={miniNavs}
        id={miniNavs[2].key}
        onClickMNav={onClickMNav}
      />
      <HApp
        miniNavs={miniNavs}
        id={miniNavs[3].key}
        onClickMNav={onClickMNav}
      />
    </div>
  );
};
export default App;
