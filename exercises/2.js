/*
Buat sebuah fungsi yang mempunyai input number dan mereturn true jika angka tersebut adalah angka prima
*/

const solution = (num, i = 2) => {
    if (i >= num) return true
    if (num % i === 0) return false
    if (num <=2) return true
    return solution (num, i + 1)
}

module.exports = {
    solution
  };