// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.



function chunkArrayInGroups(arr, size) {

    //create new empty array 
    let newArr = [];

    //while loop util length of array reaches to 0
    while(arr.length){

        //use splice to delete size of array from start and push it into newArr
      newArr.push(arr.splice(0,size));
    }

    //return newArr;
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  