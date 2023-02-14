/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// función que analiza si existe el path
// .existsSync es un booleano que retorna true si el path existe, y false si es que no.
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
// .exec indica que linksURL es una expresión regular
const getLinks = (mdPath) => new Promise((resolve, reject) => {
  const linksArr = [];
  readFile(mdPath)
    .then((file) => {
      const linksURL = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
      let search = linksURL.exec(file);
      while (search !== null) {
        linksArr.push({
          href: search[2],
          text: search[1],
          file: mdPath,
        });
        search = linksURL.exec(file);
      }
      resolve(linksArr);
    })
    .catch((error) => reject(error));
});

// función que verifica el status de los links
// axios es el paquete de npm que permite hacer llamadas de contenido o peticiones a un enlace HTTP
const getStatus = (urls) => Promise.all(urls.map((link) => axios.get(link.href)
  .then((response) => ({ ...link, status: response.status, message: 'ok' }))
  .catch((error) => ({ ...link, status: error.response.status, message: 'fail' }))));

module.exports = {
  pathExists,
  absolutePath,
  fileExt,
  readFile,
  getLinks,
  getStatus,
};
