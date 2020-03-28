// Write a function that takes year(integer) as an input and compute
// whether the given year is leap year or not

const solution = (year) => {
    if (year % 4 !== 0) {
        return false
    } else if (year % 100 === 0 && year % 400 !== 0) {
        return false
    };
    return true
};

module.exports = {
    solution
};