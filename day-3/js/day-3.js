// //Day 2 notes continued

// //we don't usually use var anymore
// //var thisIsaString = "some string goes here";
// //var thisIsaNumber = 10;
// //var thisIsaBoolean = true; 

// //let can be reassigned 
// //let thisIsaString = "some string goes here";
// //let thisIsaNumber = 10;
// //let thisIsaBoolean = true; 

// //you cant change the assignment of a const variable once assigned
// //reassaigning a constant will break the code
// //constants are good for values that don't change, or often 
// const thisIsaString = "some string goes here";
// const thisIsaNumber = 10;
// const thisIsaBoolean = true; 



// console.log(thisIsaString);
// console.log(thisIsaNumber);
// console.log(thisIsaBoolean); 

// //loop example
// for(let i = 0; i < 10; i++){

// }

// //variable naming
// //try to be more verbose
// let UserPhoneNumber = "555-555-5555"; //camel case variable name. This is the most common 
// let phoneNumber = "555-555-5555";
// let phone_number_user = "" // snake case variable name 

// //can also start with $ or _
// //variable names cannot start with a number

// let _phoneNumber = " " //known as a private variable
// let $phoneNumber = " " //know as an event variable

// // Operators

// //asignment operators
// let count = 0; 
// count = count + 1; //increments count by 1 by adding 1 to its current valuie and reassigning it
// console.log(`Using assignment operator ${count}`);
// count += 1;  // count = count + 1
// count ++; //count += 1, count = count + 1
// console.log(`Using addition assignment ${count}`);
// count += 5; // count = count + 5
// console.log(`Using addition assignment ${count}`)
// // there are also -=, *=, /= assignment operators available 
// //also count-- decrements by 1 

// //arithmetic operators 

// //basic operators would be + - * /
// //modulo is important though %
// //modulo gives what the remainder is 
// console.log(10 % 5)
// console.log(10 % 3)
// console.log(10 % 7)

// //logical operators
// /*
//     All of theses will return a boolean value

// == equal to
// = equal value and equal type
// != not equal
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// */

// console.log(1 == true)//is true, double equal is not best practice
// console.log(1 === 1); //is true
// console.log("1" === true)// is false
// console.log("1" === 1) //is false
// //use === not == when comparing 
// // === checks both value and type! 
// console.log(1 != true); // is false
// console.log(1 !== '1'); // is true 


//Day 3 Notes

//an Array
//arrays = 0 1 2 3 4 5 6 7 ... start with 0 index 
let array = [1, 2, "Hello World", 4, 400n, 6, 7]; //usually keep data in the array the same type 
console.log(array);

array[2] = 3;
array[4] = 5;
console.log(array);

let message = "Hello World";
console.log(message);
console.log(message[0]);

/*

.length - gets length
string[0] - locates index in an array
indexOf(’world’) - locates index in an array
.slice(0,3) - pull apart

*/

//reversing a string input
let input = "I want to reverse this string"
console.log(input);
let arr = input.split('') // '' is empty string
let reversedArray = arr.reverse();
console.log(reversedArray.join(''));

/*
.toLowerCase()
.toUpperCase()
.replace(’pattern’, ’replacement’)
.repeat(10)
startsWith(str, index) (ES16)
endsWith(toMatch, length=str.length) (ES16)
includes(toMatch, index=0) (ES16)

*/

//pop up methods
//alert only shows a message

const userName = prompt("What's your name?");
const confirmed = confirm(`Is ${userName} your name`);
alert(`Hello, ${userName}`); // ` is not ''. fn1 + esc