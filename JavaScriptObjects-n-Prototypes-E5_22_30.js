// borrowing Douglas Crockford's Object.create code ( for js interputars that dont have it )
// http://javascript.crockford.com/prototypal.html

// This is Derick's rendition...
if ( !Object.create || !typeof Object.create === "function") {
	Object.create = function(obj){
		var F = function(){};
		F.prototype = obj;
		return new F();
	}
}

// prototype
grandParent = {
	foo: function(){
		console.log("I'm the foo function from the prototype")
	}

};

myPrototype = Object.create(grandParent);
myPrototype.bar = "I'm an attribute"

obj = Object.create(myPrototype);
obj.bar = "I'm an override of an attribute!";

console.log(obj.bar);
console.log(myPrototype.bar);
console.log(grandParent.bar); // undefined
