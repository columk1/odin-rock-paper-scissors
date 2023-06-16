const moves = {0: 'rock', 1: 'paper', 2: 'scissors'};
const outcomes = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];
const input = prompt("3...2...1...").toLowerCase();

player = Object.keys(moves)[Object.values(moves).indexOf(input)];
computer = getComputerChoice();

function getComputerChoice() {
    let randomIndex = Math.round((Math.random() * 10)) % 3;
    return [randomIndex];
}

function playRound(player, computer) {
    if(player && computer) {
        return outcomes[player][computer];
    } else {
        throw new Error("Must choose 'rock', 'paper' or 'scissors'.");
    }
}

// Debugging
console.log(moves[player]);
console.log(moves[computer]);
console.log(playRound(player, computer));

