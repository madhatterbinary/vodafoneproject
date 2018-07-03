import React from "react";

import classes from "./SubTitle.css";

const SubTitle = props => (
  <div className={classes.SubTitle}>
    {props.header}<span>{props.text}</span>
  </div>
);

export default SubTitle;