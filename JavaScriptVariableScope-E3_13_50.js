// sompe people say immediate functions and modules are the same.
// however, there are some othere features that a javascript module would have.

// such as returning an API to an external variable
// or otherwise exporting some data or objects to be used, 
// and creating a local scope from otherwise global or external objects.

var outerFoo = (function(){
    var foo;
    function defineFoo(){
        if (true) {
            // foo is NOT redefined to the global scope here.
            foo = "closure variable";
        }
    }
    defineFoo();
    
    return foo;
})();

console.log(outerFoo);