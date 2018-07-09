function Person(name,favColor){
	this.name= name,
	this.favColor= favColor,
	this.greek = function(){
		console.log("My name is "+ name + " and my fav color is " + favColor + ".");
	}
}

var john = new Person('imroz maniyar','Black') 
john.greek();