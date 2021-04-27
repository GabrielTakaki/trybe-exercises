// let nomes= ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function longestName(arr) {
//   let maior = arr[0];
//   for (index = 0; index < arr.length; index++) {
//     if (arr[index].length > maior.length) {
//       maior = arr[index];
//     }
//   }
//   return maior;
// }


// console.log(longestName(nomes));



let nomes = ['José', 'Rogerinho', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let letras = 0;

function maiorNome(array) {
    let maior = array[0];
    for(let index = 0; index < array.length; index +=1) {
        if(array[index].length > maior.length) {
            maior = array[index];
        }
    }
    return maior;
}

console.log(maiorNome(nomes));

