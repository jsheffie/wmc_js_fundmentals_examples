// Variable Hoistin
// varables will always be availiable when defined inside a function
// however... best practices dictate that you should still define your variables @ the top 
// of the function.

function sayFoo(){
    if ( false ){
        // the variable is still declared and declared but unassigned 
        // variables always contain a literal value of "undefined".
        var foo = "hoisted variable";
    }
    console.log(foo);
}
sayFoo();

function sayFooCleanCode(){
    // please define your varaibles @ the top of a function.
    var foo;
    if ( false ){
        foo = "hoisted variable";
    }
    console.log(foo);
}
sayFooCleanCode();

// undefined != not defined