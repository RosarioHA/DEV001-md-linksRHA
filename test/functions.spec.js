/* eslint-disable no-undef */
const {
  pathExists,
  absolutePath,
  fileExt,
  readFile,
  getLinks,
} = require('../functions');

describe('pathExists', () => {
  it('debe retornar true si existe el archivo', () => {
    pathExists('./package.json');
    expect(pathExists('./package.json')).toEqual(true);
  });
  it('debe retornar false si no existe el archivo', () => {
    pathExists('./fakefile.json');
    expect(pathExists('./fakefile.json')).toEqual(false);
  });
});

describe('absolutePath', () => {
  it('debe cambiar la ruta a absoluta si es relativa', () => {
    absolutePath('./README.md');
    expect(absolutePath('./README.md')).toEqual('/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/README.md');
  });
  it('debe devolver la ruta si ya es absoluta', () => {
    absolutePath('/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/README.md');
    expect(absolutePath('/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/README.md')).toEqual('/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/README.md');
  });
});

describe('fileExt', () => {
  it('debe retornar true si el archivo es de tipo .md', () => {
    fileExt('./README.md');
    expect(fileExt('./README.md')).toEqual(true);
  });
  it('debe retornar false si el archivo no es de tipo .md', () => {
    fileExt('./package.json');
    expect(fileExt('./package.json')).toEqual(false);
  });
});

// no pasa
describe('readFile', () => {
  it('debe leer el contenido del archivo .md', () => {
    readFile('./pruebas/pruebaSinLinks.md');
    expect(readFile('./pruebas/pruebaSinLinks.md')).toEqual('content');
  });
});

describe('getLinks', () => {
  it('debe obtener los links del archivo .md', () => {
    getLinks('./pruebas/pruebaConLinks.md');
    const linksObt = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: '/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/pruebas/pruebaConLinks.md',
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: '/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/pruebas/pruebaConLinks.md',
      },
      {
        href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
        text: 'md-links',
        file: '/Users/rosario/Documents/GitHub/DEV001-md-linksRHA/pruebas/pruebaConLinks.md',
      },
    ];
    expect(getLinks('./pruebas/pruebaConLinks.md')).toEqual(linksObt);
  });
});
