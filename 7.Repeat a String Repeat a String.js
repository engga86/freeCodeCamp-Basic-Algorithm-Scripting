// Repeat a given string str (first argument) for num times (second argument). 

// Return an empty string if num is not a positive number. 

// For the purpose of this challenge, do not use the built-in .repeat() method.


function repeatStringNumTimes(str, num) {

    //ceate new empty string. (String can't be eidited)
    let newStr = "";

    //while loop if num is bigger than 0
    while(num > 0){
        
        //add str to newStr
        newStr += str;

        //count down the num so it reaches to 0 and ends the loop
        num--;
    }

    //return newStr;
    return newStr;
  }
  
  repeatStringNumTimes("abc", 3);
  //abcabcabc