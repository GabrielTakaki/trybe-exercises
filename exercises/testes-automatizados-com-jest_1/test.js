function encode(str) {
  // seu código aqui
  let res = [];
  let a = 1;
  let e = 2;
  let i = 3;
  let o = 4;
  let u = 5;
  for (let index = 0; index < str.length; index+=1) {
    if ('a' === str[index]) {
      res += a;
    } else if ('e' === str[index]) {
      res += e;
    } else if ('i' === str[index]) {
      res += i;
    } else if ('o' === str[index]) {
      res += o;
    } else if ('u' === str[index]) {
      res += u;
    } else {
      res +=(str[index]);
    }
  }
  return res;
}

function decode(str) {
  // seu código aqui
  let res = [];
  let a = 'a';
  let e = 'e';
  let i = 'i';
  let o = 'o';
  let u = 'u';
  for (let index = 0; index < str.length; index+=1) {
    if ('1' === str[index]) {
      res += 'a';
    } else if ('2' === str[index]) {
      res += 'e';
    } else if ('3' === str[index]) {
      res += 'i';
    } else if ('4' === str[index]) {
      res += 'o';
    } else if ('5' === str[index]) {
      res += 'u';
    } else {
      res += str[index];
    }
  }
  return res;
}

const techList = (tech, name) => {
  if (tech.length === 0) return 'Vazio!';
  const techList = tech
  .sort()
  .map((techno) => ({
    tech: techno,
    name,
  }));
  return techList;
}

function hydrate(str) {
  // seu código aqui
  let sum = 0;
  let numbers = str.match(/\d+/g).map(Number);
  // https://stackoverflow.com/questions/53897373/js-how-to-got-the-sum-of-numbers-from-a-string
  for (let index = 0; index < numbers.length; index+=1) {
    sum += numbers[index];
  } if (sum === 1) {
    return (`${sum} copo de água`);
  }
  return (`${sum} copos de água`);
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
};