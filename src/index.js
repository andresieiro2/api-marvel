import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './config/Redux';
import routes from './config/routes';

import './config/stylesheets/application.scss';

require.context('./../public/');

if (module.hot) {
  module.hot.accept();
}


ReactDOM.render(
  <Provider store={store}>
    {routes(store)}
  </Provider>,
  document.getElementById('yield'),
);
