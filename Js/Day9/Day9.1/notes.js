console.log("hello js");

//*Example 1: Print all numbers

let numbers = [10, 20, 30, 40];

numbers.forEach((elem) => {
  console.log(elem);
});

//*Example 2: Add price symbol
let prices = [99, 149, 299];
prices.forEach((elem) => {
  console.log(`$${elem}`);
});

//*Example 3: Print with index

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((elem, index) => {
  console.log(elem, index);
});

//*Example 4: Calculate total in forEach

let scores = [85, 90, 78, 92];

let sum = 0;
scores.forEach((elem) => {
  sum += elem;
});
console.log(sum);

//*Example 5: Modify external array

let names = ["alice", "bob", "charlie"];

let newName = names.map((elem) => {
  return elem.toUpperCase();
});

console.log(newName);

{
  // //*let newArray = array.map((element) => {
  //  return transformedElement;
  // });

  //*Example 1: Double all numbers

  let nums = [1, 2, 3, 4];

  let newNum = nums.map((elem) => {
    return elem * 2;
  });

  console.log(newNum);

  //*Example 2: Convert to uppercase

  let names = ["alice", "bob", "charlie"];

  let newName = names.map((elem) => {
    return elem.toUpperCase();
  });

  console.log(newName);

  //*Example 3: Extract properties from objects

  let students = [
    { name: "John", age: 20 },
    { name: "Sarah", age: 22 },
    { name: "Mike", age: 21 },
  ];

  let newStudent = students.map((elem) => {
    return elem.name;
  });

  console.log(newStudent);

  //*Example 4: Add sales tax

  let prices = [100, 200, 150];

  let priceWithTax = prices.map((elem) => {
    return elem * 1.18;
  });
  console.log(priceWithTax);

  //*Example 5: Create HTML elements

  let items = ["Home", "About", "Contact"];

  let newItem = items.map((elem) => `<li>elem</li>`);
  console.log(newItem);

  //*
}

{
  //* filter method
  // 	let newArray = array.filter((element) => {
  //  return condition; // true or false
  // });

  //* Example 1: Get even numbers
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  let newNum = numbers.filter((elem) => {
    return elem % 2 == 0;
  });
  console.log(newNum);

  //*let grades = [45, 78, 89, 34, 92, 56];

  let grades = [45, 78, 89, 34, 92, 56];
  let passStudents = grades.filter((elem) => {
    return elem >= 50;
  });
  console.log(passStudents);

  //*Example 3: Filter by string length
  let words = ["hi", "hello", "bye", "goodbye"];
  let filtered = words.filter((elem) => {
    return elem.length >= 3;
  });
  console.log(filtered);

  //*Example 4: Filter adults

  let people = [
    { name: "John", age: 17 },
    { name: "Sarah", age: 22 },
    { name: "Mike", age: 15 },
    { name: "Emma", age: 25 },
  ];

  let adultPeople = people.filter((elem) => {
    return elem.age >= 18;
  });

  console.log(adultPeople);

  //*Example 5: Remove specific items
  let cart = ["apple", "banana", "apple", "mango", "apple"];

  let newCart = cart.filter((elem) => {
    return elem !== "apple";
  });
  console.log(newCart);
}

{
  //* some and every

  //*Example 1: Check if all are adults

  let ages = [20, 25, 18, 30];

  let adult = ages.every((elem) => {
    return elem >= 18;
  });

  console.log(adult);

  //*Example 2: Check if any teenager exists
  let age = [20, 25, 17, 30];
  let teenager = age.some((elem) => {
    return elem <= 18;
  });
  console.log(teenager);

  //*Example 3: Validate form fields

  let formFields = ["John", "john@email.com", "password123"];

  let validate = formFields.every((elem) => {
    return elem;
  });
  console.log(validate);

  //*Example 4: Check if any negative number

  let numbers = [5, 10, -3, 20];

  let negative = numbers.some((elem) => {
    return elem < 0;
  });
  console.log(negative);

  //*Example 5: Check if all prices are affordable

  let prices = [50, 75, 120, 30];

  let affordable = prices.every((elem) => {
    return elem <= 50;
  });
  console.log(affordable);
}

