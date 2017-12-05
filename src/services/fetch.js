import * as config from './../../config/application.config';

export const callService = (url, method, params) => {
  const configHeaders = {
   method: method,
   headers: {
     'Content-Type': 'application/json',
      Accept: 'application/json',
   },
  };

  method === 'POST' ? configHeaders.body = JSON.stringify(params) : null ;

  return new Promise( (resolve, reject) => {
    return fetch( config.endpoint + url, configHeaders )
     .then(response => resolve(response.json()))
     .catch(message => reject(message) );
  });
}
