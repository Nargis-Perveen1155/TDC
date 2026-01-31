console.log("hello world");
//* Part A: if-else Statements
//* Problem 1: Number Sign

let number = -5;
if (number > 0) {
  console.log("positive number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("zero");
}

//* Problem 2: Eligible for License

let age = 17;

if (age >= 18) {
  console.log("Eligible for licence");
} else {
  console.log("Not eligible");
}

//* Problem 3: Grade Calculator

let marks = 85;

if (marks >= 90) {
  console.log("grade A");
} else if (marks >= 80) {
  console.log("grade B");
} else if (marks >= 70) {
  console.log("grade C");
} else if (marks >= 60) {
  console.log("grade D");
} else {
  console.log("fail");
}

//* Part B: Logical Operators
//* Problem 4: Login System ? we can do with two types ?

let userName = "Admin";
let password = 12345;

if (userName == "Admin" && password == 12345) {
  console.log("Login successfull");
} else {
  console.log("Login failed");
}

//* Problem 5: Weekend Check

let day = "Monday";

if (day === "Saturday" || day === "Sunday") {
  console.log("weekend");
} else {
  console.log("weekday");
}

//* Problem 6: Ticket Pricing

let age1 = 25;

if (age1 < 12) {
  console.log("Ticket price: $5");
} else if (age1 >= 12 && age1 < 60) {
  console.log("Ticket price: $8");
} else if (age1 > 60) {
  console.log("Ticket price: $6");
}

// *Problem 7: Free Shipping

let orderTotal = 40;
let isPremium = true;

if (orderTotal > 50 || isPremium == true) {
  console.log("Free shiping");
} else {
  console.log("not free");
}

//*Part C: Nested Conditionals
//*Problem 8: Pass or Fail with Distinction

let marks1 = 75;

if (marks1 >= 33) {
  if (marks > 80) {
    console.log("Pass with distinction");
  } else {
    console.log("Pass");
  }
} else {
  console.log("Fail");
}

//* Problem 9: Temperature and Rain

let temperature = 25;
let isRaining = false;

if (temperature > 30) {
  console.log("Hot day");
} else if (temperature > 20 && temperature < 30) {
  if (isRaining == true) {
    console.log("Pleasant but rainy");
  } else {
    console.log("Perfect weather");
  }
} else if (temperature < 20) {
  console.log("Cold day");
}

//* Part D: Switch Statement
//* Problem 10: Day of Week

let dayNum = 3;

switch (dayNum) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Wrong input");
}

//* Problem 11: Traffic Light

let signal = "Yellow";

switch (signal) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

//* Problem 12: Month to Season

let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;
  default:
    console.log("Invalid input");
}

//* Part E: Truthy and Falsy
//* Problem 13: Username Check

let userName2 = "";

if (userName2) {
  console.log(`Welcome ${userName2}`);
} else {
  console.log("Please enter a username");
}

//* Problem 14: Score Check

let score = 0;
if (score) {
  console.log(score);
} else {
  console.log("Not score yet");
}

//* Part F: Combining Everything
//* Problem 15: Voting Eligibility

let age3 = 20;
let isCitizen = true;
let hasVoted = false;

if (age3 >= 10 && isCitizen == true && hasVoted == false) {
  console.log("can vote");
} else {
  console.log("cannot vote");
}

//* Problem 16: Discount Calculator

let total = 120;
let isPremium1 = false;
let discount;
let finalAmount;

if (isPremium == true) {
  discount = (total * 20) / 100;
  console.log("final amount", total - discount);
} else if (total > 100) {
  discount = (total * 15) / 100;
  console.log("final amount", total - discount);
} else if (total > 50) {
  discount = (total * 10) / 100;
  console.log("final amount", total - discount);
} else {
  console.log("no discount");
}

//* Problem 17: Number Checker
//* Write a program that checks if a numb

let num = 15;

if (num % 3 == 0 && num % 5 == 0) {
  console.log("FizzBuzz");
} else if (num % 3 == 0) {
  console.log("Fizz");
} else if (num % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(num);
}

//* Part G: User Interaction
//* Problem 18: Age Input

// let age2 = prompt("Enter age");
// if (age2 >= 18) {
//   alert("You can vote");
// } else {
//   alert("You cannot vote");
// }

//* Problem 19: Simple Calculator  why?

// let no1 = prompt("Enter first number");
// let no2 = prompt("Enter second number");
// let operator = prompt("Enter operators");
// let ans;

// switch (operator) {
//   case "+":
//     ans = no1 + no2;
//     alert("Your sum is", ans);
//     break;

//   case "-":
//     ans = no1 - no2;
//     alert("your differnce is", ans);
//     break;

//   case "*":
//     ans = no1 * no2;
//     alert("your product is ", ans);
//     break;

//   case "/":
//     ans = no2 / no1;
//     alert("your division ans is");
//     break;
// }


//* Problem 20: Number Guessing

let secretNumber = 7;
if(secretNumber === 7){
	console.log("Congratulation you guess correct !")
}
else if(secretNumber > 8){
console.log("You guess to high !")
}
else{
	console.log("you guess very low")
}

//* Part H: Challenge Problems
//* Problem 21: Golden String


let str = "Amazing";

if(str[0] == "A" && str[0] == "a" && str.length > 5){
	console.log("Golden string")

}
else{
	console.log("Not Golden")
}

//*Problem 22: Largest of Three

let num1 = 45;
let num2 = 67;
let num3 = 500;

if(num1 > num2 && num1 > num3){
	console.log("largest", num1)
}
else if(num2 > num1 && num2 > num3){
	console.log("largest", num2)
}
else{
	console.log("largest", num3)
}

//* Problem 23: Quarterly Months

let quarter = 2;

switch(quarter){
	case 1 : console.log("January, February, March");
	break;
	case 2 : console.log("April, May, June");
	break;
	case 3 : console.log("July, August, September");
	break;
	case 4 : console.log("octoer, November, December");
	break;
}

//* Problem 24: Divisibility by 10

// let numberr = prompt("Enter a number");
// if(numberr % 10 == 0){
// 	console.log("Good")
// }
// else{
// 	console.log("Bad")
// }

//*Problem 25: Multiple of 7

let nums = 14;

if(nums % 7 == 0 && nums % 2 == 0){
	console.log("Special number")
}
else if(nums % 7 == 0 && nums % 2 == 1){
	console.log("Lucky number")
}
else if(nums % 7 != 0){
	console.log("Regular Number")
}