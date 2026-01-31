console.log("Day8");

let student = {
  name: "Alice",
  eng: 52,
  math: 89,
  phy: 56,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
  },
};

console.log(student.getAvg());

//*

let account = {
  holder: "Sarah",
  balance: 5000,
  getDeposite(amount) {
    this.balance = this.balance + amount;
    console.log(this.balance);
  },
};

account.getDeposite(5000);

//*

const cart = {
  items: ["apple", "banana"],
  total: 2,
  addItem(item) {
    this.items.push(item);
    this.total = this.items.length;
    console.log(`Added ${item} : Total items : ${this.total}`);
  },
};

cart.addItem(["mango", "papaya"]);

//*Example 1: Handling Missing Variables

console.log("program start");

try {
  console.log(tool);
} catch {
  console.log("there is a refrence error");
}
console.log("program continue");

//*Example 2: Division Error

function divide(a, b) {
  try {
    if (b === 0) {
      throw "Cannot divide by 0";
    }
    return a / b;
  } catch (err) {
    console.log(err);
  }
}

let res = divide(10, 2);
console.log(res);

//*Example 3: User Input Validation

function validateAge(age) {
  try {
    if (age < 0) {
      throw "Age cannot be negative";
    }
    if (age > 150) {
      throw "Age not look realistic";
    }
    console.log(`Valid age ${age}`);
  } catch (err) {
    console.log(err);
  }
}

validateAge(-1);

//* Arrow function

// const sum = function(a, b){
// 	return a + b
// }

const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 4));

const greet = (name) => {
  console.log(`hello ${name}`);
};
greet("Nargis");

//*

const square = (num) => num * num;
console.log(square(5));

function calculateTotal(price, tax) {
  let res = price + price * tax;
  return res;
}
calculateTotal(5000, 2);

//*5

let num = [2, 5, 8, 6, 4];

// let double = num.map((num) => {
//   num * 2;
//   console.log(double);
// });

let even = num.filter(num => 
  num % 2 == 0

);  console.log("even",even);

//* setTimeout

console.log("starting")

setTimeout(()=>{
  console.log("this apear after 3 seconds")
},3000)

console.log("Continueing....")

//* Delayed Greeting

function greetUser(name){
  setTimeout(()=>{
    console.log("welcome back", name)
  },2000)
}
greetUser("Alice")



//* Repeating Counter

// let count = 0
// let id  = setInterval(()=>{
//   count++
//   console.log(`count : ${count}`)

//   if(count === 5){
//     clearInterval(id)
//     console.log("counter stopped")
//   }
// },1000)

//*Clock display

let seconds = 0

// setInterval(()=>{
//   seconds++;
//   console.log(`Elapsed time ${seconds} seconds`)
// },1000)

//* stopping an interval

// let intervalId = setInterval(()=>{
//   console.log("Repeating message")
// },2000)

// setTimeout(()=>{
//   clearInterval(intervalId)
//   console.log("interval stopped")
// },1000)

//* this with arrow function

const student2 = {
  name:"Alex",
  marks:95,
  getName(){
    return this.name
  },

  getMarks(){
return this.marks
  }
}
console.log("========",student2.getName())
console.log(student2.getMarks())

//*9

const user = {
  name:"Sarah",
  greet(){
    setTimeout(()=>{ // in arrow function this will work but if we use normal function here it will not work
      console.log(`this is using settimeout ---Hello ${this.name}`)
    },1000)
  }
}
user.greet()

//*

// const user ={
//   name:"Sarah"
// }

//* 3 solution with arrow function
let userr = {
  name:"Nargis",
  greet(){
    setTimeout(function(){
      console.log("Hellow", this.name)
    },1000)
  }
}

user.greet()

//*
let counter = {
  count : 0,
  start:function(){
    setInterval(()=>{
      this.count++
      console.log(this.count)
    },1000)
  }
}

//* when not to use arrow function

const calculator = {
  value:0,
  add:(num)=>{ //  arrow function avoid with method
    this.value += num
  },

  subtract:function(num){
    this.value-= num
  }
}