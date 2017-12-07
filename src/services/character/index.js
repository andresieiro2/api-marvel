import { callService } from './../fetch';

const apiKey = "&apikey=65bc8897f5637376664aa3ae1274af7d";
const limit = 20;
export const getCharactersByName = (name, offset = 0 ) => {

  if(offset > 0){
    offset = limit * offset;
  }

  return callService(`characters?nameStartsWith=${name}&offset=${offset}&${apiKey}`, 'GET')
   .then( json => json)
}


export const getCharacterComics = (idCharacter, offset = 0 ) => {
  if(offset > 0){
    offset = limit * offset;
  }
  return callService(`characters/${idCharacter}/comics?offset=${offset}&${apiKey}`, 'GET')
   .then( json => json)
}
