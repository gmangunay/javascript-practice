// //Challenge 1
// const userName = prompt("What is your first name?");
// //to reverse, must convert string into array
// const array = userName.split('');
// //storing array 
// const arrayReverse = array.reverse();
// //.join gets rid of ''
//  alert(`The reverse is: ${arrayReverse.join('')}`);

//  //Challenge 2
//  //these inputs will store as a string
//  const input1 = prompt("Provide a number value: ");
//  const input2 = prompt("Provide another number value: ");
//  //need to convert string into integers using parseInt() 
//  const x = parseInt(input1);
//  const y = parseInt (input2);
// //get the sum
//  const sum = x + y;
// alert(`The sum is: ${sum}`);

// Take Home Challenge

//Ask for the user's first name
const fname = prompt("What is your first name?");
//Ask for the user's last name
const lname = prompt("What is you last name?")
//log the users first name to the console
console.log(fname);
//Alert the user's last name
alert(`Your last name is ${lname}`);
//Ask for the users birthday
const bday = prompt("when is your birthday?");
//confirm birthday input
const confirmed = confirm(`Is ${bday} your birthday?`);
//aller the users birthday
alert(`Your birthday is ${bday}`);

