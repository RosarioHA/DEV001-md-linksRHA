const fs = require('fs');

const mdLinks = (path, options) => {
  return new Promise ((resolve, reject) => {
    // identificar si existe una ruta.
    if (fs.existsSync(path)){
    // chequear si es una ruta absoluta. Si no, convertirla en una.
    } else {
      // si no existe una ruta, se rechaza la promesa.
      reject('ésta ruta no existe');
    };
  });
};

module.exports = {
  mdLinks,
};
