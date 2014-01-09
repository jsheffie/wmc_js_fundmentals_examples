SomeFunc = function() {

}

myPrototype = {};

obj = new SomeFunc();
obj.prototype = myPrototype;

console.log(obj);