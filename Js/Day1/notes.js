console.log("hellow world")
let name = "Tony Stark"; // Double quotes
let greeting = 'Hello World'; // Single quotes
let message = `Welcome, ${name}`; // Template literals (backticks)

let age = 23;
let info = `I am ${age} years old`; // Output: "I am 23 years old"

let isStudent = true;
let isLoggedIn = false;
let hasPermission = true;
// Often used in conditions
if (isStudent) {
 console.log("Student discount applied!");
}

let score;
console.log(score); // Output: undefined
console.log(typeof score); // Output: "undefined"
// This is different from not declaring a variable at all
console.log(randomVar); // Error: randomVar is not defined

let data = null; // Explicitly saying "this has no value right now"
// Common use case
let user = null; // No user logged in yet
// Later, when user logs in
user = { name: "Alice", id: 101 }

let bigNumber = 9007199254740991n; // Note the 'n' at the end
let huge = 12345678901234567890n;

let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false - each symbol is unique

console.log(typeof 25); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a JavaScript quirk!)
console.log(typeof 123n); // "bigint"

let sum = 5 + 3; // 8
let result = 10 + 20 + 5; // 35

let difference = 10 - 3; // 7
let result12 = 50 - 25; // 25

let product = 4 * 5; // 20
let area = 10 * 20; // 200

let quotient = 20 / 4; // 5
let half = 10 / 2; // 5
let decimal = 7 / 2; // 3.5

let remainder = 12 % 5; // 2 (12 ÷ 5 = 2 remainder 2)
let check = 10 % 3; // 1 (10 ÷ 3 = 3 remainder 1)
let even = 8 % 2; // 0 (no remainder - 8 is even)
// Practical use: Check if a number is even or odd
let number = 7;
if (number % 2 === 0) {
 console.log("Even");
} else {
 console.log("Odd"); // This will execute
}

let squared = 5 ** 2; // 25 (5 squared)
let cubed = 2 ** 3; // 8 (2 cubed)
let power = 10 ** 3; // 1000 (10 to the power of 3)

let result1 = 5 + 3 * 2; // 11 (not 16!)
// Multiplication happens first (operator precedence)
let complex = (5 + 3) * 2; // 16
// Parentheses force addition first

let firstName = "Tony";
let lastName = "Stark";
let fullName = firstName + " " + lastName; // "Tony Stark"
let age1 = 23;
let message1 = "I am " + age + " years old"; // "I am 23 years old"

let result123 = 0 / 0; // NaN
// Invalid mathematical operations
let result2 = Math.sqrt(-1); // NaN (square root of negative)
// Converting non-numeric strings to numbers
let result3 = Number("abc"); // NaN
let result4 = parseInt("hello"); // NaN
// Operations with undefined
let x12;
let result5 = x12 * 5; // NaN


let x1 = NaN;
console.log(x1 + 1); // NaN
console.log(x1 * 5); // NaN
console.log(x1 / 2); // NaN
// console.log(x1 -- 10); // NaN

console.log(typeof NaN); // "number"

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
// To check if a value is NaN, use:
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true (more reliable)


let value = 0 / 0;
// Method 1: isNaN() - converts value to number first
console.log(isNaN(value)); // true
// Method 2: Number.isNaN() - doesn't convert (recommended)
console.log(Number.isNaN(value)); // true
// Why Number.isNaN() is better:
console.log(isNaN("hello")); // true (converts "hello" to number first)
console.log(Number.isNaN("hello")); // false (doesn't convert)

let age12 = 20;
age += 5; // Same as: age = age + 5
console.log(age); // 25
// Equivalent to:
let score12 = 100;
score = score + 50; // 150
// vs.
score += 50; // 150 (shorter!)

let balance = 1000;
balance -= 200; // Same as: balance = balance - 200
console.log(balance); // 800

let total = 100;
total /= 4; // Same as: total = total / 4
console.log(total); // 25

let number12 = 17;
number %= 5; // Same as: number = number % 5
console.log(number); // 2

let x = 10;
let a = x++; // Post-increment
console.log(a); // 10 (old value)
console.log(x); // 11 (incremented)
let y = 10;
let b = ++y; // Pre-increment
console.log(b); // 11 (new value)
console.log(y); // 11 (incremented)


let score123 = 10;
let results = score;
console.log(results); // 10 (old value)
console.log(score); // 9 (decremented)

let i = 0;
while (i < 5) {
 console.log(i);
 i++; // Increment after each iteration
}

let countdown = 10;
while (countdown > 0) {
 console.log(countdown);
 countdown--; // Decrement
}
console.log("Blast off!");

unt = 10;
 count++;
 console.log(count);

 // Avoid (unless you have a good reason)
 let resultss = count++ + ++count;