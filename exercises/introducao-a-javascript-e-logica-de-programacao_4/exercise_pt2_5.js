// MOSTRA O NÚMERO COM MAIS REPETIÇÕES

let numbers = [2, 3, 2, 5, 8, 2, 3];

function numbersRep(arr) {
    let countRep = 0;
    let conutNum = 0;
    let indexNumRep = 0;
    for(let index in arr) {
        let verifyNum = arr[index];
        for(let index2 in arr) {
            if(verifyNum === arr[index2]) {
                conutNum += 1;
            }
        }
        if(conutNum > countRep) {
            countRep = conutNum;
            indexNumRep = index;
        }
        conutNum = 0;
    }
    return countRep;
}

console.log(numbersRep(numbers))

// Desafio 11
function generatePhoneNumber(array) {
    // seu código aqui
    // AJUDA EM: https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/ & https://www.w3resource.com/javascript/form/all-numbers.php
    let allowedNums = /^[0-9]+$/;
    let phoneNum = `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`;
    for (let index = 0; index < array.length; index +=1) {
  
      if (array.length > 11) {
        phoneNum = 'Array com tamanho incorreto.';
      } else if (array[index] < allowedNums || array[index] > allowedNums) {
        phoneNum = 'não é possível gerar um número de telefone com esses valores';
      } else if (k) {
  
      } else {
        return phoneNum;
      }
    }
    return phoneNum;
  }
  console.log(generatePhoneNumber([1, 3, 3, 3, 3, 6, 7, 8, 9, 0, 1]));


let numbers = [2, 3, 2, 5, 8, 2, 3];

function numbersRep(array){
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

let numbers1 = [2, 3, 2, 5, 8, 2, 3];

function numbersRep(arr, repCount) {
    let rep = 0;
    arr.forEach(element => {
        if(element === repCount) {
            rep++
        };
    });
    return rep;
};

console.log(numbersRep(numbers1, 2));

