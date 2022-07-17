import "./App.css";
import IS from "./components/imageSlider.jsx";
import NAV from "./components/navBar.jsx";
import OFFERS from "./components/offers.jsx";
import React, { Component } from "react";

class App extends Component {
  state = {
    coms: [
      { id: "com1", comNo: 1 },
      { id: "com2", comNo: 2 },
      { id: "com3", comNo: 3 },
      { id: "com4", comNo: 4 },
    ],
    offers: [
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
    ],
  };

  render() {
    return (
      <React.Fragment>
        <NAV />
        <IS />
        <OFFERS coms={this.state.coms} offers={this.state.offers} />
      </React.Fragment>
    );
  }
}

export default App;
