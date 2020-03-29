// Write a function that takes a string and remove the characters with odd index
// Don't forget to return the value

const solution = (str) => {
    let i = 2;
    let output = str.charAt(0)
    while (i <= str.length) {
        if (i % 2 === 0) {
            output = output + str.charAt(i)
        }
        i++
    };
    return output;
};

module.exports = {
    solution
};