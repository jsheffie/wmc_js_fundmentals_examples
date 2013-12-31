// did you know that javascript functions are 'first-class-objects'....??
// what do objects have on on them..? but methods you can call.

foo = { // objLiteral
    bar: function() {
        console.log(this);
    }
}
foo.bar.call(); // now we get the global object context, object window.
foo.bar.call(this); // same thing

foo.bar.call(foo); // now we pass the foo as the context and we get the foo context

// but we can pass any context into the method.
baz = {
    quux: "some value"
}

foo.bar.call(baz); // now exame the object that is output and you can see the objLiteral 
                   // baz's attributes.

// you can even pass in empty functions
function green(){
}

foo.bar.call(green); // look @ console
foo.bar.call(green()); // look @ console
