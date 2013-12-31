function fooFunction(){
    console.log("Function Invocation: runtime-context of this");
    console.log(this);
}
console.log("Inside of global 'window'/javascript runtime global object");
console.log(this);

// the different ways to invoke a function:
// 1: function-context
fooFunction();

foo = { // objLiteral
    bar: function() {
        console.log("Method Invocation: creates a runtime-context of:");
        console.log(this);
        //console.log(this.baz);
        var squ = this.squish();
        console.log(squ);
        
    }, 
    baz: "quux",
    squish: function(){
        console.log(this); // object function
        return "guux";
    }
}
// 2: as a method
foo.bar();

// Specifically, it's the dot-notation of invoking this function that sets the context. 
// By saying "foo.bar()", we are telling the JavaScript runtime three things: 
//   1) find "bar" on the "foo" object, 
//   2) execute the value of "bar" as a function, and 
//   3) set the context of execution to "foo".
