// FUNÇAO 1

const lookForX  = str => {
  const res = str.replace(/x/i, 'Bebeto');
  return res;
}

console.log(lookForX('Trybe x aqui!'));

// AJUDA EM: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace


// FUNÇAO 2

const arr = ['Javascript', 'HTML', 'CSS', 'Git', 'React'];

const alphabeticalOrder = (lookForX, arr) => {
  let arrSort = arr.sort().join();
  const both = `${lookForX} ${arrSort}`
  return both;
}

console.log(alphabeticalOrder(lookForX, arr));