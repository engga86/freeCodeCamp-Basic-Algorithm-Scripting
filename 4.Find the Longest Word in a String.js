// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWordLength(str) {

    //Convert str into array
    let newStr = str.split(" ");

    //Set longest word count to 0
    let count = 0;
    
    //for loop to loop through the array of words
    for(var i=0; i<newStr.length; i++){

        //if each word length is bigger than the longest word count
      if(newStr[i].length > count){

          //word count becomes the length of the word. E.g. count = 0, array "The" = length of 3. count = 3... and so on until end of the array
        count = newStr[i].length;
      }
    }
    //return count
    return count;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  //should return 6.