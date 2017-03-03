
var names = ['Evan', 'Andrew', 'Ben'];
/*
names.forEach(function (name){
	console.log('forEach', name);
});

//Arrow functions- ES6 feature
names.forEach((name) => {
	console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe= (name) => name + '!';
console.log(returnMe('Evan'));

var person = {
	name: 'Evan',
	greet: function (){
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name);
		});
	}
};

person.greet();
*/

//Challenge
function add (a, b){
	return a + b;
}

var addStatement = (a, b) => {
	return a + b;
};

var addExpression = (a, b) => a + b;

console.log(addStatement(5, 0));
console.log(addExpression(6, -2));

//console.log(add(1, 3));
//console.log(add(9, 0));

