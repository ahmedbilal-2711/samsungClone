import "./App.css";
import IS from "./components/imageSlider.jsx";
import NAV from "./components/navBar.jsx";
import OFFERS from "./components/offers.jsx";
import React, { Component } from "react";

class App extends Component {
  state = {
    coms: [{ id: "com1" }, { id: "com2" }, { id: "com3" }, { id: "com4" }],
  };

  render() {
    return (
      <React.Fragment>
        <NAV />
        <IS />
        <OFFERS coms={this.state.coms} />
      </React.Fragment>
    );
  }
}

export default App;
