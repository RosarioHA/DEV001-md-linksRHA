/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Function that analyses if the path exists.
// .existsSync is a boolean that returns true if the path exists, and false if it does not.
const pathExists = (route) => fs.existsSync(route);

// Function that checks if the path is absolute; if not, it transforms it into one.
// .isAbsolute checks if the path is absolute; .resolve transforms it into one if it's not.
// Ternary operator condition ? true : false
const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// Function that checks if the file is .md type.
// .extname returns the file extension.
const fileExt = (pathAbsolute) => {
  const filePath = path.extname(pathAbsolute);
  if (filePath === '.md') {
    return true;
  } return false;
};

// Function thar reads the .md files.
// fs.readFile reads the file content.
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

// Function that get the links of the .md file.
// .exec indicates that linksURL is a regular expression.
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

// Function that verifies the links status.
// axios is the npm package that allows requests or content calls to be made to an HTTP link.
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
