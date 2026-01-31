console.log("day 9");

let arr = [1, 2, 3, 4, 5];

arr.forEach((elem, index, array) => {
  console.log(elem, index, array);
});

let fruits = ["apple", "mango", "banana", "grapes"];

fruits.forEach((elem, index, array) => {
  console.log(elem, index);
});

//** Example 2: Print with index

let colors = ["Red", "Green", "Blue"];

colors.forEach((elem, index) => {
  console.log(index, elem);
});

//* Example 3: Calculate sum using external variable

let numbers = [10, 20, 30, 40, 50];

let sum = 0;

numbers.forEach((elem) => {
  sum += elem;
});
console.log(sum);

//*Example 4: Add formatted prices

let prices = [99, 149, 299, 499];

prices.forEach((elem) => {
  console.log(`$${elem}.00`);
});

//* Example 5: Push to another array

let names = ["alice", "bob", "charlie"];
let newArr = [];

names.forEach((elem) => {
  newArr.push(elem.toUpperCase());
});
console.log(newArr);

//*Example 6: Print multiplication table

let number = [1, 2, 3, 4, 5];

number.forEach((elem, index) => {
  console.log(`5 * ${index} = ${5 * index}`);
});

//*Example 7: Working with objects

let object = [
  { name: "rahul", age: 20 },
  { name: "Priya", age: 18 },
  { name: "Alice", age: 56 },
];

object.forEach((elem) => {
  console.log(elem.name, elem.age);
});

//*Example 8: Checking conditions

let scores = [85, 92, 78, 45, 90];

scores.forEach((elem) => {
  if (elem >= 80) {
    console.log("High score");
  } else {
    console.log("low scores");
  }
});

//* 2. The map Method

// let newArray = array.map((element, index, array) => {
//  return transformedElement;
// });

//*Example 1: Double all numbers

{
  let numbers = [1, 2, 3, 4, 5];
  let nums = numbers.map((elem) => {
    return elem * 2;
  });
  console.log(nums);

  //*Example 2: Convert to uppercase

  let names = ["alice", "bob", "charlie"];

  names.map((elem) => {
    let elm = elem.toUpperCase();
    console.log(elm);
  });

  let arr = [];
  names.map((elem) => {
    arr.push(elem.toUpperCase());
  });
  console.log(arr)

  //*Example 3: Square all numbers

  let num = [2, 3, 4, 5];
  let res = num.map((elem)=>{
	return elem*2
  })
  console.log(res)
  
  //*Example 4: Extract object properties

  let object = [
	{name:"Alice", age:20},
	{name:"Priya", age:56},
	{name:"rehan", age:85}
  ]

 let prop =  object.map((elem)=>{
	return elem.name
  })
  console.log(prop)

}

//*Example 5: Add GST to prices

let price = [100, 200, 150, 300];

let gst = price.map((elem)=>{
  return elem + 1.18
})
console.log("gst",gst)

//*Example 6: Create full names

let firstName = ["Ram", "Rohan","Sham"]
let lastName = ["Kumar","verma", "pyaare"]

let fullName = firstName.map((elem, index)=>{
  return (`${elem} ${lastName[index]}`)
})
console.log(fullName)

//*Example 7: Format as currency

let amounts = [100, 250, 500, 1000];

amounts.map((elem)=>{
  console.log(`$${elem}.00`)
})

//*Example 9: Temperature conversion

let celsius = [0, 10, 20, 30, 40];

let farenheit = celsius.map((elem)=>{
  return (elem * 9/5) + 32
})
console.log(farenheit)

//*Example 10: Add index to items

let fruits1 = ["Apple", "Banana", "Mango"];

let index = fruits1.map((elem, index)=>{
  console.log(index, elem)
})

//*3. The filter Method
// What is it?
// filter creates a new array containing only the elements that pass a test (return true from the callback
// function).

// let newArray = array.filter((element, index, array) => {
//  return condition; // must return true or false
// });

{
  //*Example 1: Get even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter((elem)=>{
  return elem%2==0
})
console.log("even",even)

//*Example 2: Get odd numbers

let number = [15, 22, 31, 44, 57, 60];
let odd = number.filter((elem)=>{
  return elem%2 !== 0
})
console.log(odd)
}

//*Example 3: Get passing grades

let grades = [45, 78, 89, 34, 92, 56, 67];

let pass = grades.filter((elem)=>{
  return elem>=50
})
console.log(pass)


//*Example 4: Filter by string length

let words = ["hi", "hello", "bye", "goodbye", "hey"];

let length = words.filter((elem)=>{
  return elem.length > 3
})
console.log(length)

//*Example 5: Get adults only

let people = [
 { name: "John", age: 17 },
 { name: "Sarah", age: 22 },
 { name: "Mike", age: 15 },
 { name: "Emma", age: 25 },
 { name: "Tom", age: 16 }
];

let adult = people.filter((elem)=>{ // how can i get only name from here
  return elem.age > 18
}).map((elem)=>{
  return elem.name
})
console.log(adult)

