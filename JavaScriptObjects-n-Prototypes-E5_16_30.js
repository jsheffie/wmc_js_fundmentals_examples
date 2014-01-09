SomeFunc = function() {
	console.log(this);
	this.myMethod = function(){
		console.log("a method on the SomeFunc instance");
	}
	this.myAttribute = "an attribute";
}

anotherFunction = function(){
	console.log("I'm a standard function");
}

anotherFunc();
obj = new SomeFunc();
obj.myMethod();
console.log(obj.myAttribute);

