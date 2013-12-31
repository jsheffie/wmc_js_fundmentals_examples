function foo(){
    var bar = "baz";
    this.quux = function(){
        console.log(this);
        console.log(bar);
    }
    this.quux();
}
console.log(this);
f = new foo();
f.quux();

