/*
Buat sebuah fungsi yang mempunyai input 2 parameter, berupa kata(>1 string) dan huruf (1 string) 
 yang akan me-return true jika huruf (parameter kedua) ada di kata (parameter 1)
Parameter: 2 string
Output: boolean
Contoh: solution("abc", "a") hasilnya menjadi true
*/
// const solution = (str1, str2) => {
//     let i = 0;
//     do {
//        let output = str1.includes(str2.charAt(i))
//        return output
//        i++
//     }
//     while (i <= str1.length);
// };

 const solution = (str1, str2) => {
     let i = 0
     let lowercase = str1.toLowerCase();
     do {
         console.log(i)
        if (str2 === lowercase[i]) {
            return true
         }
         i++
     }
     while (i <= lowercase.length);
     return false
 };


module.exports = {
    solution
};