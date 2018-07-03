import React, { Component } from "react";
import classes from "./Gold.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Gold extends Component {
  render() {
    if (this.props.goldPhone64GB === undefined) {
      return <div />;
    }
    const { value } = this.props.goldPhone64GB[0].merchandisingMedia[0];
    return (
      <div className={classes.Gold}>
        <img src={`${window.location.origin}${value}`} width="255" alt="Gold" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    goldPhone64GB: state.phone.goldPhone64GB
  };
};
export default withRouter(connect(mapStateToProps)(Gold));
