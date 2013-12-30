// local scope for global object
// problem: export data from our module

// fake in the 3rd Party modules so the example is sound.
var jQuery = "jquery"
var _ = "underscore"

var myModule = (function($, _, global){
    console.log($);
    console.log(_);
    console.log(global);
    // exporting  'intensionally' to the global scope
    // this effectivly provides an externally accessable API.
    global.foo = "a globally avaliable variable, exported from the module";
})(jQuery, _, this);

// global scope ( on purpose)
console.log(foo);
console.log(this.foo);   // same thing
console.log(window.foo); // same thing



