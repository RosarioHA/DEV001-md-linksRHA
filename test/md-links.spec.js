const { mdLinks } = require('../index.js');

describe('mdLinks', () => {
  // it('debería devolver una promesa', () => {
  // expect(mdLinks()).toBe(typeof Promise);
  // });
  it('debe rechazar la promesa si no encuentra un path', () => {
    return mdLinks('fake/path.md').catch((error) => {
expect(error).toBe('ésta ruta no existe');
    });
    });
});
