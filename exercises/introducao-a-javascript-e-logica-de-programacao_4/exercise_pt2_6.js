function soma(num) {
    let total = 0;
    for(let index = 0; index <= num; index += 1) {
        total += index;
    }
    return total;
}

console.log(soma(5))