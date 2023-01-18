const fs = require('fs');
const path = require('path');

// función que analiza si existe el path
const pathExists = (route) => {
  fs.existsSync(route);
};

// función que revisa si la ruta es absoluta, si no, la transforma a una.
// .isAbsolute ve si es absoluta; .resolve la transforma de no serlo.
const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

module.exports = {
  pathExists,
  absolutePath,
};
