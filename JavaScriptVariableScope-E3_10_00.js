
// the 'sayFoo' function has a closure around foo ( 10:30 )
function outerScope(){
    var foo;
    function sayFoo(){
        if (true) {
            // foo is NOT redefined to the global scope here.
            foo = "closure variable";
        }
        console.log(foo);
    }
    sayFoo();
    console.log(foo);
}

outerScope();
// use this to demonstrate that foo is in-fact not defined in the global scope.
//console.log(foo);

