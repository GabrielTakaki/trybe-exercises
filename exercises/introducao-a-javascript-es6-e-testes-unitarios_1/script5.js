const lookForX  = str => {
  const res = str.replace(/x/i, 'Bebeto');
  return res;
}

console.log(lookForX('Tryber x aqui!'));

// AJUDA EM: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace