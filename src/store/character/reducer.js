import * as types from './actionTypes';

const initialState = {
 actual: null,
 list: [],
 comics: [],
};

export default function reduce(state = initialState, action = {}) {
 switch (action.type) {
   case types.SET_CHARACTERS_LIST:
     return  {
        ...state,
        list: action.characters,
      }
    default:
      return state;
  }
}
