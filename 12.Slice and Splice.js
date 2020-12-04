// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.



function frankenSplice(arr1, arr2, n) {

    //copy array
    let newArr = [...arr2];
    
    //loop into arr1 
    for(var i = 0; i < arr1.length; i++){

        //find n and splice in current element of arr1
        newArr.splice(n, 0, arr1[i]);

        //increment n to make sure element of arr1 is added into newArr
        n++;
    }
  
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  