/* 
Task 08: Function Composition
Write three functions: one to square a number, one to double a number, 
and one to add 5 to a number. Compose these functions to create a new 
function that squares a number, doubles the result, and then adds 5.
*/

const square = (num) => {
  return num * num;
}

const double = (num) => {
  return num * 2;
}

const addFive = (num) => {
  return num + 5;
}

const squareDoubleAddFive = (num) => {
  return addFive(double(square(num)));
}

console.log(squareDoubleAddFive(5));