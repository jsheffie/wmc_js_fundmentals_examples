// in Constructor functions... it is a bad idea to return something... to do so 
/// is risking loosing access to your object instance.

// also note ... following the NammingConventions for functions here.
SomeFunc = function() {
	console.log(this);
	return { someKey: "bad idea" }
}

anotherFunction = function(){
	console.log("I'm a standard function");
}

anotherFunc();
obj = new SomeFunc();
console.log(obj);