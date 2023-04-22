console.log("hi");
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Wrong!";
  }
};
//getUserChoise("PAPER");

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won!";
    } else {
      return "Computer won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "You won!";
  }
}
const playGame = () => {
  const userChoice = getUserChoice("pAPER");
  console.log(`User choise is ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log("computer choise is " + computerChoice);
  console.log("result: " + determineWinner(userChoice, computerChoice));
};
playGame();
