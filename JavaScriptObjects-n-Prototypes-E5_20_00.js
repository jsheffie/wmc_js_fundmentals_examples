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

obj = Object.create(myPrototype);
obj.foo();

// call bogus method.
var bar = obj.bar;
bar();
