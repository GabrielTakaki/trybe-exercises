// const { expect } = require('@jest/globals');
// const { it } = require('jest-circus');
const { expect, it } = require('@jest/globals');
// const { describe } = require('yargs');
const { uppercase, findUserById, getUserName } = require('./script');


// EX1:
describe('verifica se transforma em letra maiuscula', done => {
  it('parametro para maiusculo', () => {
    uppercase('oi', (result) => {
      expect(result).toBe('OI');
      // done();
    });
  });
});


// EX2:
describe('Verificando resultado da funçao', () => {
  it('ve se o usauario e existente', () => {
    expect.assertions(1);
    return getUserName(4).then(users => {
      expect(users).toBe('Mark')
    })
  })
})