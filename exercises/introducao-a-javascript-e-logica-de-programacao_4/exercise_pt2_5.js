// MOSTRA O NÚMERO COM MAIS REPETIÇÕES

// let numbers = [2, 3, 2, 5, 8, 2, 3];

// function numbersRep(arr) {
//     let countRep = 0;
//     let conutNum = 0;
//     let indexNumRep = 0;
//     for(let index in arr) {
//         let verifyNum = arr[index];
//         for(let index2 in arr) {
//             if(verifyNum === arr[index2]) {
//                 conutNum += 1;
//             }
//         }
//         if(conutNum > countRep) {
//             countRep = conutNum;
//             indexNumRep = index;
//         }
//         conutNum = 0;
//     }
//     return arr[indexNumRep];
// }

// console.log(numbersRep(numbers))


let numbers = [2, 3, 2, 5, 8, 2, 3];

function numbersRep(array){

    if(array.length === 0){
        return null;
    };   

    let modeMap = 0;
    let maxEl = array[0], maxCount = 1;

    for(let index = 0; index < array.length; index+=1){
        let el = array[index];

        if(modeMap[el] === null){
            modeMap[el] = 1;
        } else
            modeMap[el]+=1;

        if(modeMap[el] > maxCount){
            maxEl = el;
            maxCount = modeMap[el];
        };
    };
    return maxEl;
};

console.log(numbersRep(numbers));

// AJUDA EM:
// https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array




// MOSTRA QUANTAS VEZES O "2" APARECE

// let numbers1 = [2, 3, 2, 5, 8, 2, 3];

// function numbersRep(arr, repCount) {
//     let rep = 0;
//     arr.forEach(element => {
//         if(element === repCount) {
//             rep++
//         };
//     });
//     return rep;
// };

// console.log(numbersRep(numbers1, 2));