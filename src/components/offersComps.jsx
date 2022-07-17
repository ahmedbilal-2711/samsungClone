import { Component } from "react";

class offersComps extends Component {

  render() {
    return (
      <div className="bg-gray-200 flex flex-wrap flex-col items-center p-12 rounded-md hover:cursor-pointer">
        <img
          src={this.props.offers[this.props.comNo].src}
          alt=""
        />
        <p>{this.props.offers[this.props.comNo].name}</p>
        <p>{this.props.offers[this.props.comNo].price}</p>
      </div>
    );
  }
}

export default offersComps;
