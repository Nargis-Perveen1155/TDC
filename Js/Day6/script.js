console.log("hello");

let car = {
  brand: "Tesla",
  Model: "Model3",
  year: 2025,
  color: "white",
};

console.log(car.brand);
console.log(car.year);

//*Question 2: Create an object called movie with properties:

let movie = {
  title: "Inception",
  director: "Christopher nolan",
  year: 2010,
  rating: 8.8,
};
console.log(movie["director"]);
console.log(movie.rating);

//*Section 2: Modifying Objects

let student = {
  name: "john",
  age: 20,
  grade: "A",
};
student.grade = "B";
student.city = "Mumbai";
delete student.age;
console.log(student);

//*Question 2: Create an object product with

let product = {
  name: "Laptop",
  price: 50000,
};

product.price = 45000;
product.brand = "Dell";
product.inStock = true;

console.log(product);

//*Question 1: Create a nested object called classroom with the following structure:

let classroom = {
  teacher: {
    name: "Fatima",
    age: "35",
    subject: "Math",
  },
  student1: {
    name: "Riya",
    grade: "A",
  },
  student2: {
    name: "Bob",
    grade: "B+",
  },
};

console.log(classroom.teacher.name);
console.log(classroom.student1.grade);
console.log(classroom.student2.name);

let company = {
  engineering: {
    employee: 40,
    manager: "John",
  },
  sales: {
    employee: 25,
    manager: "sarah",
  },
};

console.log(company.engineering.employee);
console.log(company.sales.manager);
company.engineering.employee = 45;
console.log(company);

let students = [
  {
    name: "Emma",
    age: 20,
    grade: "A",
  },
  {
    name: "Alive",
    age: 22,
    grade: "B",
  },
  {
    name: "Bob",
    age: 32,
    grade: "C",
  },
];

console.log(students[0].name);
console.log(students[2].grade);
console.log(students.length);

//*Question 2: Create an array called products with these objects:

let products = [
  { id: 1, name: "Phone", price: 20000 },
  { id: 2, name: "Laptop", price: 50000 },
  { id: 3, name: "Tablet", price: 30000 },
];

console.log(products[1].name);
console.log(products[0].price);
products.push({ id: 4, name: "smart watch", price: 5000 });

console.log(products);

//*Section 5: Complex Array of Objects

let post = [
  {
    userName: "Alice",
    content: "Learning JavaScript!",
    likes: 50,
  },
  {
    userName: "Bob",
    content: "Learning Python",
    likes: 58,
  },
];

console.log(post[0].content);
console.log(post[1].likes);
post[0].likes = 175;
console.log(post[0].likes);

let course = [
  { name: "Js", duration: 40, instructor: "john" },
  {
    name: "python",
    duration: 50,
    instructor: "sarah",
  },
  {
    name: "java",
    duration: 30,
    instructor: "Alice",
  },
];

console.log(course[1].instructor);
console.log(course[0].duration);
course[2].duration = 32;
console.log(course[0].name);
console.log(course[1].name);
console.log(course[2].name);

//* MAth object

console.log(Math.PI);
console.log(Math.pow(2, 5));
console.log(Math.abs(-25));

console.log(Math.round(7.8));
console.log(Math.floor(7.8));
console.log(Math.ceil(7.2));
let power = Math.pow(3, 4);
console.log(power);
console.log(Math.abs(-400));

//*Section 7: Math.random() Basics

let step1 = Math.random();
let step2 = Math.random() * 10;
let step3 = Math.random() * 100;

console.log(step1, step2, step3);
let val = Math.random();
let val0 = Math.random() * 5;
let val1 = Math.random() * 20;
console.log(val, val0, val1);

//*Section 8: Generating Random Integers (1 to 10)
let st1 = Math.random();
let st2 = Math.random() * 10;
let st3 = Math.floor(Math.random() * 10);
let st4 = Math.floor(Math.random() * 3) + 1;
console.log(st1, st2, st3, st4);

//*Section 9: Random Integers in Different Ranges

console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.ceil(Math.random() * 6));
console.log(Math.floor(Math.random() * 5) + 1);

//*Label each output clearly
// Question 2: Generate random numbers for:
// A dice roll (1 to 6)
// A random day of the week (1 to 7)
// A random month (1 to 12)
// A random age between 18 and 25
// Print all values with descriptive labels

