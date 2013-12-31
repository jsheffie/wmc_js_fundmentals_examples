foo = {
    bar: function (callback){
        this.method = callback;
        this.method(); // contex chain
    }
}

baz = {
    quux: function(){
        console.log(this);
    }
}
var func = baz.quux;
foo.bar(func);