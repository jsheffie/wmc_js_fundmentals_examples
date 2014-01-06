// constructor function

// Constructor Function.... namming practice
// Camel Case names... including first letter.
SomeFunc = function(){
    console.log(this);
    
}
// Namming convention of regular functions.
// camel case names.... with first letter lower case.
anotherFunction = function(){
    console.log("I'm a standard function");
}

//console.dir(someFunc);

obj = new SomeFunc();

console.log(obj);

