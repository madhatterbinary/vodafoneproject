import React, { Component } from "react";
import classes from "./Silver.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Silver extends Component {
  render() {
    if (this.props.silverPhone64GB === undefined) {
      return <div />;
    }
    const { value } = this.props.silverPhone64GB[0].merchandisingMedia[0];

    return (
      <div className={classes.Silver}>
        <img
          src={`${window.location.origin}${value}`}
          width="255"
          alt="Silver"
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    silverPhone64GB: state.phone.silverPhone64GB
  };
};
export default withRouter(connect(mapStateToProps)(Silver));
