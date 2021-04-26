// let n = 5;
// let linhas = '';

// for(let index = 1; index <= n; index +=1){
//     for(let space = 0; space < n - index; space += 1) {
//         linhas += ' ';
//     }
//     for(let star = 0; star < index; star +=1) {
//         linhas += '*';
//     }
//     linhas += '\n';
// } 

// console.log(linhas);




let n = 5;
let asterisco = '*';
let linhas = '';
let posicaoAsterisco = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < posicaoAsterisco) {
      linhas = linhas +  ' ';
    } else {
      linhas += asterisco;
    }
  }
  console.log(linhas);
  linhas = '';
  posicaoAsterisco-= 1;
};