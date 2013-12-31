// now move the baz method to the obj.... objliteral directly

function Foo() {
    console.log(this);
    
    this.bar = function(){
        console.log(this.baz);
    }
}

obj = {
    baz: "quux"
};

Foo.apply(obj)
obj.bar();

f = new Foo();
f.bar(); // undefined

// now we can 'clearly' see the difference in a functions when new is used and when it is not used.
