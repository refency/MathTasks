const testFunction = require('../index');
const expect = require('chai').expect;

describe('validParentheses', () => {
  describe('функция validParentheses', () => {
    [
      ['><', true],
      ['', false],
      ['()', false],
      ['())', false],
      [')(()()(())', false],
      ['<(>)', false],
      ['+([)', true],
      ['([[+<>(+)]<+>)]', false],
    ].forEach(([a, b]) => {
      it(`"${a}" - ${b?'false':'true'}`, () => {
      expect(testFunction(a)).to.equal(b);
    });
    })
  });
});
