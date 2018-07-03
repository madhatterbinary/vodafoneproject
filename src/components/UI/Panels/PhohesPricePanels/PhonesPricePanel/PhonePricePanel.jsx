import React, { Component } from "react";
import classes from "./PhonePricePanel.css";
import PriceBox from "../../../../UI/Panels/PhohesPricePanels/PriceBox/PriceBox";

export default class PhonePricePanel extends Component {
  render() {
    return (
      <div className={classes.PhonePricePanel}>
        <PriceBox
          preText="from"
          price={`£${this.props.oneOffPrice}`}
          postText="upfront cost"
        />
        <p />
        <PriceBox
          preText="When you pay"
          price={`£${this.props.monthlyPrice}`}
          postText="a month"
        />
      </div>
    );
  }
}
