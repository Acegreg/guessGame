const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const guessGame = function (input) {
  const randomNum = Math.floor(Math.random() * 10) + 1;

  if (+input === randomNum) {
    console.log("You won! \n");
    rl.question("Guess a number between 1 and 10: ", guessGame);
  } else if (input === "exit") {
    rl.close();
  } else {
    console.log(`You lost! The number is ${randomNum} \n`);
    rl.question("Guess a number between 1 and 10: ", guessGame);
  }
};

rl.question("Guess a number between 1 and 10: ", guessGame);
