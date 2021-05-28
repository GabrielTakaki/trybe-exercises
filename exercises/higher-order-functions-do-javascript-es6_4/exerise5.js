const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  // AJUDA PARA REGEX: https://stackoverflow.com/questions/2903542/javascript-how-many-times-a-character-occurs-in-a-string/27277867#:~:text=Use%20a%20RegEx%20to%20count,(%2Fa%2Fgi).
  // Jeito que encontrei:
  const joinAll = names.join('').match(/a/gi).length;
  return joinAll;
}

// Jeito usando reduce:
// function containsA() {
//   return names.reduce((acc, curr) =>
//      acc + curr.split('').reduce((acumulator, current) => {
//         if (current === 'a' || current === 'A') return acumulator + 1;
//         return acumulator;
//      }, 0), 0);
// }


containsA();

assert.deepStrictEqual(containsA(), 20);