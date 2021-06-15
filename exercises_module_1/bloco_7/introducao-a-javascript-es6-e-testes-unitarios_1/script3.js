const longestWord = (str) => {
  let strings = str.split(' ');
  let longest = 0;
  let palavra = '';
  for (const stri of strings) {
    if (stri.length > longest) {
      longest = stri.length;
      palavra = stri;
    }
  }
  return palavra;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));