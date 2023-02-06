/* eslint-disable no-undef */
const {
  pathExists,
  absolutePath,
  fileExt,
  readFile,
  getLinks,
  getStatus,
} = require('../functions');

// el metodo process.cwd = current working directory
const tryPathAbsolute = `${process.cwd()}`;
// const tryPathTest = [`${tryPathAbsolute}\\test\\pruebaTest.md`];
// console.log('soy en console.log de tryPathTest', tryPathTest);

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
    expect(absolutePath('./README.md')).toEqual(`${tryPathAbsolute}/README.md`);
  });
  it('debe devolver la ruta si ya es absoluta', () => {
    absolutePath(`${tryPathAbsolute}/README.md`);
    expect(absolutePath(`${tryPathAbsolute}/README.md`)).toEqual(`${tryPathAbsolute}/README.md`);
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

// no pasa
describe('getLinks', () => {
  it('debe obtener los links del archivo .md', () => {
    getLinks('./pruebas/pruebaConLinks.md');
    const linksObt = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: `${tryPathAbsolute}/pruebas/pruebaConLinks.md`,
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: `${tryPathAbsolute}/pruebas/pruebaConLinks.md`,
      },
      {
        href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
        text: 'md-links',
        file: `${tryPathAbsolute}/pruebas/pruebaConLinks.md`,
      },
    ];
    expect(getLinks(`${tryPathAbsolute}/pruebas/pruebaConLinks.md`)).toEqual(linksObt);
  });
});

describe('getStatus', () => {
  it('debe verificar el estado de los links', () => {
    getStatus('https://nodejs.org/');
    expect(getStatus('https://nodejs.org/')).toEqual('https://nodejs.org/');
  });
});
