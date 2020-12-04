// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.



function bouncer(arr) {

    //create empty Array to stor truth array
    let newArr = [];
    
    //loop through to find true array
    for(let i =0; i<arr.length; i++){

        //if array is true
      if(arr[i]){
          //push true array into newArr
        newArr.push(arr[i])
      }
    }
    // after the loop has finished return newArry
    return newArr;
  }
  
  bouncer([7, "ate", "", false, 9]);
  //should return [7, "ate", 9].