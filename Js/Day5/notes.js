console.log("hellow wolrd");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//Example 2: Print Odd Numbers from 1 to 15

for (let i = 1; i <= 15; i += 2) {
  console.log("odd number :", i);
}

// Example 3: Print Even Numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
  console.log("Even num", i);
}

// Example 4: Multiplication Table of 5

for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}

// Example 5: Countdown from 10 to 1

for (let i = 10; i >= 1; i--) {
  console.log(i, "Blast off");
}

//Example 2: Fixed Version - Correct Direction

for (let i = 10; i <= 0; i++) {
  console.log(i);
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//nested for loop

for (let i = 0; i <= 5; i++) {
  console.log("outer loop", i);
  for (let j = 1; j <= 5; j++) {
    console.log("inner loop", j);
  }
}

//Example 2: Multiplication Table (1 to 5)

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row = i * j + "\t";
  }
  console.log(row);
}

// * * * * *
// * * * *
// * * *
// * *
// *

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// for (let i = 1; i <= 5; i++) {
//  let pattern = "";
//  for (let j = 1; j <= i; j++) {
//  pattern += "* ";
//  }
//  console.log(pattern);
// }

for (let i = 0; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log();
  }
}

// Output:
// (1,1) (1,2) (1,3) (1,4)
// (2,1) (2,2) (2,3) (2,4)
// (3,1) (3,2) (3,3) (3,4)
// (4,1) (4,2) (4,3) (4,4)

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += `(${i},${j})`;
  }
  console.log(row);
}

//* 5: Inverted Triangle Pattern

// * * * * *
// * * * *
// * * *
// * *
// *

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

//* while loop

let k = 1;
while (k <= 5) {
  console.log(k);
  k++;
}

//*Example 2: Sum Numbers Until Target Reached

let num = 3;
let sum = 0;

while (sum < 50) {
  sum += num; // why 12 , 8+3 =11
  console.log(sum); //52 why ? condition is cleary written less than 50
  num++;
}

//*

let num1 = 100;

while (num1 > 1) {
  num1 = num1 / 2;
  console.log("-----------------", num1); //why ? answer not print when i used less than operator

}

//*Example 5: Finding First Power of 2 Greater Than Value

let target = 1000
let value = 1
let exponent = 0

while(value <= target){
	value  = 2 ** exponent
	exponent++
}
console.log(value)

