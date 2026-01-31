console.log("hello");

//* Example 1: Sum of all numbers

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, elem) => {
  return (acc += elem);
}, 0);
console.log(sum);

//*Example 2: Product of all numbers

let number = [2, 3, 4, 5];
let ans = number.reduce((acc, elem) => {
  return (acc *= elem);
}, 1);
console.log(ans);

//*Example 3: Calculate total price

let cart = [
  { item: "Shirt", price: 500 },
  { item: "Shoes", price: 1200 },
  { item: "Hat", price: 300 },
];

let total = cart.reduce((acc, elem) => {
  return (acc *= elem.price);
}, 1);
console.log(total);

//* counnt ccurance

let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];

let count = fruits.reduce((counter, elem) => {
  counter[elem] = (counter[elem] || 0) + 1;
  return counter;
}, {});
console.log(count);

//*Example 5: Flatten nested arrays

let nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let newNested = nested.reduce((plus, elem) => {
  return plus.concat(elem);
}, []);
console.log(newNested);

//*Example 6: Find longest word

let words = ["hi", "hello", "hey", "goodbye"];

let longest = words.reduce((longest, word) => {
  return word.length > longest.length ? word : longest;
}, "");
console.log(longest); // "goodbye"  why ?

//*Example 7: Group by category

let items = [
  { name: "Apple", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Banana", type: "fruit" },
  { name: "Potato", type: "vegetable" },
];

let group = items.reduce((group, elem) => {
  if (!group[elem.type]) {
    group[elem.type] = [];
  }
  // if i am using else here it only give one elem in fruits an d1 elem in vege why ?
  group[elem.type].push(elem.name);

  return group;
}, {});
console.log(group);

//*Example 8: Calculate average

let scores = [1, 2, 3];

let avg = scores.reduce((sum, elem) => {
  return (sum += elem) / scores.length;
}, 0);
console.log(avg); // wrong result why ?

{
  //*Example 1: Find maximum number

  let numbers = [45, 78, 23, 89, 34, 12];

  let max = numbers.reduce((max, elem) => {
    return elem > max ? elem : max;
  }, number[0]);
  console.log(max);

  //* Example 3: Find minimum number

  let number1 = [45, 78, 23, 89, 34, 12];

  let min = number1.reduce((minVal, elem) => {
    return elem < minVal ? elem : minVal;
  });
  console.log(min);

  //*Example 4: Find highest price

  let products = [
    { name: "Laptop", price: 50 },
    { name: "Mouse", price: 50000 },
    { name: "Monitor", price: 15000 },
  ];

  let price = products.reduce((highVal, elem) => {
    return elem.price > highVal ? elem.price : highVal;
  }, 0);
  console.log(price);

  //*Example 5: Find student with highest marks

  let students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Arjun", marks: 78 },
  ];

  let marks = students.reduce((highMarks, elem) => {
    return elem.marks > highMarks ? elem.marks : highMarks;
  }, 0);
  console.log(marks);
}

//* simple greeting

function greet(name = "Alice") {
  console.log("hello", name);
}

greet();

//*Example 4: Power function

function power(num, expo = 2) {
  return num ** expo;
}
let ans1 = power(8);
console.log(ans1);

//* Example 6: Array slice with defaults

function arrays(arr, start = 2, end = 4) {
  return arr.slice(start, end);
}
let ans2 = arrays([1, 2, 5, 8, 99]);
console.log(ans2);

//*Example 7: Using expressions as defaults

function multiply(a, b = a * 2) {
  return a * b;
}
let ans5 = multiply(2);
console.log(ans5);

{
  //*Example 10: API response destructuring

  let apiResponse = {
    status: "success",
    data: {
      user: "john_doe",
      posts: 150,
      followers: 1200,
    },
    timestamp: "2024-01-15",
  };
  let {
    status,
    data: { user, posts: posting, followers },
    timestamp,
  } = apiResponse;
  console.log(status, user, followers, posting, timestamp);
}

//*Example 9: Destructuring in loops

let students = [
  { name: "Rahul", marks: 85 },
  { name: "Priya", marks: 92 },
  { name: "Arjun", marks: 78 },
];

// let [marks, name] = students // it give only single value
// console.log(marks)
// console.log(name)

students.forEach(({ name, marks }) => {
  console.log(`name : ${name} marks : ${marks}`);
});

//*Example 8: Rest with object destructuring

let user = {
  name: "Alice",
  age: 25,
  email: "alice@email.com",
  phone: "9876543210",
  city: "Mumbai",
};
let { name, ...detail } = user;
console.log(name);
console.log(detail);

//*Example 7: Function parameter destructuring

