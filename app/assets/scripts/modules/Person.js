class Person {
	constructor(name,favColor){
		this.name= name,
		this.favColor= favColor,
	}
	
	greek(){
		console.log("hello My name is "+ name + " and my fav color is " + favColor + ".");
	}
}


module.exports = Person;