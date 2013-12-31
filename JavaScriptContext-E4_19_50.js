foo = {
    bar: function (callback){
        var myContext = { 
            some: "object context that I want"
        }
        callback.call(myContext);
    }
}

baz = {
    quux: function(){
        console.log(this);
    }
}
var func = baz.quux;
foo.bar(func);