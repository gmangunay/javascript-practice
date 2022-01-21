// debugger;
function reverseName() {
  // alert("This is ran as soon as the button calls the reverseName function");
 const userName = prompt("Enter your first name", "John");
 const nameArray = userName.split('');
 const reversedArray = nameArray.reverse();
 alert(reversedArray.join(''));

}
//alert("This is ran as soon as the browser loads the javascript");
function addNumbers(){
    const num1 = prompt("Enter a number", 100);
    const num2 = prompt("Enter another number", 200);

    const parsedNum1 = parseInt(num1);
    const ParsedNum2 = parseInt(num2);
    alert(parsedNum1 + ParsedNum2);
}

function createRandomNumber(){
    //.random only generates numbers between 0-1
    const randomNumber = Math.random() * 100;

    alert(Math.floor(randomNumber));
}

function rollDice(){
    const die1 = Math.random() * 100;
    const die2 = Math.random() * 100;
    const die1Result = Math.floor(die1) % 6 + 1;
    const die2Result = Math.floor(die2) % 6 + 1;

    alert(`Die1: ${die1Result} Die2: ${die2Result}`);
}

function fizzbuzz(){
    const num1 = prompt("Enter a number", "3");
    const parseNum1 = parseInt(num1);
//note: order matters, if the first case is true, then it's done
    if (parseNum1){
        if(parseNum1 % 2 === 0 && parseNum1 % 5 === 0){
            alert("FizzBuzz!");
        }
            else if(parseNum1 % 5 === 0){
                alert("Buzz!");
            }
            else if(parseNum1 % 2 === 0){
                alert("Fizz!");
            }
            else{
                alert(parseNum1);
            }
        
    }
}