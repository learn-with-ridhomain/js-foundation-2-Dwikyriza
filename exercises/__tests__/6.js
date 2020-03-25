const expect = require('chai').expect;
let solution = require('../6').solution;

describe('sum of divisor', () => {
  it('Should return the sum of its divisor', () => {
    const result = solution(2);
    expect(result).to.equal(0);
  });
  it('Should return the sum of its divisor', () => {
    const result = solution(333);
    expect(result).to.equal(160);
  });
  it('Should return the sum of its divisor', () => {
    const result = solution(10);
    expect(result).to.equal(7);
  });
});