import React from 'react';
import ReactRouter, {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Main from '../components/Main';

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}></Route>
  </Router>
);

module.exports = routes;
