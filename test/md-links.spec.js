/* eslint-disable no-undef */
const { mdLinks } = require('../index');

describe('mdLinks', () => {
  // it('debería devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
  it('debe rechazar la promesa si no encuentra un path', () => mdLinks('fake/path.md').catch((error) => {
    expect(error).toBe(new Error('la ruta no existe'));
  }));
});