console.log(Math.floor(Math.random() * 6) + 1);
console.log(Math.floor(Math.random() * 7) + 1);
console.log(Math.ceil(Math.random() * 12));

//* formula

// Math.floor(Math.random() * max - min + 1)+min

console.log(Math.floor(Math.random() * (10 - 5 + 1) + 5));
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));
console.log(Math.floor(Math.random() * 1000));

for (let i = 0; i <= 20; i++) {
  console.log("*********", Math.floor(Math.random() * (25 - 18 + 1) + 18));
}

//* from 0 to 100
console.log(Math.floor(Math.random() * 100));
for (let i = 0; i <= 50; i++) {
  console.log(Math.floor(Math.random() * (40 + 10 + 1) - 10));
}

console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));

let colors = ["red", "green", "blue", "yellow", "purple"];

let ind = Math.floor(Math.random() * colors.length);
console.log(colors[ind]);

let foods = ["Pizza", "Burger", "Pasta", "Sushi"];

let choice = Math.floor(Math.random() * foods.length);
console.log("Todays special : ", foods[choice]);

//*Section 12: Combined Concepts - Objects and Random

let players = [
  { name: "Alice", score: 0 },
  { name: "Bob", score: 0 },
  { name: "Charli", score: 0 },
];

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let dice3 = Math.floor(Math.random() * 6) + 1;

players[0].score = dice1;
players[1].score = dice2;
players[2].score = dice3;

console.log(players);

let product2 = [
  { name: "Phone", price: 20000, damage: 0 },
  { name: "Laptop", price: 30000, damage: 0 },
];

let damage1 = Math.floor(Math.random() * (30 - 10 + 1) + 10);
let damage2 = Math.floor(Math.random() * (30 - 10 + 1) + 10);

product2[0].damage = damage1;
product2[1].damage = damage2;
console.log(product2);

let weather = {
  monday: {
    temp: 0,
    humidity: 0,
  },
  tuesday: {
    temp: 0,
    humidity: 0,
  },
};

weather.monday.temp = 20;
weather.monday.humidity = 45;
weather.tuesday.temp = 30;
weather.tuesday.humidity = 56;
console.log(weather);

let student3 = [
  { name: "Emma", math: 0, science: 0 },
  { name: "Liam", math: 0, science: 0 },
  { name: "Olivia", math: 0, science: 0 },
];

student3[0].math = 56;
student3[1].math = 66;
student3[2].math = 88;

student3[0].science = 99;
student3[1].science = 90;
student3[2].science = 91;
console.log(student3);

let tickets = [];

for (let i = 1; i <= 5; i++) {
  tickets.push(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));
}

console.log(tickets);

let winningTicket = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

for (let i = 0; i < tickets.length; i++) {
  if (tickets[i] == winningTicket) {
    console.log("Winning ticket is: ", tickets[i], "its index is: ", i);
  } else {
    console.log("winning number is not present in array");
  }
}

// for(let i=1;i<=100; i++){
// 	if(randomTicket1 == winningTicket  ){
// 	console.log("Ticket1 is winner")
// }
// else if( randomTicket2 == winningTicket){
// 	console.log("ticket2 is winner")
// }
// else if(randomTicket3 == winningTicket ){
// 	console.log("Ticket 3 is winner")
// }
// else if( randomTicket4 == winningTicket ){
// 	console.log("ticket 4 is winner")
// }
// else if( randomTicket5 == winningTicket){
// 	console.log("Ticket 5 is winner")
// }
// else{
// 	console.log("No one is winner")
// }
// }

let winnerNumber = Math.floor(Math.random() * 10) + 1;
let allTicket = {
  Alice: 1,
  Bob: 2,
  Charlie: 3,
  Deir: 4,
  Elen: 6,
  Fency: 7,
};
// for(let key in allTicket){
// 	// console.log(key)
// 	for(let name in allTicket[key]){
// 		console.log(name)

// 		if(allTicket[key].number == winnerNumber){
// 			console.log(`Winner is here`)
// 		}
// 		else{
// 			console.log("Not any one winner")
// 		}
// 	}
// }

console.log(winnerNumber);

for (let ticket in allTicket) {
  // console.log(allTicket[ticket]);

  if (allTicket[ticket] == winnerNumber) {
    console.log(`Winner is ${ticket}`);

    break;
  }
 
}

for(var i=0;i<3;i++){}
console.log(i)


