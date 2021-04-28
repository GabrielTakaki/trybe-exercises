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


// let numbers = [2, 3, 6, 7, 10, 1];

// function higherNum(array) {
//     let indice = 0;
//     let num = array[0];
//     for(let index = 0; index < array.length; index +=1) {
//         if(array[index] > num) {
//             array[index] = num;
//             indice = index;
//         }
//     }
//     return indice;
// }

// console.log(higherNum(numbers));



// let numbers2 =  [2, 4, 6, 7, 10, 0, -3];

// function smallestNum(arr) {
//     let small = arr[0];
//     ind = 0;
//     for(let index2 = 0; index2 < arr.length; index2 +=1) {
//         if(arr[index2] < small) {
//             small = arr[index2];
//             ind = index2;
//         }
//     }
//     return ind;
// }

// console.log(smallestNum(numbers2))