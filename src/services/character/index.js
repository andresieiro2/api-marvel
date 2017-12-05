import { callService } from './../fetch';

const apiKey = "&apikey=65bc8897f5637376664aa3ae1274af7d";

export const getCharactersByName = (name) => {
  return callService(`characters?nameStartsWith=${name}${apiKey}`, 'GET')
   .then( json => json)
}


export const getCharacterComics = (id) => {
  return callService(`characters/${id}/comics`, 'GET')
   .then( json => json)
}
