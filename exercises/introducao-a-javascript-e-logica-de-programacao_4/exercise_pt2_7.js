// function confirmEnding(string, target) {
//     if (string.substr(-target.length) === target) {
//         return true;
//     } else {
//         return false;
//     };
// };
// console.log(confirmEnding('Bastian', 'an'));



function verificarFimDaPalavra(palavra, fimPalavra) {

    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;

    for (let index = 0; index < fimPalavra.length; index += 1) {
         if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}

console.log(verificarFimDaPalavra('trybe', 'be'))