//* get name with a string Example 6: Get names starting with 'A'

let name = ["Alice", "Bob", "Andrew", "Charlie", "Amanda"];

let stringWithA = name.filter((elem)=>{
  return elem[0]=='A'
})
console.log(stringWithA)



//*Example 7: Filter affordable items

let products = [
 { name: "Laptop", price: 50000 },
 { name: "Mouse", price: 500 },
 { name: "Keyboard", price: 1500 },
 { name: "Monitor", price: 15000 }
];

// let affordable = products.filter((elem)=>{
//   return elem.price < 2000
// })
// console.log(affordable)

let afford = products.map((elem)=>{
  if(elem.price < 2000){
 console.log(elem.name)
  }
 
})
// console.log(afford)


//* remove specific items

let cart = ["apple", "banana", "apple", "mango", "apple", "orange"];

let newCart = cart.filter((elem)=>{
  return elem !== "apple"
})
console.log(newCart)


//* get completed task

let tasks = [
 { task: "Buy milk", done: true },
 { task: "Clean room", done: false },
 { task: "Study", done: true },
 { task: "Exercise", done: false }
];

let completedTask =  tasks.filter((elem)=>{
  return elem.done == true
})

console.log(completedTask)

//* empty cart scenario Example 4: Empty cart scenario

{
let prices = [150, 200, 300];

let emptySce1 = prices.some((elem)=>{
  return elem == 200
})
console.log(emptySce1)


let everyEmpty = prices.every((elem)=>{
  return elem <= 100
})
console.log(everyEmpty)


//* all must be even or odd

let numbers = [2, 4, 6, 8, 10];
let even = numbers.every((elem)=>{
  return elem % 2 == 0
})
console.log(even)

let odd = numbers.every((elem)=>{
  return elem%2 !== 0
})
console.log(odd)

//*Example 2: With one failing case All must be adult or atleast one must be adult

let ages = [20, 25, 15, 30, 22];

let allAdult = ages.every((elem)=>{
  return elem >= 18
})
console.log(allAdult)

let oneAdult = ages.some((elem)=>{
  return elem >= 18
})
console.log(oneAdult)


//*check if any task is incompleted

let tasks = [
 { task: "Buy milk", done: true },
 { task: "Clean room", done: false },
 { task: "Study", done: true }
];

let allCompleted = tasks.every((elem)=>{
  return elem.done == true
})
console.log(allCompleted)
}


//* practice question 

//*Create an array of 5 cities. Use forEach to print "I want to visit [city name]" for each city.

let cities = ["Hyderabad", "jamshedpur","jaipur","tata","Gaya"]

cities.forEach((elem)=>{
  console.log(`I want to visit ${elem} `)
})

//*Create an array of 5 numbers. Use map to create a new array where each number is increased by 100.

let array = [4,8,12,56,80]

let newArray = array.map((elem)=>{
  return elem+100
})
console.log(newArray)

//*Create an array of numbers from 1 to 20. Use filter to get only numbers divisible by 3.

{
  let arr = [1,2,3,4,5,6,7,8,9,10]
  let newArr = arr.filter((elem)=>{
    return elem%3==0
  })
  console.log(newArr)
}

//*Create an array of student objects with name and marks . Use map to create a new array of objects that
// includes a grade property (A for >= 90, B for >= 75, C for >= 50, F for < 50).

let student = [
  {name:"Aliya",  marks:59},
  {name:"Riya",  marks:99},
  {name:"Piya", marks:58},
  {name:"Noor", marks:88}

]

let grade = student.map((elem)=>{
return {
  name:elem.name,
  marks:elem.marks,
  grade:elem.marks >= 90 ? "A":
  elem.marks >= 75 ? "B" :
  elem.marks >= 50 ? "C" : "F"
  
}
})
console.log(grade)

//*Create an array of products with name and price . Use filter to get products priced between ₹500 and ₹2000

let product = [
  {name:"Mobile", price:2000},
  {name:"Laptop",price:500},
  {name:"tablet", price:80000}
]

let newAr = product.filter((elem)=>{
  return elem.price >= 500 && elem.price <= 2000
})
console.log(newAr)

//*Create an array of 5 numbers. Check if all numbers are greater than 10

let arr5 = [1,5,8,9,6];

let newArr5 = arr5.every((elem)=>{
  return elem > 10
})
console.log(newArr5)

//*Create an array of words. Check if any word contains the letter 'z'.

{
  let arr = ["hello","hey", "Key", "santa","zoo"]
  let newArr = arr.some((elem)=>{
    return elem.includes("Z")
  })

  console.log(newArr)
}

//*Create an array of numbers. First filter out odd numbers, then use map to square the remaining even numbers

let arr2 = [22,55,20,9,3,7]
let newArr2 = arr2.filter((elem)=>{
  return elem % 2 != 0
})
.map((elem)=>{
  return (elem%2==0) * 2
})


console.log(newArr2)

