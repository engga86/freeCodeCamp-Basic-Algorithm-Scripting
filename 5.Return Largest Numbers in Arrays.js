// Return an array consisting of the largest number from each provided sub-array. 

// For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


function largestOfFour(arr) {
    //ceate new empty array to store
    let newArr = [];
    
    //loop through first array (outer Array)
    for(var i = 0; i<arr.length; i++){

        //set largest number of array as first index of first array. E.g. [4, 5, 1, 3] => 4 is current largest
      let large = arr[i][0];

        //loop through second array (innder array) Note: arr[i].length, j starts at index 1 because current largest is set to index 0
      for(var j =1; j<arr[i].length; j++){

          //if index 1 of inner array is bigger than current set large value which is 4
        if(arr[i][j] > large){

            //set new large value. E.g. [4, 5, 1, 3] => 4 was largest, since 5 is bigger (as checked above) new value is 5.
            //loop through until it reach to the end
          large = arr[i][j];
        }
      }
      //store large number as array
      newArr[i] = large;
    }
    //return newArr
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  //should return [ 5, 27, 39, 1001 ].