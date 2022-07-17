import { Component } from "react";

class offersMainComp extends Component {
  render() {
    return (
      <div className="bg-slate-200 flex flex-wrap flex-col items-center p-12 rounded-md hover:cursor-pointer">
        <img
          src={this.props.offers[0].src}
          alt=""
        />
        <p>{this.props.offers[0].name}</p>
        <p>{this.props.offers[0].price}</p>
      </div>
    );
  }
}

export default offersMainComp;
