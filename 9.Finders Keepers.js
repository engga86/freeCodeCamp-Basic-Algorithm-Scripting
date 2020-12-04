// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 

// This means that given an element x, the 'truth test' is passed if func(x) is true. 

// If no element passes the test, return undefined.


function findElement(arr, func) {

    //set num to 0
    let num = 0;

    //loop through array
    for(let i =0; i<arr.length; i++){

        //set num as each number in arry
        num = arr[i];

        //if function(num) is true
        if(func(num)){

            //return that number
            return num;
        }
    }

    //otherwise return undefined;
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  //Should return 2