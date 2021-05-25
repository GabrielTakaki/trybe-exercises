const numVerify = (myNum, num) => myNum === num;

const randomNum = (myNum, callback) => {
  const random = Math.floor((Math.random() * 5) + 1);
  return callback(myNum, random) ? 'Parabens voce ganhou!!' : "Tente novamente!";
}

console.log(randomNum(2, numVerify));