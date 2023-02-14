/* eslint-disable no-console */
const { mdLinks } = require('./index');

mdLinks('./pruebas/pruebaConLinks.md')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// ruta .md con links './pruebas/pruebaConLinks.md'
// ruta .md sin links './pruebas/pruebaSinLinks.md'
// ruta archivo no .md './package.json'
