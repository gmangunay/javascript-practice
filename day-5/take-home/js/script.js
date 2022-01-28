// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number


function dailyChallenge(){

const num1 = prompt("Enter a number: ");
const num2 = prompt("Enter another number: ")

const parsedNum1 = parseInt(num1);
const parsedNum2 = parseInt(num2);

  if(!isNaN(parsedNum1) && !isNaN(parsedNum2)){
      if(parsedNum1 === parsedNum2 ){
        alert(`${parsedNum1} is equal to ${parsedNum2} `); 
      } 
      else if(parsedNum1 > parsedNum2){
        alert(`${parsedNum1} is larger than ${parsedNum2} `)
      }
      else{
          alert(`${parsedNum2} is larger than ${parsedNum1}`)
      }
  }
  else{
    alert("You did not enter a number");
  }

}







// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number