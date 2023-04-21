/*
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
 **/
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge = 13;
if (runnerAge > 18 && earlyRegistration == true) {
  newRaceNumber = raceNumber + 1000;
  console.log(
    `race starts at 9.30am, your registartion number is ${newRaceNumber}`
  );
} else if (runnerAge > 18 && earlyRegistration == false) {
  console.log(
    `race starts at 11.00am, your registartion number is ${raceNumber}`
  );
} else if (runnerAge < 18) {
  console.log(
    `race starts at 12.30pm, your registartion number is ${raceNumber}`
  );
} else {
  console.log("please see the regisrtration desk at the front");
}
