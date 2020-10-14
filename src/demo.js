import { type } from 'jquery';

const capitalize = (string) => {
  if (typeof string === 'string' && !string.charAt(0).match(/[a-z]/i)) {
    return 'The string should start with a letter';
  }

  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return 'Please provide a string';
};

const reverseString = (string) => {
  if (typeof string === 'string') {
    return string.split('').reverse().join('');
  }

  return 'Please provide a string';
};

const calculator = {
  add: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Please use 2 digits';
    }
    return a + b;
  },
  substract: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Please use 2 digits';
    }
    return a - b;
  },
  divide: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Please use 2 digits';
    }
    return a / b;
  },
  multiply: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Please use 2 digits';
    }
    return a * b;
  },
};

export { capitalize, reverseString, calculator };
