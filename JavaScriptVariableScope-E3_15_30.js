// sompe people say immediate functions and modules are the same.
// however, there are some othere features that a javascript module would have.

// such as returning an API to an external variable
// or otherwise exporting some data or objects to be used, 
// and creating a local scope from otherwise global or external objects.

var outerFoo = (function(){
    var foo;
    var count = 0;
    function defineFoo(){
        if (true) {
            foo = { 
                key: "value", 
                bar: function(){
                    count += 1;
                    return count;
                }
            };
        }
    }
    defineFoo();
    
    return foo;
})();

console.log(outerFoo.key);
console.log(outerFoo.bar());
console.log(outerFoo.bar());
console.log(outerFoo.bar());
console.log(outerFoo.bar());
console.log(outerFoo.bar());

// 16:00.... we can clearly see that defineFoo function within our outerFoo module
// has a closure around the count variable.

// we are minipulating the state of the object-literal foo....
// very-powerful and very useful technique.
// Modules == Happy Panda! :)

