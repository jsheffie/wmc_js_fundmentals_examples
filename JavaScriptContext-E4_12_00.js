// function .call method also supports calling with arguments

foo = {
    bar: function(a, b, c) {
        console.log(this);
        console.log(a);
        console.log(b);
        console.log(c);
        
    }
}
foo.bar.call(foo, 1,2,3);

