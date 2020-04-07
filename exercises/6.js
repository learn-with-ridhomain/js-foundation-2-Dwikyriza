// Write a function that takes a number and return the sum of all its divisor
// 1 or the number itself are excluded
const solution = (num, i = 2, output = 0) => {
    if (i >= num) return output
    if (num % i === 0) return solution(num, i + 1, output = output + i)
    if (num % i !== 0) return solution(num, i + 1, output = output + 0)
}

module.exports = {
    solution
  };