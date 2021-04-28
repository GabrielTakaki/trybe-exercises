// let palindrome;

// function verificaPalindromo(str) {
//     if(str == str.split('').reverse().join('')){
//         palindrome = true;
//     } else {
//         palindrome = false;
//     };
// };

// console.log(palindrome);
// verificaPalindromo('arara');



let palindrome; 

function isPalindrome(str) {
    if(str === str.split('').reverse().join('')) {
        palindrome = true;
    } else {
        palindrome = false;
    }
    return palindrome;
}

console.log(isPalindrome('kak'))



// let palindrome;

// function verificaPalindromo(str) {
    
// }