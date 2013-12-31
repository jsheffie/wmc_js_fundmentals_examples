// function .apply method
// Constructor Function Context

foo = {
    bar: function(a, b, c) {
        console.log(this);
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
args = [ 1,2,3]
foo.bar.apply(foo, args);


