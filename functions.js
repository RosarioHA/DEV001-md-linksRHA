const fs = require('fs');
const path = require('path');

// función que analiza si existe el path
const pathExists = (route) => fs.existsSync(route);

// función que revisa si la ruta es absoluta, si no, la transforma a una.
// .isAbsolute ve si es absoluta; .resolve la transforma de no serlo.
const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// función que revisa si el archivo es de tipo .md
// .extname devuelve la extención del archivo.
const fileExt = (pathAbsolute) => {
  const filePath = path.extname(pathAbsolute);
  if (filePath === '.md') {
    return true;
  }
  return false;
};

// función que lee los archivos .md
// .readFile lee el contenido del archivo
// eslint-disable-next-line consistent-return
const readFile = (mdPaths) => {
  if (mdPaths === true) {
    return fs.readFile(mdPaths, 'utf-8');
  }
};

module.exports = {
  pathExists,
  absolutePath,
  fileExt,
  readFile,
};
