/* eslint-disable no-undef */
const { mdLinks } = require('../index');

describe('mdLinks', () => {
  it('debería devolver una promesa', () => {
    expect(mdLinks('./README.md')).toBe(typeof Promise);
  });
  it('debe rechazar la promesa si no encuentra un path', () => mdLinks('fake/path.md').catch((error) => {
    expect(error).toStrictEqual(new Error('la ruta no existe'));
  }));
  it('debe rechazar la promesa si el archivo no es de tipo .md', () => mdLinks('./functions.js').catch((error) => {
    expect(error).toStrictEqual(new Error('el archivo no es de tipo .md'));
  }));
});
