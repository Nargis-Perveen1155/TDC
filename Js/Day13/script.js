// console.log("hello");

// console.log("before calculation");

// console.log("After the long calculation");

// //* all are synchronous programming

// // All of these are synchronous (instant)
// let x = 10;
// let y = 20;
// let sum = x + y;
// console.log(sum); // 30
// let name = "Alice";
// let greeting = "Hello, " + name;
// console.log(greeting); // Hello, Alice

// //*Asynchronous Code: Operations That Take Time

// console.log("starting======");

// setTimeout(() => {
//   console.log("asynch code");
// }, 3000);

// console.log("ending=============");

// //*3. I/O Bound vs. CPU Bound Tasks

// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log("calculating ....");
// let ans = fibonacci(13);
// console.log(ans);

// console.log("done");

// //*I/O Bound Tasks

// // fetch("https://api.example.com/data")
// //   .then((response) => response.json())
// //   .then((data) => console.log(data));

// // console.log("Request sent but not waiting");

// //*4. setTimeout: Your First Async Function

// console.log(" program start ");

// setTimeout(() => {
//   console.log("async2 code");
// }, 3000);

// console.log("program end");

// //*Multiple Timers

// console.log("Open CGC Portal");

// setTimeout(() => {
//   console.log("Header loaded");
// }, 1000);

// setTimeout(() => {
//   console.log("Student data loaded");
// }, 2000);

// setTimeout(() => {
//   console.log("Footer loaded");
// }, 500);
// console.log("Portal structure ready");

// //*Real Example: Form Submission Simulation

// function submitForm() {
//   console.log("submitting form");

//   setTimeout(() => {
//     console.log("Form submitted successfully!");
//     console.log("Redirecting to dashboard...");
//   });

//   console.log("plaese wait");
// }

// submitForm();

// ///* call back

// function greetName(name, callback) {
//   console.log("hello", name);
//   callback();
// }

// function sayBye() {
//   console.log("goood");
// }

// greetName("Alice", sayBye);

// //*Callbacks with Asynchronous Operations

// function fetchData(studentId, callback) {
//   console.log("Student information");

//   setTimeout(() => {
//     let StudentData = {
//       id: studentId,
//       name: "Rahul sharma",
//       course: "Computer science",
//     };
//     console.log("fetching data......");
//     callback(StudentData);
//   });
// }

// function detail(data){
// console.log(data.name)
// console.log(data.course)
// }

// fetchData(detail())

//*  Simple callback example

function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Execute the callback
}
function sayGoodbye() {
  console.log("Goodbye!");
}
greet("Alice", sayGoodbye);

//*Exercise 3: Error Handling

function randomOperation() {
  return new Promise((resolve, reject) => {
    console.log("promise start");

    setTimeout((random) => {
      let speed = Math.random();
      if (speed > 0.2) {
        resolve("success random value :", random);
      } else {
        reject("Not success");
      }
    }, 2000);
  });
}

randomOperation()
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

//*async

// Create a chain that simulates: Login → Fetch Profile → Fetch Posts

console.log("1. Program starts");
setTimeout(() => {
  console.log("2. This runs after 2 seconds");
}, 2000);
console.log("3. Program continues immediately");

console.log("Open CGC Portal");
setTimeout(() => {
  console.log("Header loaded");
}, 1000);
setTimeout(() => {
  console.log("Student data loaded");
}, 2000);
setTimeout(() => {
  console.log("Footer loaded");
}, 500);
console.log("Portal structure ready");

//*Callbacks with Asynchronous Operations

function fetchStudentData(callback) {
  console.log("fetching data for student id");

  setTimeout(() => {
    let student = {
      name: "Nargis",
      id: 1,
      roll: 21,
      course: "computer science",
    };

    console.log("data fetch successfully");
    callback(student);
  }, 2000);
}

function displayStudent(data) {
  //   console.log(name);
  console.log("name", data.name);
  console.log("age", data.age);
}

fetchStudentData(displayStudent);

//* callback function

function serviceVehicle(model, callback) {
  console.log("servicing start");

  setTimeout(() => {
    console.log(model);
    console.log("it takes time");
    callback();
  }, 1500);
}

function calling() {
  console.log("no call");
}

serviceVehicle("Honda city", calling);

//* color chnge

function changeColor(color, delay, callback) {
  //   document.body.style.backgroundColor = color;
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    console.log("color change");
    if (callback) callback();
  }, delay);
}