//*6. The reduce Method
{
  // 	esult = array.reduce((accumulator, currentElement) => {
  //  // return updated accumulator
  // }, initialValue);

  //* Example 1: Sum of all numbers

  let numbers = [1, 2, 3, 4, 5];

  let newNum = numbers.reduce((acc, elem) => {
    return (acc += elem);
  }, 0);
  console.log("newNum", newNum);

  //*Example 2: Find maximum value

  let number = [45, 78, 12, 89, 34];
  let maxNum = number.reduce((max, elem) => {
    return elem > max ? elem : max;
  }, number[0]);

  console.log(maxNum);

  //*Example 3: Count occurrences

  let fruits = ["apple", "banana", "apple", "mango", "apple"];

  let newFruits = fruits.reduce((counter, elem) => {
    counter[elem] = (counter[elem] || 0) + 1;
    return counter;
  }, {});
  console.log(newFruits);

  //*Example 4: Calculate total price

  let cart = [
    { item: "Shirt", price: 500 },
    { item: "Shoes", price: 1200 },
    { item: "Hat", price: 300 },
  ];
  let totalPrice = cart.reduce((sum, elem) => {
    return (sum += elem.price);
  }, 0);
  console.log(totalPrice);

  //*Example 5: Flatten nested arrays

  let nested = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  let newArr = nested.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  console.log(newArr);
}

//*7. Default Parameters
{
  // function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // function body
  // }

  //*Example 1: Simple greeting

  function greet(name = "Alice") {
    console.log("Hello" + " " + name);
  }
  greet();
  greet("Nargis");

  //*Example 2: Calculate with default rate

  function tax(amnt, taxRate = 1.18) {
    return amnt * taxRate;
  }
  let ans = tax(1000);
  console.log(ans);

  //* Example 3: Create user profile

  function profile(name, age = 1, country = "india") {
    return { name, age, country };
  }
  let res = profile("Nargis", 22, "Sri Lanka");
  let res2 = profile();
  console.log(res2);

  //*Example 5: Array operations

  function getSlice(arr, start, end) {
    return arr.slice(start, end);
  }
  let ans1 = getSlice([1, 2, 5, 8, 9], 0, 2);
  console.log(ans1);
}

//*8. The Spread Operator ( ... )

{
  //*copy an array
  let oldArray = [1, 2, 3];
  let arr = oldArray; // it is shllow copy when we will chnge in arr , old array will automatically chnge becz they take th refrence of array
  arr.push(5);

  const newArr = [...oldArray]; // deep copy when we will chnge in newArr old Array cannot chnge
  console.log(newArr);

  //*Example 2: Merge arrays

  let fruits = ["apple", "banana"];
  let vegetables = ["carrot", "potato"];

  let mergeArray = [...fruits, ...vegetables];
  console.log(mergeArray);

  //* Add elements while copying

  let numbers = [2, 3, 4];
  let addElelmnt = [...numbers, 5, 6, 7];
  console.log(addElelmnt);

  //*Example 4: Copy and update object
  // javascript
  let user = {
    name: "Tony Stark",
    email: "tony@stark.com",
  };

  let newUser = { ...user, city: "new York", email: "abc@gmail.com" };
  console.log(newUser);

  //*Example 5: Convert string to array
  let name = "HELLO";
  let newName = [...name];
  console.log(newName);
}

//*//*9. The Rest Operator ( ... )
{
  // 	function functionName(...restParams) {
  //  // restParams is an array
  // }

  //* Example 1: Sum any number of arguments

  function sum(...num) {
    let ans = num.reduce((sum, elem) => {
      return (sum += elem);
    }, 0);
    return ans;
  }
  // sum([1,2,3])
  let res = sum(1, 5, 8, 9, 56, 2);
  console.log(res);

  //*Example 2: First and rest

  function announce(first, ...rest) {
    console.log(`Winner : ${first}`);
    console.log(`Others : ${rest}`);
  }
  announce("Alice", "abc", "def", "ghi", "jkl");

  //*Example 3: Combine with regular parameters

  function combine(first, second, ...other) {
    return {
      first,
      second,
      other,
    };
  }
  let players = combine("Virat", "Rohit", "Dhoni", "Hardik", "Bumrah");
  console.log(players);

  //*Example 4: Find maximum

  function max(...num) {
    let value = num.reduce((max, elem) => {
      return elem > max ? elem : max;
    }, 0);
    return value;
  }
  console.log(max(45, 78, 23, 89, 34));

  //*Example 5: Multiply all numbers from multiplier

  function multiply(multiplier, ...num) {
    return num.map((elem) => elem * multiplier);
  }
  let ans = multiply(10, 1, 2, 5, 9, 7, 8);
  console.log(ans);
}

