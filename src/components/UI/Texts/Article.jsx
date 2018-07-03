import React from "react";
import classes from "./Article.css";

const Article = props => <div className={classes.Article}>{props.text}</div>;

export default Article;
