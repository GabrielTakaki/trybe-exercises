let array = [2, 3, 6, 7, 10, 1];

function retornaIndiceMaiorValor() {
    let maior = array[0];
    let indice = 0;
    for (let index = 1; index < array.length; index+=1) {
        if (array[index] > maior) {
            maior = array[index];
            indice = index;
        }
    }
    return indice;
}

console.log(retornaIndiceMaiorValor(array));

// AJUDA EM: 
// https://pt.stackoverflow.com/questions/436409/retornar-o-%C3%ADndice-do-maior-elemento-de-um-array