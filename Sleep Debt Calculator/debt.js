const getSleepHours = (day) => {
  switch (day) {
    case "Sunday":
      return 6;
    case "Monday":
      return 7;
    case "Tuesday":
      return 7;
    case "Wednesday":
      return 6;
    case "Thursday":
      return 8;
    case "Friday":
      return 9;
    case "Saturday":
      return 7;
  }
};

//console.log(getSleepHours("Friday"))
const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

//console.log(getActualSleepHours())
//console.log(idealSlpeepHours())
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("you got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "you got " +
        actualSleepHours -
        idealSleepHours +
        " more hours of sleep than needed."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You should get some rest since you slept " +
        (idealSleepHours - actualSleepHours) +
        " hours less this week."
    );
  }
};
calculateSleepDebt();