function details({ name, age, country = "india" }) {
  console.log(`${name} is ${age} years old from ${country}`);
}

details({ name: "ALice", age: 22 });

//*Example 6: Nested object destructuring

let person = {
  name1: "John",
  address: {
    city: "Mumbai",
    pin: 400001,
    country: "India",
  },
};
let {
  name1,
  address: { city, pin, country },
} = person;
console.log(name, city, pin, country);

//*Example 5: Renaming + Default values

let product = { name: "Laptop", price: 50000 };

let { name: productName, price, discount = 0 } = product;
console.log(productName, price, discount);

//*Renaming variables
let use = {
  username: "karan123",
  email: "karan@email.com",
};

//* Practicle problem
//*Create an array of 10 numbers. Use reduce to find the sum of all even numbers.

{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11];
  let sum = arr.reduce((sum, elem) => {
    return (sum += elem);
  }, 0);

  console.log(sum);

  //*Create an array of product objects with name and price . Use reduce to find the most expensive product

  let obj = [
    { name: "Laptop", price: 50 },
    { name: "Tabs", price: 80 },
    { name: "mobile", price: 90 },
  ];

  let expensive = obj.reduce((maxCost, elem) => {
    return elem.price > maxCost ? elem.price : maxCost;
  }, 0);
  console.log(expensive);

  //*Write a function calculateArea(length, width = length) that calculates area. If width is not provided, assume it's a
  // square.

  const calculateArea = (length, width = length * length) => {
    return length * width;
  };
  console.log(calculateArea(2));
}

//*Create three arrays: fruits , vegetables , dairy . Merge them into one groceries array using sprea

let fruit = ["apple", "mango"];
let vege = ["chilli", "pea"];
let dairy = ["milk", "cheez"];

let newArray = [...fruit, ...vege, ...dairy];
console.log(newArray);

//*Create a user object with name and email. Create a new object fullProfile that spreads user and adds age ,
// city , and country .

let users = {
  names: "Alice",
  age: 22,
};

let newObj = {
  ...users,
  email: "abc@gmail.com",
};
console.log(newObj);

//*Write a function findMax(...numbers) that accepts any number of arguments and returns the maximum using

function findMax(...nums) {
  let value = nums.reduce((max, elem) => {
    return elem > max ? elem : max;
  }, 0);
  return value;
}

let res = findMax(1, 5, 85, 9, 2);
console.log(res);

//*Problem 7 (Array Destructuring)
// *Create an array of 5 colors. Use destructuring to get the first, third, and last colors, skipping the others

let colors = ["red", "yellow", "green", "blue", "black"];
let [first, , thrid, , last] = colors;
console.log(first, thrid, last);

//*Create a book object with title, author, year, and pages. Use destructuring to extract title and author, renaming
// author to "writtenBy".

let book = {
  title: "care",
  author: "hans",
  year: 2002,
  pages: 500,
};

let { title, author: writtenBy } = book;
console.log(title, writtenBy);

//*Problem 9 (Combining Concepts)
// Create an array of student objects. Use map to extract names, then use destructuring to get the first three
// names.

let student = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 85 },
  { name: "Cheh", age: 56 },
];

let namee = student.map(({ name }) => {
  return name;
});
console.log(namee);

//*Write a function that accepts a student object and uses destructuring in the parameter to extract name , marks ,
// and provide a default value of "Not Given" for email .

function students1({ name, marks }) {
  return `${name} has obtain ${marks} marks`;
}
let marks = students1({ name: "Alice", marks: 85 });
console.log(marks);

let user2 = {
  name: "John",
  address: { city: "Mumbai", pin: 400001 },
};
let updated = { ...user2, name: "Johnny" };
console.log("==============", updated);

console.log(user2);
// { name: "Johnny", address: { city: "Mumbai", pin: 400001 } }
// Note: address is still referenced, not copied deepl

let ob = {
  name: "John",
  address: { city: "Mumbai", pin: 400001 },
};

let ob1 = ob;
ob1.age = 22;
console.log("--------", ob1);
console.log("**********", ob);

{
  let items = [
    { name: "Apple", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Banana", type: "fruit" },
    { name: "Potato", type: "vegetable" },
    { name: "kebab" },
  ];
  let grouped = items.reduce((result, item) => {
    // console.log(item.type == undefined)
    if (item.type == undefined) {
      item.type = "others";
      // console.log("item after  other", item)
    } 
    
    if (!result[item.type]) {
      result[item.type] = [];
    }

    result[item.type].push(item.name);
    return result;
  }, {});
  console.log(grouped);

  // { fruit: ["Apple", "Banana"], vegetable: ["Carrot", "Potato"
}
