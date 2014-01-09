myPrototype = {};

// in newer versions of browsers and in common CommonJS implementations like node.js
// you use Object.create() to do this

// The net result is that we've used an object of our choice as a prototype 
// for another object. That is, we've inherited one object directly from another.

obj = Object.create(myPrototype);

console.log(obj);

// cant use this with older browsers....
// Douglas Crockford has an implementation of Object.create in his book, 
// "JavaScript: The Good Parts" and up on his website.
