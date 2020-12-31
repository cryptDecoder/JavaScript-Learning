// Function is a list of statement that use for reusability

function greet() {
  console.log("====================================");
  console.log("This is a function");
  console.log("====================================");
}
greet();

//input in function / parameter in function

function greetName(name) {
  console.log("====================================");
  console.log("Hello " + name);
  console.log("====================================");
}

greetName("John");
greetName("Merry");

// Multiple parameter

function addition(number1, number2) {
  console.log("====================================");
  console.log("Addition of number is :" + (number1 + number2));
  console.log("====================================");
}

addition(10, 23);

// types of function

// calculating the values

function square(number) {
  return number * number;
}
let value = square(2);
console.log("====================================");
console.log("Square of the number :" + value);
console.log("====================================");
