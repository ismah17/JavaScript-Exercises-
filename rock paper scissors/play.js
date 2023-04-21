console.log("hi");
const getUserChoise = (userInput) =>
  userInput === "rock" || userInput === "paper" || userInput === "scissors"
    ? userInput.toLowerCase()
    : false;
