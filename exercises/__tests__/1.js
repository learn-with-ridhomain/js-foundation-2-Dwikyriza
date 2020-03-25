const expect = require('chai').expect;
let solution = require('../1').solution;

describe('repeat string', () => {
  it('Should repeat string x times correctly', () => {
    const result = solution(2, "abc");
    expect(result).to.equal("abcabc");
  });
  it('Should repeat string x times correctly', () => {
    const result = solution(6, "hello");
    expect(result).to.equal("hellohellohellohellohellohello");
  });
  it('Should repeat string x times correctly', () => {
    const result = solution(3, "");
    expect(result).to.equal("");
  });
  it('Should repeat string x times correctly', () => {
    const result = solution(0, "ab");
    expect(result).to.equal("");
  });
});