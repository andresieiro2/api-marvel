import * as types from './actionTypes';
import * as CharacterServices from './../../services/character';

export const setCharactersList = (characters) => ({
 type: types.SET_CHARACTERS_LIST,
 characters,
 isLoading: false,
});

export const setActualCharacterComics = (comics) => ({
 type: types.SET_ACTUAL_CHARACTER_COMICS,
 comics
});

export const getCharactersByName = (name) => (dispatch, getState) => {

 dispatch({
  type: types.GET_CHARACTERS_LIST,
  isLoading: true,
 })

 CharacterServices.getCharactersByName(name)
 .then( result =>
   dispatch(setCharactersList(result.data))
 )
 .catch( error => console.log(error));
};
