import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import loadingMiddleware from './../middlewares/loading';

import reducers from './../store/Reducers';
import history from './routes/History';

const routerHistoryMiddleware = routerMiddleware(history);

export const middlewares = [
  thunk,
  routerHistoryMiddleware,
  loadingMiddleware,
];

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);
