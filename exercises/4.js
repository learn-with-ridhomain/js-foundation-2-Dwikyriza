/*
Buat sebuah fungsi yang mempunyai input 2 parameter, berupa kata(>1 string) dan huruf (1 string) 
 yang akan me-return jumlah dari berapa kali huruf itu muncul di kata tersebut
Parameter: 2 string
Output: boolean
Contoh: solution("abc", "a") hasilnya menjadi 1
*/

const solution = (str1, str2, i = 0, output = 0) => {
    if (i >= str1.length) return output
    if (str2 === str1[i].toLowerCase()) output = output + 1
    return solution(str1, str2, i + 1, output)
}

module.exports = {
    solution
  };