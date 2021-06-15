// AJUDA EM:
// https://stackoverflow.com/questions/37443471/display-pyramid-in-javascript-in-the-below-format



let n =  5;
let linha = '';

for(let index = 0; index < n; index +=1) {
    linha = '';
    for(let espaco = 1; espaco < n-index; espaco +=1) {
        linha = linha + ' ';
    }
    for(let asterisco = 1; asterisco < (2*index-2); asterisco +=1) {
        linha += '*'
    }

    console.log(linha);
}