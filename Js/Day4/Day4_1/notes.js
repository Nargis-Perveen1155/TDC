let contacts = []
contacts.push("Alice: 1234567890")
contacts.push("Bob: 9876543210")
contacts.push("Charlie: 5555555555")
let found = contacts[contacts.indexOf("Bob: 9876543210")]

if(found){
	console.log("yes present")
}



let tasks = ["Buy groceries", "Clean room", "Study JavaScript"];
console.log(tasks.length)
let completed = tasks.splice(1,1)
console.log(completed[0])
console.log(tasks)

// Example 3: High score tracking
let scores = [150, 200, 180, 220, 190];
let sorted = scores.sort((a,b)=>b-a)
let highScore = sorted.shift()
console.log("-----------",highScore)
let top3 = scores.slice(0,3)
console.log(top3)

// Example 1: Shopping cart
let cart = [];
cart.push("Laptop")
cart.push("Mobile")
cart.push("Keyboard")
console.log(cart.length)
console.log(cart.join(","))


// Example 1: Empty array is truthy
let arr = [];
if(arr){
	console.log("empty array is truthy value")
}
else{
	console.log("falsy value")
}
if(arr.length == 0){
	console.log("length is 0")
}
console.log(arr.length)

// Example 5: Building array from pieces
let part1 = [1, 2];
let part2 = [3, 4];
let part3 = [5, 6];
let final = part1.concat(part2).concat(part3)
console.log(final)


// Example 3: Removing specific value
let items = ["apple", "banana", "mango", "banana"];
let index = items.indexOf("mango")
if(items.indexOf("mango") == -1){
	console.log(items[index])
}
else {
	// console.log(items.splice(index,1))
	let removeItem = items.splice(index,1)
	console.log(items)
}



// Example 2: Creating true copy with slice
let original = [1, 2, 3];
let copy = original.slice();
copy[0] = 99;
console.log("-------------",original); // [1, 2, 3] (unchanged)
console.log("=========",copy); // [99, 2, 3]
// Example 3: Nested arrays - shallow copy issue
let nested = [[1, 2], [3, 4]];
let copy2 = nested.slice();
copy2[0][0] = 99;
console.log("-------------",nested); 
console.log("=========",copy2)// [[99, 2], [3, 4]] (inner array changed!)