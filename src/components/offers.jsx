import OFFCOMP from "./offersComps";
import OffMainComp from "./offersMainComp";
import { Component } from "react";

class offers extends Component {
  
  render() {
    return (
      <div className="pt-10 flex flex-wrap flex-col items-center">
        <h1 className="text-5xl font-semibold">This Month's Picks</h1>
        <nav className="pt-12">
          <ul className="flex">
            <li className="px-4 text-lg  py-0.5 active:underline-offset-1 hover:text-gray-600 hover:cursor-pointer font-semibold">
              Offers
            </li>
            <li className="px-4 text-lg py-0.5 active:underline-offset-1 hover:text-gray-600 hover:cursor-pointer font-semibold">
              Mobile
            </li>
            <li className="px-4 text-lg py-0.5 active:underline-offset-1 hover:text-gray-600 hover:cursor-pointer font-semibold">
              TV&AV
            </li>
            <li className="px-4 text-lg py-0.5 active:underline-offset-1 hover:text-gray-600 hover:cursor-pointer font-semibold">
              Home Appliances
            </li>
          </ul>
        </nav>
        <div className="grid grid-cols-2 gap-4 p-3 pt-6 ">
          <OffMainComp />
          <div className="grid grid-cols-2 gap-4">
            {this.props.coms.map((com) => (
              <OFFCOMP key={com.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default offers;
