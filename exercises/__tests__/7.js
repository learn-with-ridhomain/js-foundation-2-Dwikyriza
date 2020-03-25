const expect = require('chai').expect;
let solution = require('../7').solution;

describe('greatest common denominator', () => {
  it('Should return their greatest common denominator', () => {
    const result = solution(10, 5);
    expect(result).to.equal(5);
  });
  it('Should return their greatest common denominator', () => {
    const result = solution(14, 24);
    expect(result).to.equal(2);
  });
  it('Should return their greatest common denominator', () => {
    const result = solution(25, 30);
    expect(result).to.equal(5);
  });
  it('Should return their greatest common denominator', () => {
    const result = solution(1, 2);
    expect(result).to.equal(1);
  });
});