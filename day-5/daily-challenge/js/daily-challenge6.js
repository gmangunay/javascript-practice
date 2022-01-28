function oddEven(){
const input = prompt("Enter a numer:");
const parseInput = parseInt(input);

    if(!isNaN(parseInput)){
        if(parseInput % 2 === 0){
            alert(`${parseInput} is even`);
        }
        else{
            alert(`${parseInput} is odd`);
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