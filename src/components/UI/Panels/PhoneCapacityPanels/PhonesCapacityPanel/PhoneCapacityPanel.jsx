import React, { Component } from "react";
import classes from "./PhoneCapacityPanel.css";
import SubTitle from "../../../../UI/Texts/SubTitle";
import CapacityButtonsPanel from "../../../../UI/Panels/PhoneCapacityPanels/CapacityButtonsPanel/CapacityButtonsPanel";

export default class PhoneCapacityPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCapacity: "64GB"
    };
  }
  capacitySelectedHandler = value => {
    if (value === "64GB") {
      this.setState({ selectedCapacity: "64GB" }, () => {
        this.props.selectedCapacity(this.state.selectedCapacity);
      });
    } else if (value === "256GB") {
      this.setState({ selectedCapacity: "256GB" }, () => {
        this.props.selectedCapacity(this.state.selectedCapacity);
      });
    }
  };
  render() {
    return (
      <div className={classes.PhoneCapacityPanel}>
        <SubTitle header="Capacity:" text={this.state.selectedCapacity} />
        <CapacityButtonsPanel capacitySelected={this.capacitySelectedHandler} />
      </div>
    );
  }
}
