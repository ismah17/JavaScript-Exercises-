let userName = "Jabe";
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

let userQuestion = "this";
console.log(`${userName} asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    console.log(eightBall);
    break;
  case 1:
    eightBall = "It is decidedly so";
    console.log(eightBall);
  case 2:
    eightBall = "Reply hazy try again";
    console.log(eightBall);
  case 3:
    eightBall = "Cannot predict now";
    console.log(eightBall);
  case 4:
    eightBall = "Do not count on it";
    console.log(eightBall);
  case 5:
    eightBall = "My sources say no";
    console.log(eightBall);
  case 6:
    eightBall = "Outlook not so good";
    console.log(eightBall);
  case 7:
    eightBall = "Signs point to yes";
    console.log(eightBall);
  default:
    console.log("error");
}
