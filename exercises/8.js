// Write a function that takes a string and remove the characters with odd index
// Don't forget to return the value
// const solution = (str, i = 2, output = str[0]) => {
//     if (i === str.length) return output
//     if (i % 2 === 0) return solution(str, i + 1, output = output + str[i])
//     return solution (str, i + 1, output)
// }

const solution = (str, i = 0, output = "") => {
    if (i === str.length) return output
    if (i === 0 || i % 2 === 0) output = output + str[i]
    return solution (str, i + 1, output)
}

module.exports = {
    solution
  };