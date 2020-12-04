// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.


function booWho(bool) {

    //use typeof to check if bool is boolean primitive.
    if(typeof(bool) === "boolean"){

        //return true if is boolean 
        return true;
    }
    //otherwise false
    return false;
  }
  
  booWho(null);
  //Sould return false