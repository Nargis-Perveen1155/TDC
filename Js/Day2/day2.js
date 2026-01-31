//* Part A: Identifiers and Naming
//* Problem 1: Valid or Invalid?


// a) firstName - it is valid according to rule starting from a letter
// b) 2ndPlace  - it is not valid bcz starting from digit
// c) user_email _______ it is valid
// d) total--price _______ not valid hyphen cannot use
// e) $amount _______ valid
// f) my variable _______ not valid due to space
// g) _privateData _______ valid
// h) let _______ not valid it is a reserved keyword

// *Problem 2: Fix the Variable Names

let userName = "Alice";
let prize1 = 1000;
let totalCost = 250;
let userAge = 25;

//* Problem 3: Naming Convention Practice

let email = "nargis360@gmail.com";
let isLoggedIn = true;
const maxAttempt = 3;
const finalGrade = 85;
const productPriceIn$ = 99.99;

//* Part B: Booleans and Data Types
//* Problem 4: Boolean Practice

let isItRaining = false;
let isPasswordCorrect = true;
let isAdult = true;

// *Problem 5: Dynamic Typing

let x = 10;
console.log(typeof x); // Prediction: number_______________
x = "Hello";
console.log(typeof x); // Prediction: string_______________
x = true;
console.log(typeof x); // boolean


// *Part C: Strings and Indexing
//* Problem 6: String Indexing

let language = "Javascript";
// What is the first character?
// language[0] = J
// What is the character at index 4?
// language[4] = s
// What is the last character? (use length)
// language[length-1] =t
//  What is the length of the string?
// language.length = 10

// *Problem 7: String Creation

let message1 = "hi evereyone";
let message2 = "it's a sunny day";
let message3 = "Hello!"

//* Problem 8: String Concatenation

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + lastName
console.log(fullName)

let greeting = "hello" + fullName
console.log(greeting)

let age = 25;

let info = `${firstName} is ${age} years old`
console.log(info)

//* Part D: Template Literals
//* Problem 9: Convert to Template Literals

let name = "Alice";
let score = 95;
// let message = "Student " + name + " scored " + score + " points.";

let message = `Student ${name} scored ${score} points`;
console.log(message)

let product = "Laptop";
let price = 999;
let quantity = 2;
let total = price * quantity;
// let receipt = "Item: " + product + ", Quantity: " + quantity + ", Total: $" + total;

let receipt = `Item: ${product} Quantity: ${quantity} Total:$ ${total}`




//* Problem 10: Template Literal Practice

let cityName = "Paris";
let temperature = 25;

let weather = `The tempreature in ${cityName} is ${temperature}`
console.log(weather)

let hourOfDay = 14;
let userName1 = "Bob";

let greeting1 = `Good afternoon ${userName1}!, it's ${hourOfDay}`

console.log(greeting1)


//* Part E: Null and Undefined
//* Problem 11: Null vs Undefined


let score1;
console.log(score); // Output: undefined

// let winner = 
// console.log("winner",winner); // Output: it will give error

let user = { name: "Alice" };
console.log("userage",user.age); // Output: undefine

//* Part F: Comparison Operators
//* Problem 12: Predict the Output

console.log(10 > 5); // true
console.log(3 < 2); // false
console.log(5 >= 5); // true
console.log(8 <= 10); // true
console.log(7 != 7); // false
console.log(15 > 20);//false

//* Problem 13: Write Comparisons

let age_ = 18;

console.log(age >= 18) //true

let tempreature = 30;
console.log(tempreature >= 25)

let score_ = 75 ;
console.log(score < 60)


//* Part G: Loose vs Strict Equality
//* Problem 14: == vs ===

console.log(5 == 5); // true
console.log(5 === 5); // true
console.log(5 == "5"); //true
console.log(5 === "5"); // false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(0 == false); // true
console.log(0 === false) // false

// *Problem 15: Fix the Code

// let userInput = "10";
// if (userInput == 10) {
//  console.log("Input is 10");
// }

let userInput = "10"
if(userInput === 10){
	console.log("Input is 10")
}


// *Part H: String Comparison
// *Problem 16: String Comparison Prediction

console.log('a' > 'A'); // true 
console.log('b' < 'c'); //  true
console.log('apple' < 'banana'); // true
console.log('Z' < 'a'); //  true
console.log("10" < "2"); // true why ?

//* Problem 17: Case-Insensitive Comparison

let str1 = "Hello";
let str2 = "HELLO";

console.log("compppp",str1 > str2)

//* Part I: Practical Challenges
//* Problem 18: User Greeting

let userName_ = "Sarah";
let hour = 9; // 9 AM

let greeting__ = `Good Morning , ${userName_}!`
console.log(greeting__)

//* Problem 19: Age Checker

let userAge_ = 16;
let minimumAge = 18;
let isOldEnough = userAge == minimumAge

console.log("isOldEnough",isOldEnough)

//* Problem 20: Email Validator

let email_ = "alce@example.com"
// Get the first character
let firstChar = email[0];
console.log(firstChar)
// Check if it's a lowercase letter (between 'a' and 'z')
let isValid = email <= 'a' && email <= 'z'
console.log("checkk",isValid);

//* Problem 21: String Builder

let productName = "Wireless Mouse";
let productPrice = 29.99;
let inStock = true;
// Create: "Product: Wireless Mouse | Price: $29.99 | In Stock: true"
let description = `Product: ${productName}| Price: $ ${productPrice}| In Stock: ${inStock}`
console.log(description);

//* Problem 22: Initial Generator

let firstName1 = "John";
let middleName1 = "Robert";
let lastName1 = "Smith";
// Create initials: "J.R.S."
let initials = `${firstName1[0]}.${middleName1[0]}.${lastName1[0]}`
console.log("initial letter",initials);

//*Part J: Debugging Practice
//*Problem 23: Find and Fix Errors

// Code with errors:
let firstPlace = "Gold";
let userNames = "Alice";
let total_cost = 100;
if (age >= 18) {
 console.log("You can vote");
}
let messages = "It's a beautiful day"


//*Problem 24: Logic Error

let userInputs = "25";
if (userInputs == 25) {
 console.log("Input is correct");
} else {
  console.log("Input is incorrect");
}

//* Bonus Challenge
//* Problem 25: Password Validator

let password = "Pass123";

console.log("isLongEnough", password.length >= 6)

let startsWithUppercase = password[0]=='A' && password[0] =='Z'
let endsWithNumber = password.length-1 == '0' && password.length-1 == '9'

console.log("Password is long enough:", isLongEnough);
console.log("Starts with uppercase:", startsWithUppercase);
console.log("Ends with number:", endsWithNumber);




