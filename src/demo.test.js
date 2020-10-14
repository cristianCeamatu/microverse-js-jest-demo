import { capitalize, reverseString, calculator } from './demo';

describe('capitalize', () => {
  it('takes a string and returns it capitalized', () =>
    expect(capitalize('xx')).toBe('Xx'));

  it('return "Please provide a string" if the argument is not a string', () =>
    expect(capitalize(3)).toBe('Please provide a string'));

  it('return "The string should start with a letter" if the argument is a stromg but not starting with a letter', () =>
    expect(capitalize('3x2')).toBe('The string should start with a letter'));
});

describe('reverseString', () => {
  it('takes a string and returns it reversed', () =>
    expect(reverseString('ab')).toBe('ba'));

  it('return "Please provide a string" if the argument is not a string', () =>
    expect(reverseString(3)).toBe('Please provide a string'));
});

describe('calculator', () => {
  describe('add', () => {
    it('adds two numbers', () => expect(calculator.add(1, 3)).toBe(4));
    it('return "Please use 2 digits" when both of the arguments are not digits', () =>
      expect(calculator.add(1, 'x')).toBe('Please use 2 digits'));
  });

  describe('substract', () => {
    it('substracts two numbers', () =>
      expect(calculator.substract(3, 1)).toBe(2));
    it('return "Please use 2 digits" when both of the arguments are not digits', () =>
      expect(calculator.substract(1, 'x')).toBe('Please use 2 digits'));
  });

  describe('multiply', () => {
    it('multyplies two numbers', () =>
      expect(calculator.multiply(2, 3)).toBe(6));
    it('return "Please use 2 digits" when both of the arguments are not digits', () =>
      expect(calculator.multiply(1, 'x')).toBe('Please use 2 digits'));
  });

  describe('divide', () => {
    it('divides two numbers', () => expect(calculator.divide(6, 3)).toBe(2));
    it('return "Please use 2 digits" when both of the arguments are not digits', () =>
      expect(calculator.divide(1, 'x')).toBe('Please use 2 digits'));
  });
});
