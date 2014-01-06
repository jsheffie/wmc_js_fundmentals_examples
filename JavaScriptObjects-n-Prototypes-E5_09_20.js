someFunc = function(){
    console.log("a function was called");
    console.log(this);
}

var obj = {}

obj["name"] = "Derick";
obj.doSomething = someFunc;


//var name = obj["name"];
var key = "name";
var name = obj[key]; // using square bracket syntax for assigning values.

console.log(name);

obj.doSomething()

