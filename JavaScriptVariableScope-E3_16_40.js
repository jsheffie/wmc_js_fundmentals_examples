// problem: we need access to code from within our module.

// one way to do this is to put that code in the global scope.
// this is a BAD idea.

// solution: take advantage of the fact that js modules are just immediatly exicuted functions
// and pass in arguments to the functions... err um modules.

// here we are going to pass jquery into our module, so that javascript does not have 
// to bounce through the variable scoping trees to find the value of the jquery '$' 
var myModule = (function($, _){
    console.log($);
    console.log(_);
})(jQuery, _);


