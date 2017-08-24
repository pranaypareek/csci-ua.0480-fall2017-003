/*
var x = "outer x";
function outer() {
	var x = "inner x";
	function inner() {
		console.log(this.x);
	}
	inner();
}

outer();

var obj = {};
obj.x = "object's x";

var x = "global x";
console.log(x);
console.log(this.x);
console.log(this);
obj.outer = function() {
	var x = "outer's x";
	var inner = function() {
		console.log(this)
		//console.log(this);
		//console.log(this.x);
		//console.log(x);
	};
	inner();
};

obj.outer();
*/

/*
var x = "global x";
var obj = {
	"x": "object's x",
	"outer": function() { 
		var inner = function() {
			this.x = "foo";
		}
		inner();
	}
};

console.log(x);
obj.outer();
console.log(x);
*/

var myObject = {
	value: 5,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	} 
};

myObject.double = function () {
	// var that = this; // Workaround.
	var helper = function () {
		console.log(this.value);	
		// that.value = add(that.value, that.value);
	};
	helper(); // Invoke helper as a function. 
};
myObject.double();
