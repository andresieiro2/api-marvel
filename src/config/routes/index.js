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
import ComicsView from './../../views/comics';
import NotFoundView from './../../views/errors/NotFound';

import { resetPagination, resetCharactersList } from './../../store/character/actions';

export default (store) => {
  const syncHistory = syncHistoryWithStore(history, store);

  return (
    <Router history={syncHistory}>
      <Route path="/" component={ApplicationLayout}
        onChange={ () => { store.dispatch(resetPagination())}}
      >
        <IndexRoute component={HomeView}
          onEnter={ () => { store.dispatch( resetCharactersList() )}}
        />
        <Route path="/comics/:idCharacter" component={ComicsView} />
        <Route path="*" component={NotFoundView} />
      </Route>
    </Router>
  );
};
