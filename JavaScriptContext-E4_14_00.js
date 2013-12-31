function Foo() {
    console.log(this);
    
    this.bar = function(){
        //console.log(this);
        console.log(this.baz);
    }
    
    this.baz = "quux";    
}

//Foo(); // global context.
//new Foo(); // constructor function context ( object context) 

//f = new Foo();
//f.bar();

obj = {}
f = new Foo(obj)
f.bar();

