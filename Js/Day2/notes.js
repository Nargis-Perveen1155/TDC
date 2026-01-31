console.log("day 2 notes")

let userName123;
let _privateVariable;
let $specialValue;
let total_AMOUNT;

let userAge = 25;
let userage = 30;
let UserAge = 35;
let USERAGE = 40;

console.log(userAge); // 25
console.log(userage); // 30
console.log(UserAge); // 35
console.log(USERAGE); // 40

let userName = "Alice";
let totalPrice = 99.99;
let isLoggedIn = true;
let calculateTotalCost = function() { };
let getUserInfo = function() { };

let firstName = "John";
let lastName = "Doe";
let dateOfBirth = "1990-01-01";
let emailAddress = "john@example.com";
// Functions
function calculateAge(birthYear) {
 return 2024 - birthYear;
}
function sendEmailNotification(email, message) {
 // code here
}

let user_name = "Alice";
let total_price = 99.99;
let is_logged_in = true;
let calculate_total = function() { };

class UserAccount {
 constructor(name) {
 this.name = name;
 }
}
class ShoppingCart {
 // class code
}
// React Components
function UserProfile() {
 return <div>Profile</div>;
}

const MAX_LOGIN_ATTEMPTS = 3;
const API_KEY = "abc123xyz";
const PI = 3.14159;
const DATABASE_URL = "mongodb://localhost:27017";
// Bad - unclear names
let x = 25;
let y = "John";
let z = true;
// Good - descriptive names
let userAge1 = 25;
let firstName2 = "John";
let isEmailVerified = true;
// Bad - too short
let fn = "Alice";
let ln = "Smith";
// Good - clear and readable
let firstName1 = "Alice";
let lastName1 = "Smith";
// Bad - abbreviations
let usrAddr = "123 Main St";
let empSal = 50000;
// Good - spelled out
let userAddress = "123 Main St";
let employeeSalary =50000


let isLoggedIn0 = true;
let isOver18 = false;
let hasPermission = true;
let isEmailVerified0 = false;

let isStudent = true;
if (isStudent) {
 console.log("Student discount applied!");
} else {
 console.log("Regular price.");
}

let age = 20;
let isAdult = age >= 18; // true
console.log(isAdult); // true
let score = 75;
let isPassing = score >= 60; // true
let isFailing = score < 60; // false
let temperature = 30;
let isHot = temperature > 25; // true
let isCold = temperature < 10; // false


let isMenuOpen = false;
let isDarkMode = true;
let isPlaying = false;
// User states
let isLoggedIn2 = true;
let isAdmin = false;
let isVerified = true;
// Feature flags
let isFeatureEnabled = true;
let isBetaUser = false;
// Validation
let isEmailValid = true;
let isPasswordStrong = false;
let isFormComplete = true;

// false
// 0
// "" (empty string)
// null
// undefined
// NaN

if (0) {
 console.log("This won't run"); // 0 is falsy
}
if (1) {
 console.log("This will run"); // 1 is truthy
}
if ("hello") {
 console.log("This will run"); // non-empty string is truthy
}

let x1 = 5; // x is a number
console.log(typeof x1); // "number"
x = "hello"; // Now x is a string - ALLOWED!
console.log(typeof x); // "string"
x = true; // Now x is a boolean - ALLOWED!
console.log(typeof x); // "boolean"
x = [1, 2, 3]; // Now x is an array - ALLOWED!
console.log(typeof x); // "object"

function addNumbers(a, b) {
 return a + b;
}
console.log(addNumbers(5, 10)); // 15 
console.log(addNumbers("5", 10)); // "510" 
console.log(addNumbers(5, "10")); 

let userAge12 = 25;
userAge12 = "twenty-five"; // Allowed but probably not intended
userAge12 = null; // Allowed but might break calculations
function calculateDiscount(age) {
 return age*0.1
}

let firstName3 = 'Alice';
let greeting = 'Hello, World!';
let message = 'It\'s a beautiful day';

let firstName5 = "Alice";
let greeting5 = "Hello, World!";
let message5 = "She said, \"Hello!\""

let message1 = "It's a beautiful day"; // ✓ Works!
let message2 = "He said, 'Hello there!'"; // ✓ Works!
// Use single quotes on outside, double quotes inside
let message3 = 'She said, "Good morning!"'; // ✓ Works!
let message4 = 'The word "hello" is friendly'; 


let message11 = `It's a beautiful day`; // ✓ Works!
let message22 = `She said, "Good morning!"`; // ✓ Works!
let message33 = `Use 'any' "quotes" you want!`


let name = "Alice";
console.log(name.length); // 5
let message55 = "Hello, World!";
console.log(message55.length); // 13
let empty = "";
console.log(empty.length); // 0


let text = "Hello, World!";
// Convert to uppercase
console.log(text.toUpperCase()); // "HELLO, WORLD!"
// Convert to lowercase
console.log(text.toLowerCase()); // "hello, world!"
// Extract part of string
console.log(text.slice(0, 5)); // "Hello"
// Replace text
console.log(text.replace("World", "JavaScript")); // "Hello, JavaScript!"


let newLine = "First line\nSecond line";
console.log(newLine);
// Output:
// First line
// Second line
let tab = "Name:\tAlice";
console.log(tab);
// Output: Name: Alice
let backslash = "This is a backslash: \\";
console.log(backslash);
// Output: This is a backslash: \
let quote = "She said, \"Hi!\"";
console.log(quote);
// Output: She said, "Hi!"


let city = "London";
console.log(city[0]); // "L" - first character
console.log(city[1]); // "o" - second character
console.log(city[2]); // "n" - third character
console.log(city[3]); // "d" - fourth character
console.log(city[4]); // "o" - fifth character
console.log(city[5]); // "n" - sixth (last) character


let word = "JavaScript";
// First character
let first = word[0];
console.log(first); // "J"
// Last character using length
let last = word[word.length - 1];
console.log(last); // "t"
// Why length - 1?
// Because length is 10, but last index is 9 (0-based indexing)
console.log(word.length); // 10
console.log(word[9]); // "t"
console.log(word[10]); // undefined (out of bounds)


let name_ = "Alice"; // length is 5, valid indices: 0-4
console.log(name_[0]); // "A" ✓
console.log(name[4]); // "e" ✓
console.log(name[5]); // undefined (no character at index 5)
console.log(name[10]); // undefined
console.log(name[-1]); // undefined (negative indices don't work like Python)

let email = "alice@example.com";
if (email[0] === '@') {
 console.log("Email cannot start with @");
} else {
 console.log("Email format might be valid");
}

let firstName55 = "Alice";
let lastName55 = "Smith";
let initials = firstName55[0] + lastName55[0];
console.log(initials); // "AS"
// With dots
let formalInitials = firstName[0] + "." + lastName[0] + ".";
console.log(formalInitials); // "A.S."

let password = "Pass123";
let firstChar = password[0];
let lastChar = password[password.length - 1];
console.log("First character:", firstChar); // "P"
console.log("Last character:", lastChar); // "3"
if (lastChar >= '0' && lastChar <= '9') {
 console.log("Password ends with a number");
}

let word1 = "Hello";
word1[0] = "J"; // This does NOT work!
console.log(word); // Still "Hello"
// To "change" a string, create a new one
let newWord = "J" + word.slice(1);
console.log(newWord); // "Jello"




let text2 = "Hello";
console.log(text2.length); // 5
console.log(text[text.length]); // undefined (index 5 doesn't exist)
console.log(text[text.length - 1]); // "o" (correct last character)


let text1 = "Hello World";
console.log(text1.length); // 11 (space counts!)
console.log(text[5]); // " " (space character)