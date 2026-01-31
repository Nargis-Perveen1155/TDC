//* Part A: Variable Declaration and Data Types (20 points)
//* Problem 1: Create Variables (4 points)

let userName = "Nargis";
let age = 22;
let isStudent = true;
let color = "black";
let siblings = 3;

//* Problem 2: Type Checking (4 points)

console.log(typeof userName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof color);
console.log(typeof siblings);

//* Problem 3: Understanding Undefined and Null (4 points)

let score;
console.log(score);
console.log(typeof score);
let winner = null;
console.log(winner);
console.log(typeof winner); //object why?

// undefine a  value which is given by the computer when user not assign any value only declare the variable, ............ but null is  a also a vlaue which is define by the user intensionally empty

//*Problem 4: Working with Strings (4 points)

let firstName = "Nargis";
let lastName = "perveen";
let fullName = firstName + " " + lastName;
console.log(fullName);

//* Problem 5: Type Conversion Challenge (4 points)

let a = "5";
let b = 3;
let result = a + b;
console.log(result); //53
console.log(typeof result); // string

//* Part B: Arithmetic Operations (25 points)
//* Problem 6: Basic Calculator (5 points)

let num1 = 45;
let num2 = 12;

let sum = num1 + num2;
console.log(sum);
let diff = num1 - num2;
console.log(diff);
let prod = num1 * num2;
console.log(prod);
let div = num1 / num2;
console.log(div);
let rem = num1 % num2;
console.log(rem);

//* Problem 7: Temperature Converter (5 points)

// let celcius = alert("Enter your celcius")
let celcius = 25;
let farenhiet = (celcius * 9) / 5 + 32;
console.log(`${celcius}\u00B0C Celcius is equal to ${farenhiet} \u00B0F`);

//* Problem 8: Circle Calculations (5 points)

let PI = Math.PI;
let radius = 7;
let circumferenceOfCircle = 2 * PI * radius;
console.log(circumferenceOfCircle);
let areaOfCircle = PI * (radius * radius);
console.log(areaOfCircle);

//* Problem 9: Shopping Bill Calculator (5 points)

let oneNotebookPrice = 45;
let onePenPrice = 15;
let bagpack = 850;

let subtotal = 3 * oneNotebookPrice + 2 * onePenPrice + bagpack;
console.log(`subtotal before discount ${subtotal}`); //1015
let discount = subtotal * (10 / 100);
console.log(discount); //101.5
let finalAmount = subtotal - discount;
console.log(finalAmount); //913.5

//* Problem 10: Even or Odd Checker (5 points)

let number = 17;
if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

//*Part C: Operator Precedence (15 points)
//* Problem 11: Predict the Output (5 points)

let res1 = 10 + 5 * 2; //20
console.log(res1);
let res2 = (10 + 5) * 2; //30
console.log(res2);
let res3 = 20 / 4 + 3 * 2; //11
console.log(res3);
let res4 = 2 ** 3 + 5; //13
console.log(res4);
let res5 = ((8 + 2) / 5) * 3; //6 why ?
console.log(res5);

//* Problem 12: Fix the Expression (5 points)

let result2 = ((10 + 20) * 5) / 3;
console.log(result2)

//* Problem 13: Create a Formula (5 points)

let solu = ((15 + 5) * 13 - 10) / 4;
console.log(solu)


//* Part D: Assignment Operators (15 points)
//* Problem 14: Bank Account Simulation (8 points)

let balance = 5000;
balance += 15000 // as a salry
balance -= 8000 // rent
balance += 5000 // bonus
balance -= 3000 //shopping
console.log(balance)

//* Problem 15: Compound Interest (7 points)

let amount = 10000
amount *= 1.10
console.log("after 1 year",amount)
amount *= 1.10
console.log("after 2 year",amount)
amount *= 1.10
console.log("after 3 year",amount)

//* Part E: Increment and Decrement Operators (15 points)
//* Problem 16: Pre vs Post Increment (6 points)

let x = 10;
let y = x++;
console.log("x:", x, "y:", y);// x-10, y-11
let a1 = 10;
let b1 = ++a1;
console.log("a:", a1, "b:", b1);   //a = 11, b =11

//* Problem 17: Countdown Timer (5 points)

let Countdown = 10
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)
Countdown--
console.log(Countdown)

//* Problem 18: The Tricky Problem (4 points)

let num = 5;
let newNum = num++; // num=5, newNum = 6
console.log(`num - ${num} newNum = ${newNum}`)
newNum = ++num; // num=7, newNum = 7
console.log(`num - ${num} newNum = ${newNum}`)


//* Part F: Working with NaN (10 points)
//* Problem 19: Understanding NaN (5 points)

let resu = 0/0
console.log(resu)

let resu2 = "Hello"/5
console.log(resu2)

let resu3 = NaN+10
console.log(resu3)

let resu4 = Math.sqrt(-1)
console.log(resu4)

console.log(typeof(NaN)) //number why?

//*Problem 20: Detecting NaN (5 points)
//* Write code to check if the following values are NaN using Number.isNaN() :

let value1 = 100;
let value2 = "test" / 2;
let value3 = 0 / 0;
let value4 = "123";

console.log(Number.isNaN(value1))
console.log(Number.isNaN(value2))
console.log(Number.isNaN(value3))
console.log(Number.isNaN(value4))


//* Part G: Real-World Applications (Bonus: 10 points)
//* Problem 21: Grade Calculator (5 points)

let math = 85;
let scie = 92
let eng = 78
let his = 88
let com = 95

let avg = (math + scie + eng + his + com)/5;
console.log(avg)

//* Problem 22: Age Calculator (5 points)

let currYear = 2025;
let birthYear = 2002;
let myAge = 23;
console.log(`In ${currYear}, my age is ${myAge} years old`)

//*Part H: Challenge Problems (Bonus: 10 points)
//* Problem 23: Swap Values Without a Third Variable (5 points)

let m = 10;
let n = 20;
m = m+n //30
n = m - n
m = m - n
console.log(`m = ${m} n= ${n}`)


//* Problem 24: Digit Sum Calculator (5 points)

let numbers = (4+5+6);
let ans =number/100
console.log(" using / method",ans)
console.log("using math floor",Math.floor(ans))


