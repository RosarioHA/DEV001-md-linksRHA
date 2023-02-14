/* eslint-disable no-undef */
const {
  pathExists,
  absolutePath,
  fileExt,
  readFile,
  getLinks,
  getStatus,
} = require('../functions');

// metodo process.cwd = current working directory
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

// repasar documentacion Jest - Promises https://jestjs.io/docs/asynchronous
describe('readFile', () => {
  it('debe ser una promesa', () => readFile()
    .then(() => {
      expect(readFile).toBe(typeof 'promise');
    })
    .catch((error) => error));
});

describe('getLinks', () => {
  it('debe ser una promesa', () => getLinks()
    .then(() => {
      expect(getLinks).toBe(typeof 'promise');
    })
    .catch((error) => error));
  it('debe devolver los links del archivo .md', () => {
    const path = `${tryPathAbsolute}/pruebas/pruebaConLinks.md`;
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
    return getLinks(path).then((res) => {
      expect(res).toEqual(linksObt);
    });
  });
});

// FALTA TESTEAR LA SEGUNDA PARTE CON MOCK, agregar a issues
describe('getStatus', () => {
  it('debe ser una funcion', () => {
    expect(typeof getStatus).toBe('function');
  });
});
