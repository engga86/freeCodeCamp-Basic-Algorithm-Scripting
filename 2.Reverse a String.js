// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
    return str
    .split("") //("") gives each char arry [h,e,l,l,o]
    .reverse() //reverse)
    .join("");  //("") joins array into string
  }
  
  reverseString("hello");

  //should become "olleh".