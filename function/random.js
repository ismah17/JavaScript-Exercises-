const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

/**Above is an expression function, notice how the result is stotred in a variable and no name of the function is defined as usual, another way to write a function is use arrow functions as below, notice it eleminates the need to write the word "funtion" everytime a funtion is declared */

const platNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

const pantNeedsWater = (day) => (day === "Wednesday" ? true : false);
/**
 
 
 * const squareNum = (num) => {
  return num * num;
};
* refactor to Concise Body Arrow Function as below
 *  const squareNum = num => num * num;
 * The parentheses around num have been removed, since it has a single parameter.
The curly braces { } have been removed since the function consists of a single-line block.
The return keyword has been removed since the function consists of a single-line block.
 */
