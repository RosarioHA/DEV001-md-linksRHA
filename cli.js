const { mdLinks } = require('./index');

mdLinks('/fakepath/').then(() => {})
  .catch((error) => {
    console.log(error);
  });
