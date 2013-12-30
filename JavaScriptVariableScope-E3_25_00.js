MyObject = (function(){
    var privateVar = 0;
    
    var myObj = function() {
        //var privateVar = 0;
        this.key = "value";
        this.doSomething = function(){
            privateVar += 1;
            // still has closure around privateVar.
            return privateVar;
        }
    };
    return myObj;
})();

var myObject = new MyObject();
var myObject2 = new MyObject();

console.log(myObject.key);
console.log(myObject.doSomething())
console.log(myObject.doSomething())

console.log(myObject2.doSomething())
console.log(myObject2.doSomething())
console.log(myObject2.doSomething())

console.log(myObject.doSomething())

// Private and shared variable!!!

// As an exercise... uncomment line 5 and comment out line 2.
// what output do you get?? n why...? see the comment on line 9
// this comment in only valid when privateVar is declared on line 2.

// The "privateVar" variable is declared inside of the immediate function, on line 2. 
// The immediate function is executed, well, immediately after definition. 
// More importantly, though, this function is and can only be executed once. 
// That means "privateVar" is only declared once. 

// Through the use of a closure, the "myObj" function has access to "privateVar". 
// We're also returning "myObj" from the module and assigning it to the "MyObject" 
// variable as the result of the immediate function.

// Since the "MyObject" variable now points to the function we defined in the module,
// it still has closure around the one instance of "privateVar". Every time we create
// an instance of "MyObject", we get a new object instance, but each instance still 
// carries with it the closure around the same "privateVar".
