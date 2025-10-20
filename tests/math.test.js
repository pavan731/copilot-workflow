const { add, multiply } = require('../src/math')
test('adds', () => expect(add(1,2)).toBe(3))
test('adds negative numbers', () => expect(add(-1,-2)).toBe(-3))
test('adds zero', () => expect(add(0,0)).toBe(0))
test('adds positive and negative', () => expect(add(5,-3)).toBe(2))
test('adds large numbers', () => expect(add(1000,2000)).toBe(3000))
test('adds decimal numbers', () => expect(add(1.5,2.5)).toBe(4))

test('multiplies positive numbers', () => expect(multiply(3,4)).toBe(12))
test('multiplies negative numbers', () => expect(multiply(-2,-3)).toBe(6))
test('multiplies by zero', () => expect(multiply(5,0)).toBe(0))
test('multiplies positive and negative', () => expect(multiply(6,-2)).toBe(-12))
test('multiplies decimal numbers', () => expect(multiply(2.5,4)).toBe(10))
test('throws error for non-number arguments', () => {
  expect(() => multiply('a',2)).toThrow('Both arguments must be numbers');
  expect(() => multiply(2,'b')).toThrow('Both arguments must be numbers');
})
test('throws error for NaN arguments', () => {
  expect(() => multiply(NaN,2)).toThrow('Arguments cannot be NaN');
  expect(() => multiply(2,NaN)).toThrow('Arguments cannot be NaN');
})