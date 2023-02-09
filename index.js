/* eslint-disable prefer-promise-reject-errors */
const {
  pathExists,
  absolutePath,
  fileExt,
  getLinks,
  getStatus,
} = require('./functions');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Existe la ruta?
  if (!pathExists(path)) {
    // No existe la ruta, rechaza la promesa
    reject(new Error('La ruta no existe'));
  } else {
    // La ruta existe. Es absoluta o relativa?
    console.log('la ruta sí existe');
    const pathAbsolute = absolutePath(path);
    // Es un archivo de tipo .md?
    if (!fileExt(pathAbsolute)) {
      reject(new Error('El archivo no es de tipo Mark Down'));
    } else {
      // El archivo contiene links?
      // hola
      console.log('el archivo es de tipo .md');
      // leer el archivo.
      getLinks(pathAbsolute).then((arr) => {
        if (arr.length === '0') {
          reject(new Error('El archivo no contiene links'));
        } else if (options === { validate: false }) {
          resolve(arr);
        } else {
          console.log('el archivo contiene los siguientes links');
          getStatus(arr).then((res) => {
            resolve(res);
          });
        }
      });
    }
  }
});

module.exports = {
  mdLinks,
};
