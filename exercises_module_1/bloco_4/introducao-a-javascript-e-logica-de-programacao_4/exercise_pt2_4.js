// ONE WAY TO DO IT

// let nomes = ['José', 'Rogerinho', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// let letras = 0;

// function maiorNome(array) {
//     let maior = array[0];
//     for(let index = 0; index < array.length; index +=1) {
//         if(array[index].length > maior.length) {
//             maior = array[index];
//         }
//     }
//     return maior;
// }

// console.log(maiorNome(nomes));





// ANOTHER WAY TO DO IT

// let nomes = ['José', 'Rogerinho', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorPalavra(array) {
//     let maiorPalavra = array[0];
//     for(let key in array) {
//         if(maiorPalavra.length < array[key].length) {
//             maiorPalavra = array[key];
//         }
//     }
//     return maiorPalavra
// }

// console.log(maiorPalavra(nomes))