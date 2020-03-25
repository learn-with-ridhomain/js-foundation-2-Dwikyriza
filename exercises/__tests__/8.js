const expect = require('chai').expect;
let solution = require('../8').solution;

describe('odd only', () => {
  it('Should filter the even characters', () => {
    const result = solution('abcdef');
    expect(result).to.equal('ace');
  });
  it('Should filter the even characters', () => {
    const result = solution('javascript');
    expect(result).to.equal('jvsrp');
  });
});