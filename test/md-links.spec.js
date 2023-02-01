/* eslint-disable no-undef */
const { mdLinks } = require('../index');

describe('mdLinks', () => {
  it('debe ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  // no pasa
  it('debe devolver una promesa', () => mdLinks()
    .then(() => {
      expect(mdLinks).toBe(typeof Promise);
    })
    .catch((error) => reject(error)));
  //
  it('debe rechazar la promesa si no encuentra un path', () => mdLinks('fake/path.md').catch((error) => {
    expect(error).toStrictEqual(new Error('La ruta no existe'));
  }));
  it('debe rechazar la promesa si el archivo no es de tipo .md', () => mdLinks('./functions.js').catch((error) => {
    expect(error).toStrictEqual(new Error('El archivo no es de tipo Mark Down'));
  }));
  it('debe rechazar la promesa si el archivo no contiene links', () => mdLinks('./pruebas/pruebaSinLinks.md').catch((error) => {
    expect(error).toStrictEqual(new Error('El archivo no contiene links'));
  }));
});
