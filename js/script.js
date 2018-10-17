// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************


//GLOBAL VARIABLES



// DOCUMENT READY FUNCTION BELOW


/* 

[ ] Outside of your click handler, declare a randomNumber variable
and set it equal to 0

[ ] In your click handler, generate a random number and assign it to
the randomNumber variable

[ ] In your click handler, store the input value in the userChoice
variable

[ ] In your click handler, display userChoice to the screen */


$(document).ready(function() {
    
    var userChoice = "";
    var computerChoice = "";
    var winner = "";
    var randomNumber = 0;
    
    $("#shoot").click(function() {
        var userInput = $("#input").val();
        randomNumber = Math.floor((Math.random() * 3) + 1); // range: btwn 1-3 inclusive
        if ((userInput === "rock") || (userInput === "paper") || (userInput === "scissors")) {
            userChoice === userInput;
            $("#userChoice").text(userInput);
            $("#result").text("");
        }
        else {
            $("#userChoice").text("");
            $("#computerChoice").text(" ");
            $("#result").text("Please enter 'rock,' 'paper,' or 'scissors'");
        }
        if (randomNumber === 1) {
            computerChoice = "rock";
            $("#computerChoice").text(computerChoice);
        }
        else if (randomNumber === 2) {
            computerChoice = "paper";
            $("#computerChoice").text(computerChoice);
        }
        else if (randomNumber === 3) {
            computerChoice = "scissors";
            $("#computerChoice").text(computerChoice);
        }
        if (computerChoice === "paper") {
            if (userInput === "paper") {
                $("#result").text("Tie - No one wins");
            }
            else if (userInput === "scissors") {
                $("#result").text("Player wins");
            }
            else if (userInput === "rock") {
                $("#result").text("Computer wins");
            }
        }
        if (computerChoice === "rock") {
            if (userInput === "rock") {
                $("#result").text("Tie - No one wins");
            }
            else if (userInput === "paper") {
                $("#result").text("Player wins");
            }
            else if (userInput === "scissors") {
                $("#result").text("Computer wins");
            }
        }
        if (computerChoice === "scissors") {
            if (userInput === "scissors") {
                $("#result").text("Tie - No one wins");
            }
            else if (userInput === "rock") {
                $("#result").text("Player wins");
            }
            else if (userInput === "paper") {
                $("#result").text("Computer wins");
            }
        }
    });
});