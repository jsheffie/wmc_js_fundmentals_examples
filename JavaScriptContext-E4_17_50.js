foo = {
    bar: function (callback){
        callback();
    }
}

baz = {
    quux: function(){
        console.log(this);
    }
}
//foo.bar(function(){
//    console.log(this);
//});

//foo.bar(baz.quux);
var func = baz.quux;
foo.bar(func);

// It doesn't matter if the function your calling is a method of an object. 

// It doesn't matter if your callback function is a method of an object and passed
// in as a method pointer with the dot-notation. 

// It only matters how the callback you specify is invoked, and right now the 
// invocation we're using for this callback is the standard function invocation 
// which forces the context to be the global object.