console.log("day 7 ")

function printStar(){
	for(let i=1;i<=5;i++){
	let star = ""
	for(let j=1;j<=i;j++){
		star += "*"
	}
	console.log(star)
}
}

printStar()

//*2

	let student = {
		Name : "Nargis",
		age : 22,
		course : "Javascript"
	}

function studentInfo(studentObj){

	for(let key in studentObj){
		console.log("st=====",studentObj)
	}
}
studentInfo(student)

//*

function isEligible(name ,age){
	
	if(age >= 18){
		console.log(`${name} is eligible for vote`)
	}
	else{
		console.log(`${name} is not eligible`)
	}
}

isEligible("Alice", 25)

//* multiply

function multiply(x, y, z){
	return x * y * z
}
let res = multiply(4,5,6)
console.log(res)

//****/

function findLargest(num1, num2){
	let res =  num1 > num2 ? console.log(`${num1} is larger`) : console.log(`${num2} is larger`)
	return res
}

findLargest(12,52)


//*

function finalPrice(op, dis){
	let actualPrice = op - dis
	return actualPrice 
}

let ress = finalPrice(120, 20)
console.log(ress)

//** */

let x = 10;
function test() {
 let x = 20;
 console.log(x);
}
test();
console.log(x); //20,10

//*

function calculate() {
 let result = 100;
 console.log(result)
}

calculate()

//*

// javascript
// function parent() {
//  let a = 10;

//  function child() {
//  let b = 20;
//  console.log(a + b); 
//  }

//  child();
//  console.log(b);
// }
// parent(); // 30, 

let divide = function(a,b){
	return a/b
}
let resss = divide(10,2)
console.log(resss)


let celsiusToFahrenheit = function(celsius){
	return (celsius * 9/5) + 32

}
let val = celsiusToFahrenheit(25)
console.log(val)

//* higher order function
function add(a,b){
	return a + b
}

function sub(c, d){
	return c - d
}

function executeOperation(a, b, func){
return func(a,b)
}

let vall = executeOperation(5,6, add)
console.log(vall)

let vall2 = executeOperation(9,3,sub)
console.log(vall2)

//** */
function print(){
	return "Hello world"
}
function acceptNumber(func , n){
for(let i=1;i<=n;i++){
	return func()
}
}

let ans = acceptNumber(print, 5)
console.log(ans)
