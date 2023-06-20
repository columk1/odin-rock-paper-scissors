/*
A game of rock paper scissors playable in the console. 
The Odin Project: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
*/


// Declare object variable with the 3 handsign choices and a matrix for calculating the outcome of a game
const moves = ['rock', 'paper', 'scissors'];
const outcomes = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];

// Game state variables
let playerScore = 0;
let computerScore = 0;
let winner = "";

// Play round. Returns an integer result. 1, -1 or 0 (win, loss or draw)
function playRound(player) {
    if (moves.includes(player)) {
        let computer = moves[getRandom(3)];
        // Assign integer to indicate win, loss or draw based on the outcomes matrix
        result = outcomes[moves.indexOf(player)][moves.indexOf(computer)];
        // Assign string values of each player's move
        returnStr = "";
        switch(result) {
            case -1:
                computerScore++;
                returnStr = "You Lose! " + capitalizeFirstLetter(computer) + " beats " + capitalizeFirstLetter(player) + ".";
                break;
            case 1:
                playerScore++;
                returnStr = "You Win! " + capitalizeFirstLetter(player) + " beats " + capitalizeFirstLetter(computer) + ".";
                break;
            case 0:
                returnStr = "Draw! " + capitalizeFirstLetter(player) + " vs " + capitalizeFirstLetter(computer) + ".";
                break;
        }
        // Display the outcome of the round in the console div
        document.getElementById("console").textContent = returnStr;

        // Logic to end the game
        if (playerScore == 5 || computerScore == 5) {
            playerScore > computerScore ? winner = "You Win!" : winner = "Computer Wins!";
            playerScore = 0;
            computerScore = 0;
            // Display winner in console div
            document.getElementById("console").textContent = winner;
        }
        // Display scores in score divs
        document.getElementById("score1").firstElementChild.textContent = playerScore;
        document.getElementById("score2").firstElementChild.textContent = computerScore;
        
        return result;
    } else {
        throw new Error("Must choose 'rock', 'paper' or 'scissors'.");
    }
}

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// Get a random number between 1 and the max parameter
function getRandom(max) {
    let randomIndex = Math.round((Math.random() * 10)) % max;
    return [randomIndex];
}

// Add event listeners to buttons and play a round when clicked
const buttons = document.querySelectorAll('.move');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.id)));


/*
Original function to play 5 games and declare a winner

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = "";

    for(let i = 0; i < 5; i++) {
        // Prompt user for their choice
        const input = prompt("3...2...1...").toLowerCase();
        // Assign an integer value based on input
        player = input;
        // Assign a random integer value
        //* computer = moves[getRandom(3)];

        result = playRound(player);

        // Update and print score
        result == 1 ? playerScore++ : result == -1 ? computerScore++ : result;
        console.log(playerScore + " : " + computerScore);
    }
    playerScore == computerScore ? winner = "It's a Draw!" : playerScore > computerScore ? winner = "You Win!" : winner = "Computer Wins!";
    console.log(winner);
}

game();
*/
