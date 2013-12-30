// nested functions, 
// functions as a way to manage scope.

// note: this is terrible code from a memory management standpoint.
// every time a outerScope function is called, a new sayFoo function is 
// instanciated.
function outerScope(){
    function sayFoo(){
        var foo;
        if (true) {
            foo = "hoisted variable";
        }
        console.log(foo);
    }
    sayFoo();
}

outerScope();