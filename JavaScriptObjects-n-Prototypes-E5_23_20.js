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
	}, 
	logIt: function() {
		console.log(this.bar);
	}
};

myPrototype = Object.create(grandParent);
myPrototype.bar = "I'm an attribute"

obj = Object.create(myPrototype);
obj.bar = "I'm an override of an attribute!";

obj.logIt(); // "I'm an override of an atribute!"
myPrototype.logIt(); // "I'm an attribute"
grandParent.logIt(); // unedfined
