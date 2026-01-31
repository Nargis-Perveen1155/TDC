console.log("hello world");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//*Problem 2: Print Even Numbers (3 points)
for (let i = 2; i <= 20; i += 2) [console.log(i)];
//*Problem 3: Countdown (3 points)

let count = 11;
for (let i = 10; i >= 1; i--) {
  count--;
  console.log("countdown", count);
}

console.log("Blast OFF!");

//*Problem 4: Multiplication Table (3 points)

for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

//*Problem 5: Sum of First N Numbers (3 points)

let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log(sum);

//*Problem 6: Number Grid (5 points)

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for (let i = 1; i <= 4; i++) {
  let value = " ";
  for (let j = 1; j <= 4; j++) {
    value += j + " ";
  }
  console.log(value);
}

//*Problem 7: Right Triangle Pattern (5 points)

// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//*Problem 8: while Loop - Count to 5 (3 points)//why?

// let i= 1;
// while(i<=5){
// 	console.log(i)

// }


//*Problem 9: while Loop - Sum Until Target (4 points)//why?

// let sum1 = 0
// let i=1;
// while(sum1<=50){
// 	sum+=i
// 	console.log(sum)
// 	i++;
	
// }

//*Problem 10: do...while Loop (Try this if didn't get, we will discuss this in


// why?

//*Problem 11: Using break (5 points)

let i;
for( i=1;i<=100;i++){
	if(i % 3 == 0 && i % 5 == 0){
		break;
		
	}console.log("3&5 mod",i)
	
}

//*Problem 12: Using continue (5 points)

for(let i=1;i<=10;i++){
	if(i % 3 == 0){
		continue
	}
	console.log(i)
}

//*Problem 13: Print Array Elements (3 points)

let cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"]

for(let i=0;i<cities.length;i++){
	console.log(`${i} ${cities[i]}`)
}

//*Problem 14: Sum of Array (4 points)

let numbers = [10, 25, 30, 45, 20];
let sum2 = 0
for(let i=0;i<numbers.length;i++){
	console.log(numbers[i])
	console.log("length",numbers.length)
	sum2 += numbers[i]
	
}
console.log(sum2) //why? NaN

//* Problem 15: Find Maximum in Array (4 points)

let scores = [78, 92, 85, 99, 88, 76];
let max = 0
for(let i=0;i<scores.length;i++){
	if(max < scores[i])
		max = scores[i]
}
console.log(max,"max")

//*Problem 16: Nested Array Iteration (4 points)
let teams = [
 ["Alice", "Bob"],
 ["Charlie", "David"],
 ["Eve", "Frank"]
];

for(let i=0;i<teams.length;i++){
	for(let j=0;j<teams[i].length;j++){
		console.log(teams[i][j])
	}
}

//*Use a for...of loop to print each fruit from the array.

let fruits = ["Apple", "Banana", "Orange", "Mango"];
for(let fruit of fruits ){
	console.log(fruit)
}

//*Problem 18: for...of with String (3 points)

let word = "LOOP";

for(let i of word){
	console.log(i)
} //checkoutput ?

//*Problem 19: Count Vowels with for...of (4 points)

let sentence = "JavaScript is awesome";
let count1 = 0
for(let i=0;i<sentence.length;i++){
	if(sentence[i].toLowerCase() == "a" || sentence[i].toLowerCase() == "e" ||sentence[i].toLowerCase() == "i" || sentence[i].toLowerCase() == "o"|| sentence[i].toLowerCase() == "u" )
	// console.log(sentence[i])
count ++

}console.log(count) //why ans is 9 but in assignmnet ans is 8


//*Problem 20: FizzBuzz (5 points)

for(let i=1;i<=30;i++){
	if(i%3 == 0){
		console.log("Fizz--")
	}
	else if(i%5 == 0){
		console.log("Buzz")
	}
	else if(i%3==0 && i%5==0){
		console.log("FIZZ BUZZ")
	}
	else{
		console.log(i)
	}
}
// Reveersed an array
let original = [10, 20, 30, 40, 50];

for(let i=original.length-1;i>=0;i--){
	console.log(original[i])
}