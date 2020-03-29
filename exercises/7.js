// Write a function that takes 2 numbers and return their greatest common denominator
// Greataest Common Denominator => Pembagi terbesar
// Contoh: 4 dan 2 => 4
// 12 dan 18 => 6

const solution = (num1, num2) => {
    let i = 0
    let output = 0
    do {
        if (num1 % i === 0 && num2 % i === 0) {
            output = i
        }
        i++
    }
    while (i <= num1);
    return output;
};

module.exports = {
    solution
};