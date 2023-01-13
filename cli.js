const { mdLinks } = require('./index.js');

mdLinks('/fakepath/').then(() => {})
  .catch((error) => {
    console.log(error);
  });
