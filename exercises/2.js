/*
Buat sebuah fungsi yang mempunyai input number dan mereturn true jika angka tersebut adalah angka prima
*/

const solution = (num) => {
    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false
        };
        return true;
        i++
    };
}

module.exports = {
    solution
};