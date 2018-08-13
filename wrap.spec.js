const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap()', function() {
  it('returns an empty string if empty string was provided.', function() {
    expect(wrap('', 10)).to.equal('');
  });
  it('return expected output given by the prompt. ', function() {
    const phrase =
      'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';
    const expectedOutput =
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.';
    expect(wrap(phrase, 20)).to.equal(expectedOutput);
  });
});
