function sum(a, b) {
  if (!a) {
    a = 0;
  } else if (!b) {
    b = 0;
  } 
  
  if (!a && !b) {
    return 0;
  }
  return a + b;
}

function subtract(a, b) {
  if (!a && !b) {
    return 0;
  }

  if (!a) {
    a = 0;
  } else if (!b) {
    b = 0;
  } 
  return a - b;
}

function divide(a, b) {
  if(a === 0 || b === 0) {
    throw new Error('Exception - Cannot divide by 0, please enter a number');
    return;
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
