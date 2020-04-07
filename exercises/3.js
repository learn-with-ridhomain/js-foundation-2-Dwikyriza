/*
Buat sebuah fungsi yang mempunyai input 2 parameter, berupa kata(>1 string) dan huruf (1 string) 
 yang akan me-return true jika huruf (parameter kedua) ada di kata (parameter 1)
Parameter: 2 string
Output: boolean
Contoh: solution("abc", "a") hasilnya menjadi true
*/
const solution = (str1, str2, i = 0) => {
    if (i >= str1.length) return false
    if (str2.includes(str1[i].toLowerCase())) return true
    return solution(str1, str2, i + 1)
}

// const solution = (str1, str2) => {
//     let lowercase = str1.toLowerCase()
//     const output = (lowercase, str2, i = 0) => {
//         if (i >= lowercase) return false
//     }
// }

module.exports = {
    solution
  };