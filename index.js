/* eslint-disable prefer-promise-reject-errors */
const {
  pathExists,
  absolutePath,
  fileExt,
  getLinks,
  getStatus,
} = require('./functions');

const mdLinks = (path /* options */) => new Promise((resolve, reject) => {
  // Does the path exists?
  if (!pathExists(path)) {
    // The path doesn't exist, reject promise
    reject(new Error('The path does not exist'));
  } else {
    // The path exists, it is absolute or relative?
    const pathAbsolute = absolutePath(path);
    // Is it a Mark Down type file?
    if (!fileExt(pathAbsolute)) {
      reject(new Error('This is not a Mark Down file'));
    } else {
      // Does the file contain links?
      // Read file and get links
      getLinks(pathAbsolute).then((arr) => {
        if (arr.length === '0') {
          reject(new Error('The file does not content links'));
          /* } else if (options === { validate: true }) {
          resolve(arr);
         */ } else {
          // get those link's status
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
