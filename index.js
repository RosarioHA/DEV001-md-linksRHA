/* eslint-disable prefer-promise-reject-errors */
const {
  pathExists,
  absolutePath,
  fileExt,
  readFile,
} = require('./functions');

const mdLinks = (path) => new Promise((resolve, reject) => {
  // EXISTE LA RUTA?
  if (!pathExists(path)) {
    // No existe la ruta, rechaza la promesa
    reject(new Error('la ruta no existe'));
  } else {
    // La ruta existe. ES ABSOLUTA O RELATIVA?
    console.log('la ruta sí existe');
    const pathAbsolute = absolutePath(path);
    // ES UN ARCHIVO .MD?
    if (!fileExt(pathAbsolute)) {
      reject(new Error('el archivo no es de tipo .md'));
    } else {
      // EL ARCHIVO CONTIENE LINKS?
      console.log('el archivo es de tipo .md');
      // leer el archivo.
      readFile(pathAbsolute);
    }
  }
});

console.log(readFile('./README.md')); // promise pending
console.log(fileExt('./README.md')); // true
console.log(pathExists('./fakefile.json')); // false
console.log(absolutePath('./package.json')); // /Users/rosario/Documents/GitHub/DEV001-md-linksRHA/package.json

// const mdLinks = (path, options) => new Promise((resolve, reject) => {
//   // identificar si existe una ruta.
//   if (pathExists(path)) { // si no, lleva al mensaje de error, si sí, entra al if
//     resolve('la ruta existe');
//     // función toAbsolute que analiza si es absoluta o relativa, convierte a absoluta
//     // función fileOrDoc revisa si es archivo o directorio. Si sí entra al if, si no va a error
//     // función fileExt ve si es un archivo .md. Si sí entra al if y si no va a error.
//     // función pathsArray que retorna un array de archivos .md
//     // if (){ //el array tiene contenido (pathsArray.lenght), entra al if. Si no va a error.
//     // recorrer los archivos10 con pathsArray.forEach y ver si son válidos
//   } else {
//     // si no existe una ruta, se rechaza la promesa.
//     reject(new Error('la ruta no existe'));
//   }
// });

module.exports = {
  mdLinks,
};
