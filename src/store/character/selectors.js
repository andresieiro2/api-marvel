export const getActualCharacter = state => state.character.actual;

export const getCharactersList = state => state.character.list.results;

export const getCharactersListMeta = state => ({
  count: state.character.list.count,
  limit: state.character.list.limit,
  offset: state.character.list.offset,
  total: state.character.list.total,
});

export const getActualComics = state => state.character.getActualComics;
