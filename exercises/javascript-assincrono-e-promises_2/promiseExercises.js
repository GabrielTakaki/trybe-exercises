const promisse = new Promise((resolve, reject) => {
  const arrRandom = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
  const arrSum = arrRandom.reduce((prev, curr) => prev + curr);
  if (arrSum > 8000) {
    return reject(arrSum);
  }
  resolve(arrSum)
})
.then(arrSum => `Sucesso, Promisse resolvida com sucesso! soma: ${arrSum}`)
.then(msg => console.log(msg))
.catch(arrSum => console.log(`Promisse rejeitada. ${arrSum}`))