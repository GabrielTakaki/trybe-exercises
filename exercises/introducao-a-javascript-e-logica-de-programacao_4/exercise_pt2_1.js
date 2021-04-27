let palindrome;

function verificaPalindromo(str) {
    if(str == str.split('').reverse().join('')){
        palindrome = true;
    } else {
        palindrome = false;
    };
};

console.log(palindrome);
verificaPalindromo('arara');
