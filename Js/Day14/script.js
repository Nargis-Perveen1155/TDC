// //* fetch user data using . then

// fetchUserData()
// .then((user)=>{
// console.log(user.id)
// return fetchUserData(user.id)
// }).then((post)=>{
// 	console.log(post)
// 	return fetchUserData(post.id)
// }).then((comment)=>{
// console.log(comment)
// })
// .catch((errMsg)=>{
// 	console.log(errMsg)
// })

// //*async await

// async function getUserData(){
// 	try{
// 		let user = await fetchUserData()
// 	console.log(user)

// 	let user2 = await fetchUserData(user.id)
// 	console.log(post)

// 	let user3 = await fetchUserData(user.post)
// 	console.log(comments)
// 	}
// 	catch(err){
// 		console.log(err)
// 	}
// }

//*Example 1: Normal Function vs Async Function

function greet(name) {
  console.log("hello", name);
}
console.log(greet("Alice"));

//* async

async function greets(name) {
  return name;
}
console.log(greets("Bob"));

greets().then((msg) => {
  console.log(msg);
});

async function asyncGreeting() {
  return "Hello, Student!";
}
console.log(asyncGreeting());

asyncGreeting().then((msg) => {
  console.log(msg);
});

//*Example 2: Async Function Returning Different Values

async function getCourse(name) {
  return name;
}
console.log(getCourse());

getCourse()
  .then((msg) => {
    console.log("nargis");
  })
  .catch((msg) => {
    console.log(msg);
  });

//* student count

async function getStudentCount() {
  return 50;
}
getStudentCount().then((num) => {
  console.log(num);
});

//* student info

async function studentInfo() {
  return {
    name: "Nargis",
    class: 3,
    roll: 12,
  };
}

studentInfo().then((msg) => {
  console.log(msg);
  console.log(msg.roll, msg.class, msg.name);
});

//*Example 3: Async Function with Errors

async function divide(a, b) {
  if (b == 0) {
    throw new Error("b cannot be zero");
  }
  return a / b;
}

console.log(divide());

//success case
divide(10, 5)
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
// error case
divide(10, 0)
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

//* coffee making

function makeCoffee() {
  console.log("why not run");
  setTimeout(() => {
    console.log("preparing coffee");
  }, 2000);
}
function coffee() {
  console.log("order coffee");
  makeCoffee(); // synchronousy run
  console.log("u r doing other things");
}

coffee();

//* coffe order async way

async function coffeeOrder() {
  await coffee()
    .then((msg) => {
      console.log("async before",msg);
    })
    .catch((msg) => {
      console.log("async after",msg);
    });
}

coffeeOrder();
