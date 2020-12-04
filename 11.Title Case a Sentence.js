// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".



function titleCase(str) {

    //convert str into array using split
    let newStr = str.toLowerCase().split(" ");
    
    //create copy of array and replace each charAt index 0 to uppercase
    let re = newStr.map(function(e){
      return e.replace(e.charAt(0), e.charAt(0).toUpperCase());
    })

    //join the array to convert into string.
    return re.join(" ");
  }
  
  titleCase("I'm a little tea pot");
  //Sould return I'm A Little Tea Pot