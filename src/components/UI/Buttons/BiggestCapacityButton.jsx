import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = {
  root: {
    background: "linear-gradient(180deg, #f0f2f2 30%, #f0f2f2 100%)",
    borderRadius: 10,
    border: 4,
    color: "black",
    height: 45,
    width: 45,
    padding: "0 0",
    margin: "5px",
    flex: "none",
    minWidth: 40,
    boxShadow: "0 1px 1px 1px rgba(0, 0, 0, .2)"
  },
  label: {
    textTransform: "capitalize",
    width: "45px"
  }
};

class BiggestCapacityButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      type: "",
      selectedStyles: {
        border: "2px solid #009aa8",
        borderRadius: "14px",
        paddingTop: "14px",
        paddingBottom: "12px",
        width: "55px",
        position: "relative",
        bottom: "4px",
        height: "54px",
        marginLeft: "-6px",
        marginRight: "-6px"
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    this.props.updateType(this.state.type, this.state.selected);
    this.setState(
      {
        selected: true,
        type: "biggest"
      },
      () => {
        this.props.updateType(this.state.type, this.state.selected);
      }
    );
    this.props.capacitySelected("256GB");
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.deselectBig) {
      return { type: "biggest", selected: false };
    }
    return null;
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    type: PropTypes.string
  };
  render() {
    const { classes } = this.props;
    return (
      <Button
        className={classes.root}
        disableRipple={true}
        onClick={this.handleClick}
        style={{ width: "45" }}
      >
        <span style={this.state.selected ? this.state.selectedStyles : {}}>
          {this.props.children ? this.props.children : ""}
        </span>
      </Button>
    );
  }
}

export default withStyles(styles)(BiggestCapacityButton);
