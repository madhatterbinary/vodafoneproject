import React from 'react';
import classes from './StarRatingIcon.css';

const StarRatingIcon = (props) => (
    <div className={classes.StarRatingIcon} >
    <img src={props.src} alt="stars rating"/> 
    </div>
);

export default StarRatingIcon;