// // let hallticketNumber = prompt("Enter your hallticket number");
// // let collegeCode = Number(hallticketNumber.slice(0, 4))
// // let year = Number(hallticketNumber.slice(4, 6));
// // let department = Number(hallticketNumber.slice(6, 10));
// // let rollNumber = Number(hallticketNumber.slice(10));
// // console.log("college code :", collegeCode);
// // console.log("year :", year);
// // console.log("department", department);
// // console.log("roll Number", rollNumber);

// // switch (collegeCode) {
// //   case 1610:
// //     console.log("Your college name is NSAKCET");
// //     break;
// //   case 1611:
// //     console.log("Your college name is Women's College");
// //     break;
// //   case 1612:
// //     console.log("Your college name is Osmania University");
// //     break;
// //   case 1613:
// //     console.log("Your college name is Karim city College");
// //     break;
// //   case 1614:
// //     console.log("Your college name is Graduate College");
// //     break;
// // }

// // switch (year) {
// //   case 24:
// //     console.log("your year is 2024");
// //     break;
// //   case 25:
// //     console.log("your year is 2025");
// //     break;
// //   case 26:
// //     console.log("your year is 2026");
// //     break;
// //   case 27:
// //     console.log("your year is 2027");
// //     break;
// // }

// // switch (department) {
// //   case 8620:
// //     console.log("You are from FSDA department");
// //     break;
// //   case 8630:
// //     console.log("Your are from Artificial Intellegnce department");
// //     break;
// //   case 8640:
// //     console.log("You are from Machine learning department");
// //     break;
// //   case 8650:
// //     console.log("you are from Android development department");
// //     break;
// // }

// //* input [1,2,3,4,5,6,7,8]
// //* output [2,4,6,8]

// // console.log(![], [] == ![] && [] === ![]);
// console.log(typeof new String("str") === typeof String("str"));
// console.log([] == ![]);

// let obj = { a: 1, b: 1 };
// let key = "a";
// console.log(obj.key);

// let data = {
//   user: {
//     profile: {
//       name: "Alex",
//     },
//   },
// };
// let {
//   user: {
//     profile: { name },
//   },
// } = data;

// console.log("====", name);

// let obj1 = { a: { b: 10 } };
// let temp = obj1.a;
// temp.b = 20;
// console.log(obj1.a.b);

// let arr = [{ x: 1 }, { x: 2 }];
// let ref = arr[0];
// ref.x = 100;
// console.log(arr[0].x);
// // console.log(ref)

// console.log("floor", Math.floor(Math.random()));

// {
//   console.log(Math.random() * arr.length);
//   console.log(Math.floor(Math.random() * arr.length));
//   console.log(Math.ceil(Math.random() * arr.length));
//   console.log(Math.round(Math.random() * arr.length));
// }

// {
//   let p = new Promise((resolve) => resolve("Done"));
//   p.then(console.log);
//   console.log("End");
// }

// {
//   function createSecret() {
//     let secret = "I love JS";
//     return {
//       getSecret: () => secret,
//       setSecret: (newVal) => {
//         secret = newVal;
//       },
//     };
//   }
//   let ans = createSecret();
//   console.log(ans);
// }
// {
//   // var x = 10;
//   function x() {
//     console.log("*********",x);
//     // var x = 20;
//   }
//   x();
// }
// {
//   for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// }
// {
  
// // foo()
// console.log("fooooo",foo);
// var foo = function() { return 1; };
// //  function foo() { return 1; };
// }

// {
//   var x = 1;
// function outer() {
// var x = 2;
// function inner() {
// x++;
// console.log("==========",x);
// }
// return inner;
// }
// const fn = outer();
// fn();
// fn();
// }

// {


//   let obj = {
//     name : "nargis",
//     method : ()=>{
// console.log("thissssss",this.name)
//     }
//   }
//   obj.method()
// }
// {
//   const obj = {
// data: 'Success',
// print: () => console.log("thisssssssssssssssssss2",this.data)
// };

// obj.print();
// }
// {
//   let x = 1;
// try {
// x = 2;
// throw 'error';
// x = 3;
// } catch (e) {
// x = 4;
// }
// console.log(x);
// }
// {
// //   const greet = name => { Hello ${name} };
// // console.log(greet('Alex'));
// }

// {

//   function a() {
// return b();
// }
// function b() {
// return 'Hello';
// }
// console.log("------------------",a());
// }

// {
//   function abc(){
//     return "abc"
//   }
//   console.log(abc())
// }

// {
//   let x = { a: 1, b: 2 };
// delete x.a;
// console.log('a' in x,"+++++++++++++++++++++++");
// }
// {
//   let obj = {a: 1, a: 2}; console.log(obj.a);
// console.log( Math.pow( Math.sqrt(9),2))
// }
// {
//   const fn = (a, b) => {
// return
// a + b;
// };
// console.log(fn(2, 3));
// }

// console.log("day 9")

// {
//   let arr = [1, 2, 3];
// let result = arr.forEach(x => x * 2);
// console.log(result);
// }

// {
//   let [x, y = 10] = [5];
// console.log(x, y);
// }

{
  console.log("***********************************************************")
function Name() {
console.log(this);
}
Name()
  console.log(getName()); // Output: "Namaste JavaScript"
console.log(x); // Output: undefined
var x = 7;
function getName() {
 console.log("Namaste JavaScript");
}
}
{

  //* TEST ASIGNMET
   const numbers = [4, 11, 2, 15, 8, 20];
   let finalNumber =  numbers.filter((elem)=>{
    if(elem < 10){
      return elem
    }
   }).map((elems)=>{
    return elems* 5
   })

  console.log(finalNumber)

  //* second

  
}