function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
// AJUDA EM: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
oddsAndEvens.sort((a, b) => {
  return a- b;
});

console.log(oddsAndEvens);