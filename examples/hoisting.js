/*
// variable not yet declared
console.log(x);
// ReferenceError: x is not defined
*/

/*
// x is declared before ... works obvs!
var x;
console.log(x);
// undefined
*/

/*
// x is declared after ... works too!?
console.log(x);
var x;
// undefined
// hoisting!
*/

/*
// now let's initialize a value
// declared and initialized before use... will obvs be...
 
var x = 5;
console.log(x);
// 5
// no surprise here!
*/


/*
// x is declared and initialized after use
console.log(x);
x = 5;
// undefined
// oof... what?
// but didn't just we?
*/

/* 
 * definition goes here
 */

/*
var globalNum = 1000; 
f(); 

function f(){ 
	console.log
	var globalNum = 5;
};
*/
