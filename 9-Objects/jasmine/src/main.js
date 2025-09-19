const scoreBoard = { "The Best Ever": 1000000}
console.log(scoreBoard)

let newPlayerName = "Jesse";
let newPlayerScore = 250000;
scoreBoard[newPlayerName] = newPlayerScore;
console.log(scoreBoard)

let playerToRemove = "Jesse";
delete scoreBoard[playerToRemove];
console.log(scoreBoard)

let playerNameToUpdate = "The Best Ever";
let scoreToAdd = 2;
scoreBoard[playerNameToUpdate] += scoreToAdd;
console.log(scoreBoard)

let mondayBonus = 100;
for (key in scoreBoard){
    scoreBoard[key] += mondayBonus;
}
console.log(scoreBoard)