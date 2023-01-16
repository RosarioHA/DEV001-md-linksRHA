const fs = require('fs');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // identificar si existe una ruta.
  if (fs.existsSync(path)) {
    resolve('la ruta existe');
  } else {
    // si no existe una ruta, se rechaza la promesa.
    reject('ésta ruta no existe');
  }
});

module.exports = {
  mdLinks,
};

// chequear si es una ruta absoluta. Si no, CONVERTIRLA EN UNA.
// chequear si es un archivo o directorio.
// chequear si es un archivo .md: ver funcion de node para verificar extención y compararla con .md
// chequear si el archivo contiene links
// OBTENER LINKS
// son links válidos?
// GENERAR INFORME
