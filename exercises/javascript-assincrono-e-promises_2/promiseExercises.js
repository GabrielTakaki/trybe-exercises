const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const arrRandom = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
    const arrSum = arrRandom.map((number) => number * number)
    .reduce((prev, curr) => prev + curr);
    arrSum > 8000 ? reject(arrSum) : resolve(arrSum);
  });

  promise
    .then(arrSum => [2, 3, 5, 10].map((number) => arrSum / number))
    .then(array => array.reduce((prev, curr) => prev + curr).toFixed(2))
    .then(array => console.log(array))
    .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
}

fetchPromise();