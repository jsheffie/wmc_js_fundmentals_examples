
// 2:30 into Context in Javascript
// javascripts context... will be dictated by function invocation

foo = {
    bar: function(){
        console.log(this);
    },
    
    baz: function(callback){
        callback();
    }
}

// function invocation
foo.bar(); // 'this' points to object ... like in other languages

// function invocation from a method.
foo.baz(foo.bar); // the 'context' of 'this' now points to the browser's window object 
