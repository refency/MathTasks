const testFunction = require('../index');
const expect = require('chai').expect;

describe('validParentheses', () => {
  describe('функция validParentheses', () => {
    [
      ['(', true],
      [')', true],
      ['><', true],
      ['', false],
      ['()', false],
      ['())', true],
      [')(()()(())', true],
      ['<(>)', true],
      ['+([)', true],
      ['([[+<>(+)]<+>])', false],
    ].forEach(([a, b]) => {
      it(`"${a}" - ${b?'false':'true'}`, () => {
        expect(testFunction(a)).to.equal(b);
    });
    })
  });
});
