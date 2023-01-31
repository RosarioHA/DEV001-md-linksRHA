const { mdLinks } = require('./index');

mdLinks('/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/pruebas/pruebaSinLinks.md')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// ruta .md con links './pruebas/pruebaConLinks.md'
// ruta .md sin links './pruebas/pruebaSinLinks.md'
// ruta archivo no .md './package.json'
