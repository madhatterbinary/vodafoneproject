import React from "react";

import classes from "./PriceBox.css";

const PriceBox = props => (
  <div className={classes.PriceBox}>
    {props.preText} <span>{props.price}</span> {props.postText}
  </div>
);

export default PriceBox;
