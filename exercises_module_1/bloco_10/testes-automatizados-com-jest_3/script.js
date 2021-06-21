const randomNum = () => {
  const random = Math.ceil(Math.random() * 100);
  return random;
}

const capsLk = (str) => {
  return str.toUpperCase();
}

const returnFirst = (str) => {
  return str.split('')[0];
}

const concatTwo = (str1, str2) => {
  return str1.concat(str2);
}

module.exports = {
  randomNum,
  capsLk,
  returnFirst,
  concatTwo,
}