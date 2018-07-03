import React, { Component } from "react";
import classes from "./PhoneColorsPanel.css";
import SubTitle from "../../../../UI/Texts/SubTitle";
import ColorButtonsPanel from "../../../../UI/Panels/PhoneColorPanels/ColorButtonsPanel/ColorButtonsPanel";

export default class PhoneColorsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneColor: "Silver"
    };
  }
  colorSelectedHandler = color => {
    if (color === "Gold") {
      this.setState({ phoneColor: "Gold" }, () => {
        this.props.selectedButton(this.state.phoneColor);
      });
    }
    if (color === "Silver") {
      this.setState({ phoneColor: "Silver" }, () => {
        this.props.selectedButton(this.state.phoneColor);
      });
    }
    if (color === "Space Grey") {
      this.setState({ phoneColor: "Space Grey" }, () => {
        this.props.selectedButton(this.state.phoneColor);
      });
    }
  };
  render() {
    return (
      <div className={classes.PhoneColorsPanel}>
        <SubTitle header="Colour:" text={this.state.phoneColor} />
        <ColorButtonsPanel
          phones={this.props.phones}
          colorSelected={this.colorSelectedHandler}
        />
      </div>
    );
  }
}
