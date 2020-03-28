/*
Buat sebuah fungsi yang mempunyai input 2 parameter, berupa kata(>1 string) dan huruf (1 string) 
 yang akan me-return jumlah dari berapa kali huruf itu muncul di kata tersebut
Parameter: 2 string
Output: boolean
Contoh: solution("abc", "a") hasilnya menjadi 1
*/

const solution = (str1, str2) => {
    let berak = 0
    for (i = 0; i < str1.length; i++) {
        if (str2 === str1.charAt(i)) {
            berak = berak + 1
         }
    }
    return berak;
};

module.exports = {
    solution
};