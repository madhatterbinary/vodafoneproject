import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Gold from './components/Pages/Gold/Gold';
import SpaceGrey from './components/Pages/SpaceGrey/SpaceGrey';
import Silver from './components/Pages/Silver/Silver';
import PhoneSelectorMainPanel from './hoc/PhoneSelectorMainPanel/PhoneSelectorMainPanel';
import classes from "./process/css/App.css";


export default class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/gold" component={Gold} />
          <Route path="/spacegrey" component={SpaceGrey} />
          <Route path="/silver" component={Silver} />
          <Route exact path="/" component={Silver} />
          <Redirect to="/" />
        </Switch>
        <PhoneSelectorMainPanel />
      </div>
    );
  }
}
