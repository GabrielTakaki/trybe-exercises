const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyResp = (rightRes, stuRes, res) => {
  let counter = 0;
  for (let index = 0; index < rightRes.length; index += 1) {
    const resReturn = res(rightRes[index], stuRes[index]);
    counter += resReturn
  }
  return `Resultado final: ${counter}`;
}

console.log(verifyResp(rightAnswers, studentAnswers, (right, uAnsewer) => {
  if (right === uAnsewer) {
    return 1;
  } if (uAnsewer === 'N.A') {
    return 0;
  }
  return -0.5;
}));