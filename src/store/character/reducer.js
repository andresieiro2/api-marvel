import * as types from './actionTypes';

const initialState = {
 list: [],
 comics: [],
 nameCharacter: '',
 metaList: {
   count: 0,
   limit: 10,
   offset: 0,
   total: 0,
   searched: false,
 }
};


export default function reduce(state = initialState, action = {}) {
 switch (action.type) {
   case types.SET_CHARACTERS_LIST:
     return  {
        ...state,
        list: { ...action.characters },
        metaList: {
          count: action.characters.count,
          limit: action.characters.limit,
          offset: action.characters.offset,
          total: action.characters.total,
          searched: true,
        },
        nameCharacter: action.nameCharacter,
      }
      case types.SET_CHARACTERS_LIST_PAGED:
        return {
          ...state,
          list: {
            results: state.list.results.slice(0).concat(action.characters.results)
          },
          metaList: {
            count: state.metaList.count + action.characters.count,
            limit: action.characters.limit,
            offset: action.characters.offset,
            total: action.characters.total,
            searched: true,
          },
        }
    case types.SET_CHARACTERS_COMICS_LIST:
      return {
        ...state,
        comics: { ...action.comics },
        metaList: {
          count: action.comics.count,
          limit: action.comics.limit,
          offset: action.comics.offset,
          total: action.comics.total,
          searched: true,
        },
      }
    case types.SET_CHARACTERS_COMICS_LIST_PAGED:
      return {
        ...state,
        comics: {
          results: state.comics.results.slice(0).concat(action.comics.results)
        },
        metaList: {
          count: state.metaList.count + action.comics.count,
          limit: action.comics.limit,
          offset: action.comics.offset,
          total: action.comics.total,
          searched: true,
        },
      }
    case types.RESET_CHARACTERS_LIST:
      return {
        ...state,
        nameCharacter: "",
        list: [],
        metaList: {
          ...initialState.metaList,
        },
      }
    case types.RESET_CHARACTERS_COMICS_LIST:
      return {
        ...state,
        comics: [],
        metaList: {
          ...initialState.metaList,
        },
      }
      case types.RESET_PAGINATION:
        return {
          ...state,
          metaList: {
            ...initialState.metaList,
          },
          nameCharacter: "",
        }
    case types.SET_SEARCH_VALUE:
      return {
        ...state,
        nameCharacter: action.searchValue,
      }
    default:
      return state;
  }
}
