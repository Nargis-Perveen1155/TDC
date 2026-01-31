console.log("hello day 4");
let userInput = " HeLLo JaVaScRiPt ";
let cleanInput = userInput.trim().toLowerCase();
console.log(userInput);
console.log(cleanInput);

let email = " USER@EXAMPLE.COM ";
let formattedEmail = email.trim().toLowerCase();
console.log(email);
console.log(formattedEmail);

let sentence = "JavaScript is awesome and JavaScript is fun";
let find1 = sentence.indexOf("awesome");
let find2 = sentence.indexOf("Javascript");
let find3 = sentence.indexOf("Python");
console.log(find1, find2, find3);

let message = "Welcome to coding class";

if (message.indexOf("coding") !== -1) {
  console.log("found coding");
} else {
  console.log("not found coding");
}

let rawData = " MESSY iNpuT ";
let processedData = rawData.trim().toLowerCase();
console.log(rawData);
console.log(processedData);

let password = " MyP@ssw0rd123 ";
let securePassword = password.trim().toUpperCase().slice(0, 9);
console.log(password);
console.log(securePassword);

let fullName = "Alexander Hamilton";
let firstName = fullName.slice(0, 9);
let lastName = fullName.slice(10);

console.log(firstName);
console.log(lastName);

let phone = "9876543210";
let areaCode = phone.slice(0, 3);
let lastFour = phone.slice(phone.length - 4); //why ? if i want to reverse it
console.log(`Area code: ${areaCode}, Last four: ${lastFour}`);

let announcement = "The event will happen on Monday and Monday only";
let updatedAnnouncement = announcement.replace("Monday", "Friday");
console.log(announcement);
console.log(updatedAnnouncement);

let template = "Hello NAME, welcome to our website";
console.log(template.replace("NAME", "Alice"));

let colors = ["red", "green", "blue", "yellow"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors.length);

let scores = [85, 92, 78, 90, 88];

console.log(scores[2]);
scores[0] = 95;
console.log(scores);
let sum = scores[0] + scores[1];
console.log(sum);

let array = [];
console.log(array);
array.push("song1");
array.push("song2", "song3");
console.log(array);
let removedSong = array.pop();
console.log(array);
array.unshift("song0");
console.log(array);
console.log(removedSong);

let queue = ["First", "Second", "Third"];
let serve = queue.shift();
queue.push("Fourth");
queue.shift();
console.log(queue);

let fruits = ["apple", "banana", "mango", "orange", "banana"];
console.log(fruits.indexOf("mango"));
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("grape"));

let inventory = ["laptop", "mouse", "keyboard", "monitor"];
console.log(inventory.includes("mouse"));
console.log(inventory.includes("printer"));

if (inventory.includes("mouse") !== !true) {
  // equal to true
  console.log("Mouse is available");
} else {
  console.log("Printer is not available");
}

let morningClasses = ["Math", "English", "Science"];
let afternoonClasses = ["History", "Art", "PE"];
let fullSchedule = morningClasses.concat(afternoonClasses);
console.log(fullSchedule);
console.log(fullSchedule.length);

let numbers = [1, 2, 3, 4, 5];
let reversedNum = numbers.reverse();
console.log("real data", numbers);
console.log("reversed data", reversedNum);

let months = ["Jan", "Feb", "Mar", "May", "Jun"];
months.splice(3, 0, "April"); // why ? not working when variable create

console.log(months);
let indexOfApr = months.indexOf("April") - 1;
console.log("index of april", indexOfApr);
if (
  months.indexOf("April") == months.indexOf("Mar") - 1 &&
  months.indexOf("April") == months.indexOf("May") + 1
) {
  console.log("between me hai");
} else {
  console.log("not in between"); //false result why ?
}

let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
students.splice(2, 1, "Frank", "Grace");
console.log(students);

let original = [1, 2, 3];
let ref = original;
ref[0] = 99;
console.log(original);
console.log(ref);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
if (arr1 === arr2) {
  console.log("equal");
} else {
  console.log("not equal");
}

let board = [
 ["X", "O", "X"],
 ["O", "X", "O"],
 ["X", "O", "X"]
];
console.log(board[0][1])
console.log(board[2][2])
board[1][1] = "O"
console.log(board)

let score = [
 ["Alice", 85, 90, 92],
 ["Bob", 78, 85, 88],
 ["Charlie", 92, 88, 95]
];

console.log(score[0][2])
console.log(score[2][0])
let bobAvgScore = (score[1][1] + score[1][2]+ score[1][2])/3
console.log(bobAvgScore)

score[1][1] = 82
console.log(score)
