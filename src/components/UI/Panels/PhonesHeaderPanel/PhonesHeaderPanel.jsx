import React, { Component } from "react";
import classes from "./PhonesHeaderPanel.css";
import Article from "../../../UI/Texts/Article";
import Title from "../../../UI/Texts/Title";
import StarRatingIcon from "../../../UI/StarRatingIcon/StarRatingIcon";
import staricon from "../../../../assets/images/starrating.png";

export default class PhonesHeaderPanel extends Component {
  render() {
    return (
      <div className={classes.PhonesHeaderPanel}>
        <Title text={this.props.header} />
        <StarRatingIcon src={staricon} />
        <Article text={this.props.subtitle} />
      </div>
    );
  }
}
