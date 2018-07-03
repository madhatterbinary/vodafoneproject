import React, { Component } from "react";
import classes from "./SpaceGrey.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SpaceGrey extends Component {
  render() {
    if (this.props.spacegreyPhone64GB === undefined) {
      return <div />;
    }
    const { value } = this.props.spacegreyPhone64GB[0].merchandisingMedia[0];
    return (
      <div className={classes.SpaceGrey}>
        <img
          src={`${window.location.origin}${value}`}
          width="255"
          alt="Space Grey"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spacegreyPhone64GB: state.phone.spacegreyPhone64GB
  };
};
export default withRouter(connect(mapStateToProps)(SpaceGrey));
