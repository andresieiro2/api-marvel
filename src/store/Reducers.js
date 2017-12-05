import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import character from './character/reducer';
import loading from './loading/reducer';

export default combineReducers({
  routing,
  character,
  loading
});
