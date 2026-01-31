console.log("hellow world")

//* example - 1
let driverAge = 20;

if(driverAge >= 18){
	console.log("eligible for licence")
}
else{
	console.log("not eligible")
}

//* example-2

let temp = 30;

if(temp > 30){
	console.log("its hot today")
}
else{
	console.log("not hot")
}

//*example-3

let pass = "secure123"

if(pass.length >= 8){
	console.log("strong password")
}
else{
	console.log("not secure")
}

//*example -4

let score = 50;
if(score >= 90){
	console.log("grade A+")
}
else if(score >= 75){
	console.log("grade A")
}
else if(score >= 60){
	console.log("grade B")
}
else if(score >= 30){
	console.log("grade C")
}

//*example - 5

let speed = 85;

if(speed > 100){
	console.log("severe speeding -  heavy speed")
}
else if(speed > 80){
	console.log("speeding warning")
}
else if(speed > 60){
	console.log("speed normal")
}

//*example-6

let age = 35;

if(age >= 60){
	console.log("senior citizen")
}
else if(age >= 18){
	console.log("adult")
}
else if(age >= 13){
	console.log("teenager")
}

//* example-7

let num = 5;

if(num>0){
	console.log("greater than 10")
}
else if(num > 30){
	console.log("greater than 30")
}
else if(num > 40){
	console.log("greater than 40")
}

//*Example 1: Voting Eligibility

let age2 = 16
if(age2 >= 18){
	console.log("eleigible for vote")
}
else {
	console.log("not eligible")
}

//* Example 2: Even or Odd

let numb = 7;
if(numb % 2 == 0){
	console.log("even no")
}
else{
	console.groupEnd("odd number")
}


//* Example 3: Complete Chain

let tempreature  = 30;

if(tempreature > 30){
	console.log("Hot")
}
else if(tempreature > 20){
	console.log("warm")
}
else if(tempreature > 10){
	console.log("cool")
}
else{
	console.log("cold")
}

//* Example 4: Login System

let userName = "admin";
let password = "1234"

if(userName == "admin" && password == "1234"){
	console.log("Login successful")
}
else{
	console.log("Invalid credential")
}

//*Nested Conditionals
//*Example 1: Exam Results

let marks = 80;
if(marks >= 33){
	if(marks >= 80){
		console.log("outstanding")
	}
	else{
		console.log("Pass")
	}
}
else{
	console.log("Better luck next time")
}

//* Example 2: Age and Ticket Pricing

let age3 = 25;
let isStudent = true;
if (age3 < 18) {
 console.log("Child ticket: $5");
} else {
 if (isStudent) {
 console.log("Student ticket: $8");
 } else {
 console.log("Adult ticket: $12");
 }
}

//*Example 3: Number Classification

let numm = 5;
if(numm > 0){
	if(num % 2 == 0){
		console.log("positive even number")
	}
	else{
		console.log("positive odd number")
	}
}
else if(numm < 0){
	console.log("negative number")
}
else{
	console.log("zero")
}
//* Example 1: Driver Eligibility

let driverAge2 = 58;
let hasLicence = true

if(driverAge2 >= 18 && hasLicence){
	console.log("can drive")
}
else{
	console.log("cannot drive")
}

//*Example 2: Grade Range

let score3 = 85;
if (score3 >= 80 && score3 <= 100) {
 console.log("Grade A");
}

//*Example 3: Login Validation

let userName4 = "admin";
let passw = "secure123"

if(userName4 === "admin" && passw === "secure123"){
	console.log("access granted")
}
else{
	console.log("access denied")
}

//*Example 4: Weekend and Good Weather

let isWeekend = true;
let isSunny = true;
if (isWeekend && isSunny) {
 console.log("Let's go to the beach!");
}

//* 2. Logical OR ( || )
//* Returns true if AT LEAST ONE condition is true.

let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
 console.log("It's the weekend!");
}

//*Example 1: Not Logged In

let isLoggedIn = false;

if(!isLoggedIn){
	console.log("logged in please")
}

//* weekend

let isWeekend2 = false;

if(!isWeekend){
	console.log("tim eto wrk")
}

//*Example 4: Not Empty

let userName5 = "";
if (!userName5) {
 console.log("Username is required");
}


//* Combining Logical Operators
//* Example 1: Voting Eligibility

let age5 = 25;
let isCitizen5 = true;
let hasVoted5 = false;
if(age5 >= 18 && isCitizen5 == true && !hasVoted5){
	console.log("elegible for vote")
}

//*Example 2: Discount Eligibility

let age6 = 70;
let isStudent6 = false;
if (age6 > 60 || isStudent6) {
 console.log("10% discount applies");
}

//*Example 3: Access Control

let isAdmin = false;
let isModerator = true;
let isOwner = false;

if(isAdmin || isModerator || isOwner){
	console.log("access granted")
}
//*Example 4: Complex Validation 

let temperature = 25;
let isRaining = false
if(temperature > 20 && temperature<30 && !isRaining){ //why?
	console.log("perfect weather for picnic")
}

//*Example 1: Checking Strings

