const sumArrayNums = () => {
  const arrRandom = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50));
  const arrSum = arrRandom.map((number) => number * number)
  .reduce((prev, curr) => prev + curr);

  if (arrSum > 8000) {
    throw new Error()
  }

  return arrSum;

}
const sumFromDiv = arrSum => [2, 3, 5, 10].map((number) => arrSum / number)
  .reduce((prev, curr) => prev + curr).toFixed(2);

const fetchPromisse = async () => {
  try {
    const sum = await sumArrayNums();
    const sumFromSum = await sumFromDiv(sum);
    console.log(sumFromSum)
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromisse();