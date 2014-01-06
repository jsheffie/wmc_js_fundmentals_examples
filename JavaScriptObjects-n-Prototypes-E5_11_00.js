someFunc = function(){
    console.log("a function was called");
    console.log(this);
}

// Functions are first-class objects in Javascripts
// you can have a key/value pair on functions just like you can for object literals.

// add a key
someFunc.someKey = "some value";
console.log(someFunc.someKey);

// add another function
someFunc.doSomething = function(){
    console.log("I'm doing something");
}

var objlit = {}
objlit.name="Jeff";

console.log(objlit);
console.log(someFunc);
someFunc.doSomething();

