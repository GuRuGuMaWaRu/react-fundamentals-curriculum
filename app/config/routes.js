import React from 'react';
import ReactRouter, {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="forecast/:city" component={Forecast} />
    </Route>
  </Router>
);

module.exports = routes;
