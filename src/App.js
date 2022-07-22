import "./App.css";
import IS from "./components/imageSlider.jsx";
import NAV from "./components/navBar.jsx";
import OFFERS from "./components/offers.jsx";
import TV from "./components/tvCom.jsx";
import Mobiles from "./components/mobileCom.jsx";
import HApp from "./components/homeAppCom";

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
        { id: 0, li: "Galaxy S22 Ultra" },
        { id: 1, li: "Galaxy Z Flip3 5G" },
        { id: 2, li: "Galaxy Watch 4" },
        { id: 3, li: "Galaxy Buds2" },
      ],
    },
    {
      key: 2,
      head: "TV & Sound",
      nav: [
        { id: 0, li: "Neo QLED" },
        { id: 1, li: "QLED" },
        { id: 2, li: "Crystal UHD" },
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

  let coms = [
    { id: "com1", comNo: 1 },
    { id: "com2", comNo: 2 },
    { id: "com3", comNo: 3 },
    { id: "com4", comNo: 4 },
  ];

  return (
    <div>
      <NAV />
      <IS />
      <OFFERS coms={coms} offers={offers} miniNavs={miniNavs} />
      <Mobiles miniNavs={miniNavs} id={miniNavs[1].key} />
      <TV miniNavs={miniNavs} id={miniNavs[2].key} />
      <HApp miniNavs={miniNavs} id={miniNavs[3].key} />
    </div>
  );
};

export default App;
