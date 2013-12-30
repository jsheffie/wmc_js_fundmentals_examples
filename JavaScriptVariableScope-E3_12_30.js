//An immediate function is a function that is defined and executed immediately, 
// with no assignment of the actual function to a name or variable. 

// Then we'll wrap the entire function in parenthesis. The parenthesis tell JavaScript 
// to treat the function declaration as a grouped expression, the same way you would group 
// a mathematical expression in parenthesis. The result of the grouping in this case, is a 
// function that can be executed. 

(function(){
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
})();

// NOW its an IIFE... ( not in IIFE 'immediately-invoked function expression')
// step 1: ()();
// step 2: (function(){})();
