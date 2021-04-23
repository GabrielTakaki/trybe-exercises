// Link de ajda
// https://stackoverflow.com/questions/26896487/loop-through-array-returns-odd-and-even-numbers

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odds = [];
let evens = [];
let result = 0;

for (let i = 0; i < numbers.length; i+=1) {

    if ((numbers[i] % 2) != 0) {
        result += 1;
        odds.push(numbers[i]);
            console.log(odds, result);
    }
    else {
        console.log('Nenhum valor ímpar encontrado')
    }
}


//Resposta do gabarito

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

