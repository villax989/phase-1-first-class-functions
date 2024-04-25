// Define a named function
function returnsANamedFunction() {
    return "This is a named function.";
}


function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
    return function() {
        console.log("This is the anonymous function.");
    };
}
// Define the function that receives a callback and calls it
function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
}

// Define an example callback function
function exampleCallback() {
    console.log("This is the callback function being called.");
}

function returnsANamedFunction() {
    // Define and return a named inner function
    function innerFunction() {
        console.log("This is the inner function.");
    }
    
    return innerFunction; // Return the function reference without invoking it
}

// Call returnsANamedFunction to get the inner function
const innerFunction = returnsANamedFunction();

// Call the inner function
innerFunction()

