Person = function() {

}

derick = new Person();

Person.prototype.speak = function(msg) {
	console.log(msg);
}

derik.speak = function(msg){
	console.log("derick won't stop speaking!");
}

derick.speak("Hello there!"); // derick won't stop speaking!

jim = new Person();

jim.speak("hello again");

cathy = new Person();
cinthia = new Person();
cindy = new Person();