var Cat = require('./cat');
console.log('hello');
function eat(food){
	this.stomatch = [].push(food);
}
function sleep(){
	console.log('Zzzz');
}
var Tom = new Cat('Tom');
Tom.greet();
function cattrain(){
	console.log('make him say meo')
}