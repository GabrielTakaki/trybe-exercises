// const { expect } = require('@jest/globals');
// const { it } = require('jest-circus');
const { expect, it, test } = require('@jest/globals');
const { reject } = require('lodash');
const { describe } = require('yargs');
// const { describe } = require('yargs');
const { uppercase, getUserName, getRepos, getAnimal } = require('./script');


// EX1:
// describe('verifica se transforma em letra maiuscula', done => {
//   it('parametro para maiusculo', () => {
//     uppercase('oi', (result) => {
//       expect(result).toBe('OI');
//       // done();
//     });
//   });
// });


// // EX2:
// describe('Verificando resultado da funçao', () => {
//   it('ve se o usauario e existente', () => {
//     expect.assertions(1);
//     return getUserName(4).then(users => {
//       expect(users).toBe('Mark');
//     })
//   })
// })


// // EX3:
// test('com async/await', async () => {
//   try {
//     await getUserName(5);
//   } catch (e) {
//     expect(e).toEqual(reject)
//   }
// })


// EX4:
// it('procura repositorio todo-list', () => {
//   const url = 'https://api.github.com/orgs/tryber/repos';
//   return getRepos(url).then(repos => {
//     expect(repos).toContain('sd-01-week4-5-project-todo-list');
//     expect(repos).toContain('sd-01-week4-5-project-meme-generator');
//   })
// })


// // EX5:
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach


// EX6.2:
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});