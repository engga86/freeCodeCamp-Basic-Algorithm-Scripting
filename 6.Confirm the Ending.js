// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 

// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


function confirmEnding(str, target) {

    //simply check if the substr of target (- will make to start backwards) is equal to target and if it dose return true
    return str.substr(-target.length) === target;
  }
  
  confirmEnding("Bastian", "n");
  //should return true.
  