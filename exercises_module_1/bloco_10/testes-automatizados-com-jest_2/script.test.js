// const { expect } = require('@jest/globals');
// const { it } = require('jest-circus');
const { expect } = require('@jest/globals');
const { uppercase } = require('./script');


// EX1:
describe('verifica se transforma em letra maiuscula', done => {
  it('parametro para maiusculo', () => {
    uppercase('oi', (result) => {
      expect(result).toBe('OI');
      // done();
    });
  });
});