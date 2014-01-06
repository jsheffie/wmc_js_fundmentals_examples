someFunc = function(){
    console.log("a function was called");
    console.log(this);
}

var obj = {}

obj["name"] = "Derick";
obj.doSomething = someFunc;
var name = obj["name"];

console.log(name);

obj.doSomething() // function pointer with context ('this') in tact
var myFuncReference = obj["doSomething"];
myFuncReference() // function reference ... loses the context.

