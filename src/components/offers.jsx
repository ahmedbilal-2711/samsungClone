import OFFCOMP from "./offersComps";
import OffMainComp from "./offersMainComp";
import MiniNav from "./miniNav";
import { Component } from "react";
import { motion } from "framer-motion";
class offers extends Component {
  render() {
    return (
      <motion.div
        initial={{ x: -120 }}
        // animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <MiniNav
          MN={this.props.miniNavs}
          id={this.props.miniNavs[0].key}
          onClickNav={this.props.onClickMNav}
        />
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
      </motion.div>
    );
  }
}

export default offers;
