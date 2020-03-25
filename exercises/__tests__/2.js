const expect = require('chai').expect;
let solution = require('../2').solution;

describe('is it a prime number ?', () => {
  it('Should return true if it is a prime number', () => {
    const result = solution(3);
    expect(result).to.equal(true);
  });
  it('Should return true if it is a prime number', () => {
    const result = solution(41);
    expect(result).to.equal(true);
  });
  it('Should return true if it is a prime number', () => {
    const result = solution(4);
    expect(result).to.equal(false);
  });
  it('Should return true if it is a prime number', () => {
    const result = solution(50);
    expect(result).to.equal(false);
  });
});