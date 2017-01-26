import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

import routes from './config/routes';

ReactDOM.render(
  routes,
  document.getElementById('app')
);
