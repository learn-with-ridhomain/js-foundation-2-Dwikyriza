const expect = require('chai').expect;
let solution = require('../4').solution;

describe('how many occurences', () => {
  it('Should return total occurences of a character in a word', () => {
    const result = solution("abc", "a");
    expect(result).to.equal(1);
  });
  it('Should return total occurences of a character in a word', () => {
    const result = solution("genius", "z");
    expect(result).to.equal(0);
  });
  it('Should return total occurences of a character in a word', () => {
    const result = solution("minimunumanimomemama", "m");
    expect(result).to.equal(7);
  });
  it('Should return total occurences of a character in a word', () => {
    const result = solution("serendipity", "e");
    expect(result).to.equal(2);
  });
});