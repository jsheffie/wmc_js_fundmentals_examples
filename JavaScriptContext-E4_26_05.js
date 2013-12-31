// Languages like Ruby have the concept of a "mixin" built in to them. 
// This allows you to build functionality in one object and mix it in to 
// another object at runtime. JavaScript has the potential for this, too, 
// but without the built in syntax to actually make it happen. Libraries like 
// Underscore fill this need with a function called "extend".


foo = {
    bar: "baz"
}
quux = {}

_.extend(quux, foo);

console.log(quux.bar);
