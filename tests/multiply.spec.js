const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(2, 3);
    expect(result).toBe(6);
  });

  test('should return negative number if one argument is negative', () => {
    const result = multiply(-1, 3);
    expect(result).toBe(-3);
  });

  test('should return 0, if one argument is 0', () => {
    const result = multiply(5, 0);
    expect(result).toBe(0);
  });
});
