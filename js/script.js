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
    
    $("#shoot").click(function() {
        $("#userChoice").text($("#input").val());
    });
    
    var userChoice = "";
    var computerChoice = "";
    var winner = "";
    var randomNumber = 0;
    
});