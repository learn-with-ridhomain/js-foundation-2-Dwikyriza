const expect = require('chai').expect;
let solution = require('../3').solution;

describe('is the character occured in a string', () => {
  it('Should return true if it is occured', () => {
    const result = solution("abc", "a");
    expect(result).to.equal(true);
  });
  it('Should return true if it is occured', () => {
    const result = solution("genius", "z");
    expect(result).to.equal(false);
  });
  it('Should return true if it is occured', () => {
    const result = solution("I'M DONE", "m");
    expect(result).to.equal(true);
  });
  it('Should return true if it is occured', () => {
    const result = solution("serendipity", "o");
    expect(result).to.equal(false);
  });
});