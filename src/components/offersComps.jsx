import { Component } from "react";

class offersComps extends Component {
  render() {
    return (
      <div className="bg-gray-200 flex flex-wrap flex-col items-center p-12 rounded-md hover:cursor-pointer">
        <img
          src="	https://images.samsung.com/is/image/samsung/assets/pk/A73-BG.png?$160_160_PNG$"
          alt=""
        />
        <p>Galaxy A73</p>
        <p>Buy now and avail Rs.5,000 off</p>
      </div>
    );
  }
}

export default offersComps;
