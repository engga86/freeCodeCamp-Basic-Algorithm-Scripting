// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 

// Return the truncated string with a ... ending.


function truncateString(str, num) {

    //check if str is longer than given number 
    if (str.length > num) {

        //use slice from start (index 0) to the given number than concat with "..."
        return str.slice(0, num) + "...";
    }

    //otherwise just return original str
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
//A-tisket...