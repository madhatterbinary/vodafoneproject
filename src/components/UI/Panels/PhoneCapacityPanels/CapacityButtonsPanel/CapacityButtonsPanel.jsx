import React, { Component } from "react";
import classes from "./CapacityButtonsPanel.css";
import SmallestCapacityButton from "../../../../UI/Buttons/SmallestCapacityButton";
import BiggestCapacityButton from "../../../../UI/Buttons/BiggestCapacityButton";

export default class CapacityButtonsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deselectSmall: false,
      deselectBig: false
    };
    this.handleTypeUpdate.bind(this);
  }
  handleTypeUpdate = (siblingType, siblingSelected) => {
    if (siblingType === "smallest") {
      this.setState({
        deselectSmall: false,
        deselectBig: true
      });
    }
    if (siblingType === "biggest") {
      this.setState({
        deselectSmall: true,
        deselectBig: false
      });
    }
  };
  capacitySelectedHandler = value => {
    value === "64GB"
      ? this.props.capacitySelected("64GB")
      : this.props.capacitySelected("256GB");
  };
  render() {
    return (
      <div className={classes.CapacityButtonsPanel}>
        <SmallestCapacityButton
          children="64"
          capacitySelected={this.capacitySelectedHandler}
          deselectSmall={this.state.deselectSmall}
          deselectBig={this.state.deselectBig}
          updateType={this.handleTypeUpdate}
        />
        <BiggestCapacityButton
          children="256"
          capacitySelected={this.capacitySelectedHandler}
          deselectSmall={this.state.deselectSmall}
          deselectBig={this.state.deselectBig}
          updateType={this.handleTypeUpdate}
        />
      </div>
    );
  }
}
