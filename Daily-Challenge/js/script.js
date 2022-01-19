//Challenge 1
const userName = prompt("What is your first name?");
//to reverse, must convert string into array
const array = userName.split('');
//storing array 
const arrayReverse = array.reverse();
//.join gets rid of ''
 alert(`The reverse is: ${arrayReverse.join('')}`);

 //Challenge 2
 //these inputs will store as a string
 const input1 = prompt("Provide a number value: ");
 const input2 = prompt("Provide another number value: ");
 //need to convert string into integers using parseInt() 
 const x = parseInt(input1);
 const y = parseInt (input2);
//get the sum
 const sum = x + y;
alert(`The sum is: ${sum}`);