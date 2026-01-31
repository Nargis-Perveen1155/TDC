console.log("hello object")

// let ObjectName = {
// 	key1:value1,
// 	key2:value2,
// 	key3:value3
// }

let student = {
	name :"Nargis",
	age:22,
	grade:"A"
}
let product = {
	title:"Laptop",
	price:50,
	isAvalable :true
}
let geog ={
	lat : "1247:56",
	long:"585:65",
	city:"Hyd"
}

let post ={
	userName :"Nargis",
	content :"Js",
	likes:25,
	comment:52
}

//*2. Accessing Object Properties

let stud = {
	name:"Nargis",
	age:20,
	city:"Hyd"
}

console.log(stud.name)
console.log(stud.age)

console.log(stud["city"])

//*3. Modifying Objects (Add, Update, Delete)

let student1 = {
	name:"Alex",
	age:50,
	city:"Hyd",
	grade:"A"
}

student1.name = "Harry"
student1.age = 5
student1.city = "delhi"
student1.grade = "A+"
console.log(student1["age"])
console.log(student1["city"])
console.log(student1["name"])
console.log(student1.grade)
//* we can add new properties

student1.subject = "Computer Science"

console.log(student1)

//* we can delete properties from an object

delete student1.city
console.log(student1)


let products = { name: "Phone", price: 30000 };
products.name = "Iphone"
products.color ="black"

delete products.price
console.log("deleted price",products)
products.price = 500000
console.log("added price",products)
products["id"] = "#1254"
delete products["color"]
console.log(products)


//*4. Nested Objects (Object of Objects)

let userData = {
	user1 :{
		name:"one",
		age:1,
		sub:"eng"
	},
	user2:{
		name:"Two",
		age:2,
		sub:"Sci"
	},
	user3:{
		name:"Three",
		age:3,
		sub:"EVS"
	}
}

console.log(userData.user2.age) // why we cant use []
console.log(userData.user2["age"])
console.log(userData.user1.name)
console.log(userData.user3.age)
console.log(userData.user3["sub"])

userData.user1.marks = "Pass"
console.log(userData.user1)
userData.user3.marks = "Fail"
userData.user4 = {name:"abc"}
console.log(userData.user4)

console.log(userData)
//*5. Array of Objects

//*list of students
let students = [
	{name:"lemon",age:22, color:"yello", taste :"sour"},
	{name:"chilli", age:"50", color:"green", taste:"spicy"},
	{name:"orange,", categ:"fruits",color:"oragnges",taste:"sour and sweet"}
]

let ab = students[0].name
console.log(ab)
console.log(students[2]["categ"])
console.log(students[1].color)
students[0].categ = "vegetables"
console.log(students[0])


//*==========================MATH OBJECT=====================


//* Example 1: Math constants

console.log(Math.PI)
console.log(Math.E) //?


//* Example 2: Absolute value

console.log(Math.abs(-4))
console.log(Math.abs(5))
console.log(Math.abs(0))

//* Example 3: Power (exponentiation)

console.log(Math.pow(2,3))
console.log(Math.pow(10.5,5))
console.log(Math.pow(6,2))
console.log(Math.pow(Math.PI,Math.PI))
console.log(Math.pow(10, -10))

//* Example 4: Rounding down and up

console.log(Math.floor(5.1))//5
console.log(Math.ceil(4.5)) //5

let radius = 5
let circum = 2*Math.PI * radius
console.log(Math.ceil(circum))


//*7. Math.random() - Generating Random Numbers



console.log(Math.floor(Math.random())) // it always give 0
console.log(Math.ceil(Math.random())) // it always give 1


console.log(Math.ceil(Math.random()*10))
console.log(Math.ceil(Math.random()*50))

console.log(Math.random()*1000)

//*8. Generating Random Integers

let value = Math.floor(Math.random()*10)
let step1 = Math.random()
let step2 = step1 *10
let step3 = Math.floor(step2)
console.log(step3)
let step4 = step3 + 1
console.log(step4)

//* random integer from 1 to 10

console.log(Math.floor(Math.random() *10 +1))
console.log(Math.floor(Math.random() *10)+1)//? wat diff btwn them

// 11 to 30
console.log(Math.floor(Math.random() * 20)+10) // ?

// Example 1: Random number from 25 to 80
console.log("---------",Math.ceil(Math.random()*6 )+ 5)
console.log(Math.floor(Math.random(80 - 25 + 1))+25)
console.log(Math.floor(Math.random(30 -20 + 1))+20)

 // Example 1: Random dice roll (1-6)
let dice  = Math.ceil(Math.random()*6)
 console.log(dice) //include 6

// Example 2: Random choice from array
let colors = ["red", "green", "blue", "yellow"];
let choice = Math.floor(Math.random()*colors.length)
console.log(colors[choice])

// Example 3: Random quiz question selector
let questions = ["Q1", "Q2", "Q3", "Q4", "Q5"];
let ind = Math.floor(Math.random()*questions.length)
console.log(questions[ind])

//random id generator 1000 - 9999

let code = Math.floor(Math.random()* 9999 - 1000 + 1)+1000
console.log(code)
// Example 5: Random percentage (0-100)
let perc = Math.floor(Math.random()*100)+1
console.log(perc)

let result = (5 + 2) / 7 + 1 * 2;
console.log(result)
let age = 23
age+2;
console.log(age)
console.log(5 == "5")

let x = 10;
let y = 20;
if (x > 5 && y < 15) {
console.log("Alpha");
} else {
console.log("Beta");
}

let val = "Mountain"
console.log(val.slice(0,5))




