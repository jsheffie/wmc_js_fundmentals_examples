//brain scrambled

function Foo() {
    console.log(this);
    
    this.bar = function(){
        console.log(this.baz);
    }
    
    this.baz = "quux";    
}

obj = {};
f = Foo.apply(obj)
obj.bar();
f.bar();

/*
Exception: f is undefined
*/