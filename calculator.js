function sum(a, b) {
  if (typeof a != 'number' && typeof b != 'number') {
    return 0;
  } else if (typeof a != 'number') {
    return b;
  } else if (typeof b != 'number') {
    return a;
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a != 'number' && typeof b != 'number') {
    return 0;
  } else if (typeof a != 'number') {
    return b;
  } else if (typeof b != 'number') {
    return a;
  }
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('An explanatory error message');
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
