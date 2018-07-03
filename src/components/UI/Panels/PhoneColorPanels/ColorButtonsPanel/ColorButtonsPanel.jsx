import React, { Component } from "react";
import classes from "./ColorButtonsPanel.css";
import GoldButton from "../../../../UI/Buttons/GoldButton";
import SpaceGreyButton from "../../../../UI/Buttons/SpaceGreyButton";
import SilverButton from "../../../../UI/Buttons/SilverButton";
import { NavLink } from "react-router-dom";

export default class ColorButtonsPanel extends Component {
  buttonHandler = e => {
    if (e.target.id === "goldPhoneBtn") {
      this.props.colorSelected("Gold");
    } else if (e.target.id === "silverPhoneBtn") {
      this.props.colorSelected("Silver");
    } else if (e.target.id === "spacegreyPhoneBtn") {
      this.props.colorSelected("Space Grey");
    }
  };
  render() {
    return (
      <div className={classes.ColorButtonsPanel}>
        <NavLink
          onClick={this.buttonHandler}
          to="/gold"
          activeStyle={{
            border: "2px solid #009aa8",
            borderRadius: "14px",
            paddingTop: "14px",
            paddingBottom: "17px"
          }}
        >
          <GoldButton onClick={this.buttonHandler} />
        </NavLink>
        <NavLink
          className="silverPhoneBtn"
          onClick={this.buttonHandler}
          exact
          to="/"
          activeStyle={{
            border: "2px solid #009aa8",
            borderRadius: "14px",
            paddingTop: "14px",
            paddingBottom: "17px"
          }}
        >
          <SilverButton onClick={this.buttonHandler} />
        </NavLink>
        <NavLink
          className="spacegreyPhoneBtn"
          onClick={this.buttonHandler}
          to="/spacegrey"
          activeStyle={{
            border: "2px solid #009aa8",
            borderRadius: "14px",
            paddingTop: "14px",
            paddingBottom: "17px"
          }}
        >
          <SpaceGreyButton onClick={this.buttonHandler} />
        </NavLink>
      </div>
    );
  }
}
