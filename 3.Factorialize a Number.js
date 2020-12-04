// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.



function factorialize(num) {

  //if num is 0 return 1 to multiply
    if(num === 0){
      return 1
    }
    // num = (5)   num - 1 => (* 4 * 3 * 2 * 1)
    return num * factorialize(num-1);
  }

  factorialize(5);

  //should return 120.