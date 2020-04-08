// Write a function that takes 2 numbers and return their greatest common denominator
// Greataest Common Denominator => Pembagi terbesar
// Contoh: 4 dan 2 => 4
// 12 dan 18 => 6
const solution = (num1, num2, i = 0, output = 0) => {
    if (i === num1) return output
    if (num1 % i === 0 && num2 % i === 0) return solution(num1, num2, i + 1, output = i)
    // if (num1 === 1 || num2 === 1) return solution(num1, num2, i + 1, output = 1) 
    return solution(num1, num2, i + 1, output)
}

module.exports = {
    solution
  };