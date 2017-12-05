import * as types from './actionTypes';

const initialState = {
 loading: false,
};

export default function reduce(state = initialState, action = {}) {
 switch (action.type) {
   case types.SET_LOADING:
     return  {
        ...state,
        isLoading: action.loading
      }
    default:
      return state;
  }
}
