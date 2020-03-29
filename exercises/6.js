// Write a function that takes a number and return the sum of all its divisor
// 1 or the number itself are excluded

const solution = (num) => {
    let output = 0
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            output = output + i
         }
    }
    return output;
};

module.exports = {
    solution
};