let username = "";
if (username) {
 console.log("Welcome, " + username);
} else {
 console.log("Please enter a username");
}

//*Example 2: Checking Numbers

let score1 = 0;
if (score1) {
 console.log("You have " + score + " points");
} else {
 console.log("No points yet");
}
//*Example 3: Multiple Checks

if ("hello") {
 console.log("Truthy!"); // This runs
}
if (0) {
 console.log("This won't run"); // 0 is falsy
}
if ("") {
 console.log("This won't run"); // Empty string is falsy
}
if ([]) {
 console.log("Arrays are truthy!"); // This runs
}

//*Example 4: Practical Use

let userInput = prompt("Enter your name:");
if (userInput) {
 alert("Hello, " + userInput);
} else {
 alert("You didn't enter a name");
}

//*Example 1: Traffic Light

let signal = "yellow";
switch(signal) {
 case "red":
 console.log("Stop");
 break;
 case "yellow":
 console.log("Caution");
 break;
 case "green":
 console.log("Go");
 break;
 default:
 console.log("Invalid Signal");
}

//* Example 2: Day of the Week
let day1 = 3;
switch(day1) {
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
 default:
 console.log("Weekend");
}
//* Example 3: Multiple Cases for Same Code

let day5 = "Saturday";
switch(day5) {
 case "Saturday":
 case "Sunday":
 console.log("Weekend!");
 break;
 case "Monday":
 case "Tuesday":
 case "Wednesday":
 case "Thursday":
 case "Friday":
 console.log("Weekday");
 break;
 default:
 console.log("Invalid day");
}
//* Example 4: Grade Feedback

let grade = "B";
switch(grade) {
 case "A":
 console.log("Excellent work!");
 break;
 case "B":
 console.log("Good job!");
 break;
 case "C":
 console.log("You passed");
 break;
 case "D":
 console.log("Needs improvement");
 break;
 case "F":
 console.log("Failed");
 break;
 default:
 console.log("Invalid grade");
}

//* Example 5: What Happens Without

let signal5 = "yellow";
switch(signal5) {
 case "yellow":
 console.log("Caution");
 case "green":
 console.log("Go");
 break;
 default:
 console.log("Invalid");
}

//* Example 2: With Variables
let userName2 = "Alice";
alert("Hello, " + userName + "!");


//*Example 3: With Template Literals

let score2 = 95;
alert(`Your score is ${score2}!`);

alert("File has been deleted successfully");

let variable = prompt("Your question");

//*Important: Type Conversion

let age_ = prompt("Enter your age:");
console.log(typeof age_); // "string"
// Convert to number
let ageNum = Number(age_);
console.log(typeof ageNum); // "number"

//*Example 1: Getting a Name

let userName_ = prompt("What is your name?");
console.log("Hello, " + userName_);

//* Example 2: Getting Age with Conversion

let ageStr = prompt("Enter your age:");
let age12 = Number(ageStr);
if (age12 >= 18) {
 alert("You are an adult");
} else {
 alert("You are a minor");
}


//* Example 4: Calculator

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let sum = num1 + num2;
alert(`The sum is: ${sum}`);

//*Example 1: Temperature Check

let temp2 = Number(prompt("What's the temperature?"));
if (temp2 > 30) {
 alert("It's hot!");
} else if (temp2 > 20) {
 alert("It's warm");
} else {
 alert("It's cold");
}

//*Example 2: Grade Calculator

let score123 = Number(prompt("Enter your score:"));
let grade123;
if (score123 >= 90) {
 grade = "A";
} else if (score123 >= 80) {
 grade = "B";
} else if (score123 >= 70) {
 grade = "C";
} else {
 grade = "F";
}
alert(`Your grade is: ${grade}`);

//* Example 3: Simple Login

let userName123 = prompt("Enter username:");
let password123 = prompt("Enter password:");
if (userName123 === "admin" && password123 === "1234") {
 alert("Login successful!");
} else {
 alert("Invalid credentials");
}

//*Example 4: Number Guessing

let secretNumber = 7;
let guess = Number(prompt("Guess the number (1-10):"));
if (guess === secretNumber) {
 alert("Correct! You won!");
} else {
 alert("Wrong! The number was " + secretNumber);
}

//*Practice Examples
//* Example 1: Divisibility Checker

let num12 = Number(prompt("Enter a number:"));
if (num12 % 10 === 0) {
 console.log("Good");
} else {
 console.log("Bad");
}


//* Example 2: User Profile
let name123 = prompt("What is your name?");
let age123 = prompt("What is your age?");
alert(`${name} is ${age} years old.`);

//*Example 3: Quarterly Months

let quarter = Number(prompt("Enter quarter (1-4):"));
switch(quarter) {
 case 1:
 console.log("January, February, March");
 break;
 case 2:
 console.log("April, May, June");
 break;
 case 3:
 console.log("July, August, September");
 break;
 case 4:
 console.log("October, November, December");
 break;
 default:
 console.log("Invalid quarter");
}
//*Example 4: Golden String

let str = prompt("Enter a string:");
if ((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
 console.log("Golden string!");
} else {
 console.log("Not a golden string");
}