//callback hell
// changeColor("green", 4000, () => {
//   changeColor("red", 3000, () => {
//     changeColor("yellow", 2000, () => {
//       changeColor("blue", 1000, () => {
//         console.log("all color dones");
//       });
//     });
//   });
// });

//* second method

function colorChanger(color, delay) {
  return new Promise((resolve) => {
    // resolve((document.body.style.backgroundColor = color));
    setTimeout(() => {
      document.body.style.backgroundColor = color;
    }, delay);

    resolve();
  });
}

colorChanger("pink", 500)
  .then(() => {
    return colorChanger("teal", 1000);
  })
  .then(() => {
    return colorChanger("orange", 1500);
  })
  .then(() => {
    return colorChanger("brown", 2000);
  })
  .catch((err) => {
    console.log(err);
  });

//* Imagine: Register →→ Send Email Send Email →→ Update Database Update Database →→ Send W Send Welcome SMS elcome SMS

function register(username) {
  return new Promise((resolve, reject) => {
    console.log("registered successfull", username);
    // resolve();
    reject();
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    console.log("send email");
    resolve();
  });
}

function updateDB() {
  return new Promise((resolve, reject) => {
    console.log("updated successfully");
    resolve();
  });
}

function welcomeSMS() {
  return new Promise((resolve, reject) => {
    console.log("welcome sms");
    resolve();
  });
}

// //* first way
register("Alice", () => {
  sendEmail(() => {
    updatesDB(() => {
      welcomeSMS(() => {
        console.log("end");
      });
    });
  });
});

//* error handling in call back hell

// register((err, data)=>{
//   if(err){
//     console.log("err come in registered")
//   }
//   else{
//     sendEmail((err, data)=>{
//       if(err){
//         console.log("error comes in send eamil")
//       }
//     })
//   }
// })
//* second way
// register("Alice")
//   .then(() => {
//     return sendEmail();
//   })
//   .then(() => {
//     return updateDB();
//   })
//   .then(() => {
//     return welcomeSMS();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* third way

// async function cover() {
//   try {
//     await register();
//     await sendEmail();
//     await updateDB();
//     await welcomeSMS();
//     console.log("end");
//   } catch (err) {
//     console.log(err);
//     console.log("error");
//   }
// }

// cover();

//*Why Callback Hell is a Problem

// Error handling in callback hell is terrible

// getData((err, data) => {
//   if (err) {
//     console.error("Error in getData");
//   } else {
//     processData(data, (err, result) => {
//       if (err) {
//         console.error("Error in processData");
//       }
//        else {
//         saveData(result, (err, saved) => {
//           if (err) {
//             console.error("Error in saveData");
//           } else {
//             console.log("Success!");
//           }
//         });
//       }
//     });
//   }
// });

//*7. Promises: The Solution

// function getData() {
//   return new Promise((resolve, reject) => {
//     let success = Math.floor(Math.random() * 2);
//     if (success) {
//       resolve("Data get successfully");
//     } else {
//       reject("Data rejected successfully");
//     }
//   });
// }

// getData()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let getData = new Promise(() => {});

//* basic promise example

let ineternetSpeed = Math.random();

let myPromise = new Promise((resolve, reject) => {
  console.log("download started");

  setTimeout(() => {
    if (ineternetSpeed > 0.5) {
      resolve("file download successfully");
    } else {
      reject("file not download");
    }
  }, 500);
});

myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

//*Real Example: Database Operation

function saveDB(data) {
  return new Promise((resolve, reject) => {
    console.log("saving data....");

    setTimeout(() => {
      let availableDB = true;
      if (availableDB) {
        resolve({
          message: "Data saved successfully",
          id: 12345,
          timestamp: new Date(),
        });
      } else {
        reject("data save not ========");
      }
    }, 1000);
  });
}

// saveDB().then((msg)=>{
//   console.log(msg)
// })
// .catch((err)=>{
//   console.log(err)
// })

let saveData = saveDB({ name: "Aliceee", age: 25 });
console.log(saveData);

//* consuming promises

let promise = new Promise((resolve, reject) => {
  let ans = false;
  if (ans) {
    resolve("promise resolve");
  } else {
    reject("promise reject");
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

//* login
let login = "success";
let loginUser = new Promise((resolve, reject) => {
  if (login == "success") {
    resolve("login successfully");
  } else {
    reject("Login unsuccessfully");
  }
});

loginUser
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

  //* fetch user detail

  function fetchUserProfile(userId){
    return new Promise((resolve, reject)=>{
      if(userId){
        resolve((msg)=>{
          console.log(msg)
        })
      }
    })
  }


  //* 9. Promise Chaining: Escaping Callback Hell





