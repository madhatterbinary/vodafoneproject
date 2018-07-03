import React, { Component, Fragment } from "react";
import classes from "./PhoneSelectorMainPanel.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import PhonesHeaderPanel from "../../components/UI/Panels/PhonesHeaderPanel/PhonesHeaderPanel";
import ButtonsPanel from "../../components/UI/Panels//ButtonsPanel/ButtonsPanel";
import PhonesPricePanel from "../../components/UI/Panels/PhohesPricePanels/PhonesPricePanel/PhonePricePanel";

class PhoneSelectorMainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: {
        oneOffPrice: "124.17",
        monthlyPrice: "36.00",
        capacity: "64GB",
        color: "Silver",
        displayName: "Apple iPhone 8 64GB Silver",
        displayDescription:
          "All-glass design, advanced cameras, wireless charging and a smart A11 Bionic chip. Intelligence never looked better."
      }
    };
  }
  componentDidMount = () => {
    this.props.onGetPhones();
  };
  selectedButtonHandler = color => {
    if (color === "Gold") {
      if (this.state.phone.capacity === "64GB") {
        this.setState({
          phone: {
            capacity: this.state.phone.capacity,
            color: color,
            oneOffPrice: this.props.goldPhone64GB[0].priceInfo.hardwarePrice
              .oneOffPrice.net,
            monthlyPrice: this.props.goldPhone64GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.goldPhone64GB[0].displayName,
            displayDescription: this.props.goldPhone64GB[0].displayDescription
          }
        });
      } else if (this.state.phone.capacity === "256GB") {
        this.setState({
          phone: {
            capacity: this.state.phone.capacity,
            color: color,
            oneOffPrice: this.props.goldPhone256GB[0].priceInfo.hardwarePrice
              .oneOffPrice.net,
            monthlyPrice: this.props.goldPhone256GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.goldPhone256GB[0].displayName,
            displayDescription: this.props.goldPhone256GB[0].displayDescription
          }
        });
      }
    } else if (color === "Silver") {
      if (this.state.phone.capacity === "64GB") {
        this.setState({
          phone: {
            capacity: this.state.phone.capacity,
            color: color,
            oneOffPrice: this.props.silverPhone64GB[0].priceInfo.hardwarePrice
              .oneOffPrice.net,
            monthlyPrice: this.props.silverPhone64GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.silverPhone64GB[0].displayName,
            displayDescription: this.props.silverPhone64GB[0].displayDescription
          }
        });
      } else if (this.state.phone.capacity === "256GB") {
        this.setState({
          phone: {
            capacity: this.state.phone.capacity,
            color: color,
            oneOffPrice: this.props.silverPhone256GB[0].priceInfo.hardwarePrice
              .oneOffPrice.net,
            monthlyPrice: this.props.silverPhone256GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.silverPhone256GB[0].displayName,
            displayDescription: this.props.silverPhone256GB[0]
              .displayDescription
          }
        });
      }
    } else if (color === "Space Grey") {
      if (this.state.phone.capacity === "64GB") {
        this.setState({
          phone: {
            capacity: this.state.phone.capacity,
            color: color,
            oneOffPrice: this.props.spacegreyPhone64GB[0].priceInfo
              .hardwarePrice.oneOffPrice.net,
            monthlyPrice: this.props.spacegreyPhone64GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.spacegreyPhone64GB[0].displayName,
            displayDescription: this.props.spacegreyPhone64GB[0]
              .displayDescription
          }
        });
      } else if (this.state.phone.capacity === "256GB") {
        this.setState({
          phone: {
            capacity: this.state.phone.capacity,
            color: color,
            oneOffPrice: this.props.spacegreyPhone256GB[0].priceInfo
              .hardwarePrice.oneOffPrice.net,
            monthlyPrice: this.props.spacegreyPhone256GB[0].priceInfo
              .bundlePrice.monthlyPrice.net,
            displayName: this.props.spacegreyPhone256GB[0].displayName,
            displayDescription: this.props.spacegreyPhone256GB[0]
              .displayDescription
          }
        });
      }
    }
  };
  selectedCapacityHandler = capacity => {
    if (capacity === "64GB") {
      if (this.state.phone.color === "Gold") {
        this.setState({
          phone: {
            capacity: capacity,
            color: this.state.phone.color,
            oneOffPrice: this.props.goldPhone64GB[0].priceInfo.hardwarePrice
              .oneOffPrice.net,
            monthlyPrice: this.props.goldPhone64GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.goldPhone64GB[0].displayName,
            displayDescription: this.props.goldPhone64GB[0].displayDescription
          }
        });
      } else if (this.state.phone.color === "Silver") {
        this.setState({
          phone: {
            capacity: capacity,
            color: this.state.phone.color,
            oneOffPrice: this.props.silverPhone64GB[0].priceInfo.hardwarePrice
              .oneOffPrice.net,
            monthlyPrice: this.props.silverPhone64GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.silverPhone64GB[0].displayName,
            displayDescription: this.props.silverPhone64GB[0].displayDescription
          }
        });
      } else if (this.state.phone.color === "Space Grey") {
        this.setState({
          phone: {
            capacity: capacity,
            color: this.state.phone.color,
            oneOffPrice: this.props.spacegreyPhone64GB[0].priceInfo
              .hardwarePrice.oneOffPrice.net,
            monthlyPrice: this.props.spacegreyPhone64GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.spacegreyPhone64GB[0].displayName,
            displayDescription: this.props.spacegreyPhone64GB[0]
              .displayDescription
          }
        });
      }
    } else if (capacity === "256GB") {
      if (this.state.phone.color === "Gold") {
        this.setState({
          phone: {
            capacity: capacity,
            color: this.state.phone.color,
            oneOffPrice: this.props.goldPhone256GB[0].priceInfo.hardwarePrice
              .oneOffPrice.net,
            monthlyPrice: this.props.goldPhone256GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.goldPhone256GB[0].displayName,
            displayDescription: this.props.goldPhone256GB[0].displayDescription
          }
        });
      } else if (this.state.phone.color === "Silver") {
        this.setState({
          phone: {
            capacity: capacity,
            color: this.state.phone.color,
            oneOffPrice: this.props.silverPhone256GB[0].priceInfo.hardwarePrice
              .oneOffPrice.net,
            monthlyPrice: this.props.silverPhone256GB[0].priceInfo.bundlePrice
              .monthlyPrice.net,
            displayName: this.props.silverPhone256GB[0].displayName,
            displayDescription: this.props.silverPhone256GB[0]
              .displayDescription
          }
        });
      } else if (this.state.phone.color === "Space Grey") {
        this.setState({
          phone: {
            capacity: capacity,
            color: this.state.phone.color,
            oneOffPrice: this.props.spacegreyPhone256GB[0].priceInfo
              .hardwarePrice.oneOffPrice.net,
            monthlyPrice: this.props.spacegreyPhone256GB[0].priceInfo
              .bundlePrice.monthlyPrice.net,
            displayName: this.props.spacegreyPhone256GB[0].displayName,
            displayDescription: this.props.spacegreyPhone256GB[0]
              .displayDescription
          }
        });
      }
    }
  };

  render() {
    let phonescontainer = <Spinner />;
    if (this.props.loading === false) {
      phonescontainer = (
        <Fragment>
          <PhonesHeaderPanel
            header={this.state.phone.displayName}
            subtitle={this.state.phone.displayDescription}
          />
          <ButtonsPanel
            phones={this.props}
            selectedButton={this.selectedButtonHandler}
            selectedCapacity={this.selectedCapacityHandler}
          />
          <PhonesPricePanel
            phones={this.props}
            oneOffPrice={this.state.phone.oneOffPrice}
            monthlyPrice={this.state.phone.monthlyPrice}
          />
        </Fragment>
      );
    }
    return (
      <div className={classes.PhoneSelectorMainPanel}>{phonescontainer}</div>
    );
  }
}
const mapStateToProps = state => {
  return {
    goldPhone64GB: state.phone.goldPhone64GB,
    goldPhone256GB: state.phone.goldPhone256GB,
    silverPhone64GB: state.phone.silverPhone64GB,
    silverPhone256GB: state.phone.silverPhone256GB,
    spacegreyPhone64GB: state.phone.spacegreyPhone64GB,
    spacegreyPhone256GB: state.phone.spacegreyPhone256GB,
    loading: state.phone.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPhones: () => dispatch(actions.getPhones())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhoneSelectorMainPanel)
);
