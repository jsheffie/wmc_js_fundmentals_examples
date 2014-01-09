someFunc = function(){
    console.log("a function was called");
    console.log(this);
}

var obj = {}

obj["name"] = "Derick";
obj.doSomething = someFunc;

// key point here, 
// you can use square-bracket syntax to assign to objects.
// using this technique you can have attribute's with spaces in them.

//var name = obj["name"];
var key = "fname lname";
var name = obj[key]; // using square bracket syntax for assigning values.

console.log(name);

obj.doSomething()

// We can also store values in keys that are not valid in the dot-notation syntax. 
// For example, you can't say "obj.first name" as a value key. But you can say 
// "first name" in a string, and use that string as the identifier that you pass 
// in to the square brackets of an object. This gives us a lot of flexibility in 
// storing and retrieving data and functions within our objects.