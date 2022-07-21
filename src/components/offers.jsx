import OFFCOMP from "./offersComps";
import OffMainComp from "./offersMainComp";
import MiniNav from "./miniNav";
import Wrapper from "./boxWrappers";
import { Component } from "react";

class offers extends Component {
  render() {
    return (
      <Wrapper>
        <MiniNav MN={this.props.miniNavs} id={this.props.miniNavs[0].key} />
        <div className="grid grid-cols-2 gap-4 p-3 pt-6">
          <OffMainComp offers={this.props.offers} />
          <div className="grid grid-cols-2 gap-4">
            {this.props.coms.map((com) => (
              <OFFCOMP
                key={com.id}
                comNo={com.comNo}
                offers={this.props.offers}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default offers;
