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

// This is actually Douglas's rendition... ( same output )
if ( typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		function.prototype = o;
		return new F();
	}
}
myPrototype = {};

obj = Object.create(myPrototype);

console.log(obj);