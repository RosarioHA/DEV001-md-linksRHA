const fs = require('fs');

// función que analiza si existe el path
const pathExists = (path) => {
  fs.existsSync(path);
};

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // identificar si existe una ruta.
  if (pathExists(path)) { // si no, lleva al mensaje de error, si sí, entra al if
    resolve('la ruta existe');
    // función toAbsolute que analiza si es absoluta o relativa, convierte a absoluta
    // función fileOrDoc revisa si es archivo o directorio. Si es archivo entra al if, si no va a error
    // función fileType ve si es un archivo .md. Si sí entra al if y si no va a error.
    // función pathsArray que retorna un array de archivos .md
      //if (){ //el array tiene contenido (pathsArray.lenght), entra al if. Si no va a error.
        // recorrer los archivos con pathsArray.forEach y ver si son válidos

      }
  } else {
    // si no existe una ruta, se rechaza la promesa.
    reject('ésta ruta no existe');
  }
);

module.exports = {
  mdLinks,
};

