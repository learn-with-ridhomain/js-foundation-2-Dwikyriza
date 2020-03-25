const expect = require('chai').expect;
let solution = require('../5').solution;

describe('is it a leap year?', () => {
  it('Should return true if it is a leap year', () => {
    const result = solution(2000);
    expect(result).to.equal(true);
  });
  it('Should return true if it is a leap year', () => {
    const result = solution(1996);
    expect(result).to.equal(true);
  });
  it('Should return true if it is a leap year', () => {
    const result = solution(1800);
    expect(result).to.equal(false);
  });
  it('Should return true if it is a leap year', () => {
    const result = solution(2019);
    expect(result).to.equal(false);
  });
});