//*11. Array Destructuring
{
  //*Example 1: Basic destructuring

  let colors = ["Red", "Green", "Blue"];
  let [color1, color2, color3] = colors;
  console.log(color1, color2, color3);

  //*Example 2: Skip elements

  let numbers = [1, 2, 3, 4, 5];

  let [one, , three, , five] = numbers;
  console.log(one, three, five);

  //*Example 3: Swap variables

  // let a = 10
  // let b = 20
  // [a,b] = [b,a]
  // console.log(`a : ${a} b: ${b}`)
  let a = 10;
  let b = 20;
  [a, b] = [b, a]; // Swap
  console.log(a); // 20
  console.log(b); // 10

  //*Example 4: With default values

  let [a1 = 5, b1 = 10] = [1];
  console.log(a1);
  console.log(b1);

  //*Example 5: Get first and rest

  let scores = [95, 87, 92, 78, 85];
  let [first, ...rest] = scores;
  console.log("first", first);
  console.log("rest", rest);
}

//* 12. Object Destructuring

// let { property1, property2 } = object;
// let { property: newName } = object; // Renaming

{
  //* Example 1: Basic object destructuring

  let student = {
    name: "Rahul",
    age: 20,
    grade: "A",
  };

  let { name, age, grade } = student;
  console.log(name, age, grade);

  //*Example 2: Renaming variables

  let user = {
    username: "karan123",
    email: "karan@example.com",
  };

  let { username: id, email: gmail } = user;
  console.log(id);
  console.log(gmail);

  //*Example 3: With default values
  let settings = {
    theme: "dark",
  };
  let { theme = "light", lang = "eng" } = settings;
  console.log(theme);
  console.log(lang);

  //*Example 4: Nested destructuring

  let person = {
    name1: "John",
    address: {
      city: "Mumbai",
      pin: 400001,
    },
  };

  let {
    name1,
    address: { city, pin },
  } = person;
  console.log(name1);
  console.log(city);
  console.log(pin);

  //*Example 5: Function parameters

  function display(name, age, country = "india") {
    console.log(`${name} is ${age} years old from ${country}`);
  }
  display("Nargis", 22);
}

//*Practice question

// Create an array of 5 product names. Use forEach to print "Available: [product name]" for each product.

let arr = ["laptop", "mobile", "tabs", "earbuds", "blueThooth"];

arr.forEach((elem) => {
  console.log(elem);
});

// Exercise 2: map
// Create an array of numbers. Use map to create a new array where each number is multiplied by 10

let arr2 = [1, 5, 8, 3, 6, 7];

let newOne = arr2.map((elem) => {
  return elem * 10;
});
console.log(newOne);

//*Create an array of student objects with name and marks. Use filter to get all students who scored above 75.

let obj = [
  { name: "Alice", marks: 58 },
  { name: "Bob", marks: 90 },
  { name: "Cheh", marks: 96 },
];

let marks = obj.filter((elem) => {
  return elem.marks >= 70;
});
console.log(marks);

//*Create an array of prices. Use reduce to calculate the total cost

let ar = [1, 5, 8, 9, 6, 5];

let newAr = ar.reduce((acc, elem) => {
  return (acc += elem);
}, 0);
console.log(newAr);

//*Create two arrays of your favorite movies. Merge them using the spread operator

let subj = ["python", "js", "java", "css"];
let movie = ["DDLJ", "HDDS"];

let newMovie = [...subj, ...movie];
console.log(newMovie);

//*Create an object representing a book (title, author, year, pages). Use destructuring to extract title and author,
// renaming author to "writtenBy".

let book = {
  title: "Rich dad Poor Dad",
  author: "kiwaskai",
  year: "2024",
  pages: 55,
};

let {title, author} = book

console.log(title,"written by ", author)







