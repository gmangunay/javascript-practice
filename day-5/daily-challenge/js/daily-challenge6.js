function oddEven(input){
// const input = prompt("Enter a numer:");
// const parseInput = parseInt(input);

    if(!isNaN(input)){
        if(input % 2 === 0){
            alert(`${input} is even`);
        }
        else{
            alert(`${input} is odd`);
        }
    }
    else{
        alert("Not a valid input.")
    }
}

// function isEven(){
// alert(" is Even");
// }
// function isOdd(){
// alert(" is Odd");
// }

//get user input with another function

function getInput(){
    const input = prompt("Enter a numer:");
    const parseInput = parseInt(input);
    oddEven(parseInput);

}
// arrow function syntax
// const getinput = () => {

// }