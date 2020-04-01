/*
Buat sebuah fungsi yang mempunyai input 2 parameter, berupa string dan number
 yang akan me-return sebuah string  hasil kelipatan input string x input number
Parameter: 1 number, 1 string.
Output: 1 string
Contoh: solution(2, "abc") hasilnya menjadi "abcabc"
*/

const solution = (num, str, output = "") => {
    if (num === 0) return output
    return solution(num - 1 , str, output = output + str)
}

console.log(solution(3, "berak"))

module.exports = {
    solution
  };