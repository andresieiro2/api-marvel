const env = process.env.NODE_ENV || 'development';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const config = {
  development: {
    path: '/',
    baseUrl: `http://${host}:${port}`,
    endpoint: 'https://gateway.marvel.com/v1/public/'
  },
  production: {
    path: '/',
    baseUrl: '',
    endpoint: 'https://gateway.marvel.com/v1/public/'
  },
};

module.exports = config[env];
