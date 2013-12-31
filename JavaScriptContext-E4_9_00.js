foo = { // objLiteral
    bar: function() {
        console.log("Method Invocation: creates a runtime-context of:");
        console.log(this);
        var output = this.baz();
        console.log(output);
    }, 
    baz: function(){
        return "guux";
    }
}
foo.bar();

var func = foo.bar; // function pointer
func();
/*
Exception: this.baz is not a function
*/