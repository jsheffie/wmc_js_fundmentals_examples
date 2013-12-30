// problem: show Object Literal Limitation

// One of the limitations of this technique. 
// And that limitation is that the object returned from the module is a singleton object, 
// or "static" object as C# would call it. 
// It's not possible to create other instances of the same object. 

// fake in the 3rd Party modules so the example is sound.
var jQuery = "jquery"
var _ = "underscore"

var myModule = (function($, _, global){
    var myObj = {};
    var privateBar = "some private variable"
    
    myObj.foo = "bar"
    myObj.bar = function(){
        return privateBar + " was returned from this module's function";
    }
    
    return myObj;
    
})(jQuery, _, this);

console.log(myModule.foo);
console.log(myModule.bar());

new myModule(); // this will create an exception
/*
Exception: myModule is not a constructor
*/

// to get around this you can have the module return a function.
