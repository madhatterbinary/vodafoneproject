import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = {
  root: {
    background: "linear-gradient(180deg, #212121 30%, #242323 100%)",
    borderRadius: 10,
    border: 4,
    color: "black",
    height: 45,
    width: 45,
    padding: "0 0",
    margin: "3px",
    flex: "none",
    minWidth: 40,
    boxShadow: "0 1px 1px 1px rgba(0, 0, 0, .2)"
  },
  label: {
    textTransform: "capitalize"
  }
};

class SpaceGreyButton extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  render() {
    const { classes } = this.props;
    return (
      <Button
        id="spacegreyPhoneBtn"
        className={classes.root}
        disableRipple={true}
      >
        {classes.children ? classes.children : ""}
      </Button>
    );
  }
}

export default withStyles(styles)(SpaceGreyButton);
