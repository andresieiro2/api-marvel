import { setLoading } from './../store/loading/actions';
import * as types from './../store/loading/actionTypes';

const loadingMiddleware = store => next => action => {

  if(action.type !== types.SET_LOADING ) {
    if( action.isLoading !== undefined && action.isLoading !== null ) {
      store.dispatch(setLoading(action.isLoading));
    }
  }

  next(action);
}


export default loadingMiddleware;
