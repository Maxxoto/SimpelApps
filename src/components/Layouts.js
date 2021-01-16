import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import Routes from '../Routes';

const Layouts = (props) => {
  return <Router>
  <React.Suspense>
    <Switch><Routes></Routes></Switch>
  </React.Suspense>
  </Router>;
};

export default Layouts;