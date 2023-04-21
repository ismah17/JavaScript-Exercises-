//note this is an exersice from codeacedemy.com
//forecast today is 293 Kelvin.
const Kelvin = 0;
/*Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.*/
const celsius = Kelvin - 293;
console.log(celsius);
const Fahrenheit = celsius * (9 / 5) + 32;
console.log(celsius);
// round the number saved to fahrenheit
const roundedFahrenheit = Math.floor(Fahrenheit);
console.log(roundedFahrenheit);
console.log(
  "The temperature is " + celsius + " degrees or " + roundedFahrenheit + " F"
);
//Convert celsius to the Newton scale
const Newton = celsius * (33 / 100);
const roundedNewton = Math.floor(Newton);
console.log(
  `The temperature is ${celsius} degrees or ${roundedNewton} newton.`
);
