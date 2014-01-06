// demonstrating 'class-level' or 'static' methods

someFunc = function(){
    if (! someFunc.callCount) { someFunc.callCount = 0 }
    someFunc.callCount += 1;
    console.log("Called: ", someFunc.callCount, " times");
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

console.log(someFunc);
someFunc.doSomething();

someFunc();
someFunc();
someFunc();
someFunc();

// a function object has some built in attributes
console.dir(someFunc);
// arguments, caller, length, name, prototype, __proto__
// trying to assign to these is not going to work.

// Note: this WILL NOT WORK
// someFunc.name = "Some Name";
// someFunc.length = 10; 
// this is because these are 'reserved' attributes of the object:function.

