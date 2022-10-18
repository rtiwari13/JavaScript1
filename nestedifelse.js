//nested if else

let winningNumber = 19;
let userGuess =  +prompt("Guess a number");
  
console.log(typeof userGuess , userGuess);
 if(userGuess=== winningNumber){
    console.log("Your guess is right");
 }else{
    if(userGuess < winningNumber){
        console.log("too low ....");
    }
    else{
        console.log("too high");
    }
 }