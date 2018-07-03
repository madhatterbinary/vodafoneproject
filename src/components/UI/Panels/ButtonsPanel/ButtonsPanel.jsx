import React, { Component } from "react";
import classes from "./ButtonsPanel.css";
import PhonesColorsPanel from "../../../UI/Panels/PhoneColorPanels/PhonesColorPanel/PhoneColorsPanel";
import PhonesCapacityPanel from "../../../UI/Panels/PhoneCapacityPanels/PhonesCapacityPanel/PhoneCapacityPanel";

export default class ButtonsPanel extends Component {
  selectedButtonHandler = phoneColor => {
    this.props.selectedButton(phoneColor);
  };
  selectedCapacityHandler = phoneCapacity => {
    this.props.selectedCapacity(phoneCapacity);
  };
  render() {
    return (
      <div className={classes.ButtonsPanel}>
        <PhonesColorsPanel
          phones={this.props.phones}
          selectedButton={this.selectedButtonHandler}
        />
        <PhonesCapacityPanel
          phones={this.props.phones}
          selectedCapacity={this.selectedCapacityHandler}
        />
      </div>
    );
  }
}
