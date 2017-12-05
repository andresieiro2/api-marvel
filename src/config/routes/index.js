import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import history from './History';

import ApplicationLayout from './../../views/layouts/ApplicationLayout';

import HomeView from './../../views/home';
import NotFoundView from './../../views/errors/NotFound';

export default (store) => {
  const syncHistory = syncHistoryWithStore(history, store);

  return (
    <Router history={syncHistory}>
      <Route path="/" component={ApplicationLayout}>
        <IndexRoute component={HomeView} />
        <Route path="*" component={NotFoundView} />
      </Route>
    </Router>
  );
};
