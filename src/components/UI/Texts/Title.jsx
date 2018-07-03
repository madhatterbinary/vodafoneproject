import React from "react";

import classes from "./Title.css";

const Title = props => (
  <div className={classes.Title}>{props.text}</div>
);

export default Title;
