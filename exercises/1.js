/*
Buat sebuah fungsi yang mempunyai input 2 parameter, berupa string dan number
 yang akan me-return sebuah string  hasil kelipatan input string x input number
Parameter: 1 number, 1 string.
Output: 1 string
Contoh: solution(2, "abc") hasilnya menjadi "abcabc"
*/

const solution = (num, str) => {
    let output = "";
    for (let i = 0; i < num; i++) {
        output = output + str
    };
    return output;
};


// const solution = (num, str, output="") => {
//     for (let i = 0; i < num; i++) {
//         output = output + str
//     };
//     return output;
// };

module.exports = {
    solution
};