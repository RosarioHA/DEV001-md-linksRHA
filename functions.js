const fs = require('fs');
const path = require('path');

// función que analiza si existe el path
// .existsSync
const pathExists = (route) => fs.existsSync(route);

// función que revisa si la ruta es absoluta, si no, la transforma a una.
// .isAbsolute ve si es absoluta; .resolve la transforma de no serlo.
// Operador ternario condition ? true : false
const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// función que revisa si el archivo es de tipo .md
// .extname devuelve la extención del archivo.
const fileExt = (pathAbsolute) => {
  const filePath = path.extname(pathAbsolute);
  if (filePath === '.md') {
    return true;
  } return false;
};

// función que lee los archivos .md
// fs.readFile lee el contenido del archivo
// eslint-disable-next-line consistent-return
const readFile = (mdPath) => new Promise((resolve, reject) => {
  fs.readFile(mdPath, 'utf-8', (error, file) => {
    if (error) {
      reject(error);
    } else {
      resolve(file);
    }
  });
});

// función que obtiene los links del archivo .md
const getLinks = (mdPath) => new Promise((resolve, reject) => {
  const links = [];
  readFile(mdPath)
    .then((file) => {
      const linksURL = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
      let match = linksURL.exec(file);
      while (match !== null) {
        links.push({
          href: match[2],
          text: match[1],
          file: mdPath,
        });
        match = linksURL.exec(file);
      }
      resolve(links);
    })
    .catch((error) => reject(error));
});

module.exports = {
  pathExists,
  absolutePath,
  fileExt,
  readFile,
  getLinks,
};
