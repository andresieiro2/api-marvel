import * as types from './actionTypes';
import * as CharacterServices from './../../services/character';

export const setCharactersList = (characters, nameCharacter) => ({
 type: types.SET_CHARACTERS_LIST,
 characters,
 nameCharacter,
 isLoading: false,
});

export const setCharactersListPaged = (characters) => ({
 type: types.SET_CHARACTERS_LIST_PAGED,
 characters,
 isLoading: false,
});


export const setCharactersComics = (comics) => ({
 type: types.SET_CHARACTERS_COMICS_LIST,
 comics,
 isLoading: false,
});

export const setCharactersComicsPaged = (comics) => ({
 type: types.SET_CHARACTERS_COMICS_LIST_PAGED,
 comics,
 isLoading: false,
});




//**** EXTERNAL ACTIONS

export const getCharactersByName = (name) => (dispatch, getState) => {
  dispatch({
    type: types.RESET_CHARACTERS_LIST,
  })

  dispatch({
    type: types.GET_CHARACTERS_LIST,
    isLoading: true,
  })

  CharacterServices.getCharactersByName(name)
  .then( result =>
   dispatch(setCharactersList( result.data, name))
  )
  .catch( error => console.log(error));
};

export const getCharactersByNamePaged = (offset) => (dispatch, getState) => {
  dispatch({
    type: types.GET_CHARACTERS_LIST_PAGED,
    isLoading: true,
  })

  const name = getState().character.nameCharacter;

  CharacterServices.getCharactersByName(name, offset)
  .then( result =>
   dispatch(setCharactersListPaged(result.data))
  )
  .catch( error => console.log(error));
};


export const getCharactersComics = (idCharacter) => (dispatch, getState) => {
  dispatch({
    type: types.RESET_CHARACTERS_COMICS_LIST,
  })

  dispatch({
    type: types.GET_CHARACTERS_COMICS_LIST,
    isLoading: true,
  })

  CharacterServices.getCharacterComics(idCharacter)
  .then( result =>
   dispatch(setCharactersComics(result.data))
  )
  .catch( error => console.log(error));
};

export const getCharactersComicsPaged = (idCharacter, offset) => (dispatch, getState) => {

  dispatch({
    type: types.GET_CHARACTERS_COMICS_LIST_PAGED,
    isLoading: true,
  })

  CharacterServices.getCharacterComics(idCharacter, offset)
  .then( result =>
   dispatch(setCharactersComicsPaged(result.data))
  )
  .catch( error => console.log(error));
};
