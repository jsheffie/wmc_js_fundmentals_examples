// a ROCK-SOLID: example of storing context so you can call sed lib 'foo'
// and mantain the context 'that' you want.

foo = {
    bar: function (callback){
        callback(1,2,3);
        //callback.call(foo); // will work also
    }
}

baz = {
    quux: function(a, b, c){
        console.log(this);
        console.log(this.some);
        console.log(a);
        console.log(b);
        console.log(c);
    },
    some: "value"    
}
// Bind is obviously a tool to keep around.
// this is exactly like underscore.js libs bind function.
// _.bind(function, object, [*arguments]) 
function bind(func, context){
    return function(){
    var args = Array.prototype.slice.call(arguments);
        return func.apply(context, args);
    }
}

var boundFunc = bind(baz.quux, baz);

foo.bar(boundFunc);
