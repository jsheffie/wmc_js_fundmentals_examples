// example of storing context so you can call sed lib 'foo'
// and mantain the context 'that' you want.
foo = {
    bar: function (callback){
        callback();
    }
}

baz = {
    quux: function(){
        var that = this;
        foo.bar(function(){
            console.log(this);
            console.log(that);
            console.log(that.some);
        });
    },
    some: "value"
    
}
baz.quux();

// there are some cases where this will not work tho.... 
// see next example for bound context.

