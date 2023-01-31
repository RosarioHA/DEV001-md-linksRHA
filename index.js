/* eslint-disable prefer-promise-reject-errors */
const {
  pathExists,
  absolutePath,
  fileExt,
  readFile,
  getLinks,
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
      console.log('el archivo es de tipo .md');
      // leer el archivo.
      const arr = getLinks(pathAbsolute).then;
      console.log(arr);
      if (arr.length === '0') {
        reject(new Error('El archivo no contiene links'));
      } else {
        const result = getLinks(pathAbsolute);
        resolve(result);
      }
    }
  }
});

console.log(pathExists('./fakefile.json')); // false
console.log(absolutePath('./package.json')); // /Users/rosario/Documents/GitHub/DEV001-md-linksRHA/package.json
console.log(fileExt('./README.md')); // true
console.log(readFile('./README.md')); // promise pending
console.log(getLinks('/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/README.md')); // promise pending

module.exports = {
  mdLinks,
};
