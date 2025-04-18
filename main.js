
/* 1. Generate a random number between 1-3 :
        - Creat a function
        - Creat 2 variable : min and max
        - Logic : - math.floor ==> Rounds down to get an integer
                  - math.random ==> Genrate a decimal number between 0-1
                  - Multiply the result by the range of possible values from min to max, with +1 to ensure the result starts at min instead of 0.*/
            
/* 2. Add  Game values to computeur choice :
        - Use if, else if and else
        - 1 = Rock, 2 = Paper, 3 = Scissors 
        - Use console.log() to display the result*/

/* 3. Getting the user choice :
        - Use the prompt method foruser choice
        - Gettind the value of the user choice :
        1- Creat a prompt with the question and stock the result in a variable
        2- Use if, else if and else to attribute value for all responses (Rock, Paper, Scissors, null or "")*/      

/* 4. Created two variables for the computer and the human scores, and initialize them with a value of 0*/ 

/* 5. Created a function (playRound) to calculate result with 2 parameters : humanChoice and ComputerChoice :
        1 -Compare computerChoice and humanChoice for all possible outcomes to give a personalized response. (if, else if, else)
        2- Create a while loop to return to the prompt and get a result for 5 rounds 
        3- Add a log to display the current round 
        4- Created two variable (human and computeur) to call computerChoice and humanChoice function
        5-Add a condition to break the loop if the user gives no reponses
    
    6. Add logic to print the results and determine the winner :
        1.    */


                  



// ===> Generation of Computer choice : <===
   
function getComputerChoice() {
const randomNumber = Math.floor(Math.random() * 3) + 1;
      
if (randomNumber === 1) {
return "Rock";
} else if (randomNumber === 2) {
return "Paper";
} else {
return "Scissors";
}
}
// ==========================================================================================================

// ===> First try, this function return number but i was needed string return <===

// function getComputerChoice() {
// let min  = 1
// let max = 3
// return Math.floor(Math.random() * (max - min +1) + min)
// }

// if (getComputerChoice() === 1) {
// console.log("Rock !");
// } else if (getComputerChoice() === 2) {
// console.log("Paper !");
// } else {
// console.log("Scissors !");
// }
// ==========================================================================================================

// ===> Getting the user choice : <===

function getHumanChoice() {
const game = prompt("Rock ? Paper ? or Scissors ? Make your choice") 

if (game === null) {
return ("OK, maybe next time.");
} 

const choice = game.toLowerCase()

if (choice === "") {
return ("Oh, you must choose !");
}else if (choice=== "rock") {
return ("Rock"); 
} else if (choice === "paper") {
return ("Paper");
} else if (choice === "scissors"){
return ("Scissors");
} else {
return ("Invalid choice")
}
}
// ==========================================================================================================


function playGame() { // Global function of the game

// ===> Function to compare the results of getComputerChoice and getHumanChoice and determine a winner <===

    function playRound(humanChoice, computerChoice) {

    let humanScore = 0
    let computeurScore = 0
        
    console.log("Humain : " + humanChoice);
    console.log("Computer : " + computerChoice);

        if (humanChoice === computerChoice){
        console.log("Egality !");
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") { 
        console.log(" You win ! Rock beats Scissors !"); humanScore++;     
        } else if (computerChoice === "Rock" && humanChoice === "Scissors"){ 
        console.log(" You loose ! Rock beats Scissors !"); computeurScore++;

        } else if (humanChoice === "Paper" && computerChoice === "Rock"){ 
        console.log(" You win ! Paper beats Rock !"); humanScore++;    
        } else if (computerChoice === "Paper" && humanChoice === "Rock"){ 
        console.log(" You loose ! Paper beats Rock !"); computeurScore++;

        } else if (humanChoice === "Scissors" && computerChoice === "Paper"){ 
        console.log(" You win ! Scissors beats Paper !"); humanScore++;    
        } else if (computerChoice === "Scissors" && humanChoice === "Paper"){ 
        console.log(" You loose ! Scissors beats Paper !"); computeurScore++;
        
        } else {
        console.log("If you dont play, I win !");   
        }

console.log("Human Score : " + humanScore);
console.log("Computer Score : " + computeurScore); 

        }
   
// ==========================================================================================================

// ===> While loop to restart the game 5 times <===

for (let i = 1; i < 6; i++ ) {  
    console.log(`--- Round ${i} ---`);
    const human = getHumanChoice()
    const computer = getComputerChoice()

        if (human === null) {
            console.log("Invalid choice ! ");  
break;
        } 
playRound (human, computer)
}
// ==========================================================================================================

}
playGame()