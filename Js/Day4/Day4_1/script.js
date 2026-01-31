console.log("hellow world")

let numbers = [10, 20, 30, 40, 50, 60, 70] 
let newNumber = numbers.slice(2,5)
let lastEle = numbers.slice(numbers.length-3)
console.log(newNumber)
console.log(lastEle)
console.log(numbers) // not chnge original array

let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"] 
let morningSongs = songs.slice(0,3)
let eveSongs = songs.slice(songs.length-2)
let firstSong = songs.slice(0,1)
console.log(morningSongs)
console.log(eveSongs)
console.log(firstSong)

let colors = ["red", "green", "blue", "yellow", "purple", "orange"]
let remEle = colors.splice(2,2)
console.log(remEle)
console.log(colors)


let numbers1 = [1, 2, 3, 7, 8, 9]
numbers1.splice(3,0,4,5,6)
console.log(numbers1)

// verify ?

let fruits = ["banana", "apple", "mango", "cherry", "orange"] 
let sortedFruits = fruits.sort()
console.log(sortedFruits)
let nums = [5, 10, 1, 100, 25]
let sortedNum = nums.sort()
console.log(sortedNum)



let  scores = [78, 92, 85, 88, 95, 73] 
let asc = scores.sort((a, b) => a - b)
console.log(asc)
let dec = scores.sort((a, b) => b - a) // why use a, b
console.log(dec)


let  words = ["JavaScript", "is", "awesome"]
let spc = words.join(" ")
let comma = words.join(",")
let withoutSpc = words.join("")
console.log(spc)
console.log(comma)
console.log(withoutSpc)


 let dateArray = ["2024", "12", "25"] 
 let slsh = dateArray.join("/")
 let hyphn = dateArray.join("-")
 console.log(slsh)
 console.log(hyphn)
 let time = ["14", "30", "00"]
 let formattedTime = time.join(":") 
 console.log(formattedTime)


 let numbers2 = [1, 2, 3, 4, 5] 
 let strConverted = numbers2.toString()
console.log(typeof(strConverted)) // string
 let jtn = numbers.join()
 console.log(jtn)


 let  grid = [[1, 2], [3, 4], [5, 6]] 
let update = grid.toString()
console.log(update)
let useJoin  = grid.join()
console.log(useJoin)

// both are same

let arr = new Array()
console.log(arr)
console.log(arr.length)
let arr2 = new Array(5)
console.log(arr2)
arr2.push(1,2,3,4,5,) // this is 5 empty array created whn i give length but i put the array length why its length become 10 why?
let newArray = new Array(10,20,30)
console.log(newArray)
console.log(newArray.length)

let arr3 = new Array("a", "b","c","d")
console.log(arr3)
let newArr3 = ["a", "b","c","d"]
console.log(newArr3) 
// literal array is more easier than first one


let arr4 = [1,2,3]
console.log(Array.isArray(arr4))
let greet = "Hello"
console.log(Array.isArray(greet))
let nums1 = 123
console.log(Array.isArray(nums)) 
let object = {
	"name":"john",

}
console.log(Array.isArray(object))

let data = [1, 2, 3] 
if(Array.isArray(data) == true){
	console.log(`It's an array with ${data.length} elements`)
}
else{
	console.log("not an array")
}
data = "Hello"
console.log(data)




let matrix = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
]

console.log(matrix[0][2])
console.log(matrix[2][0])
console.log(matrix[1][1])
matrix[1][1] = 50
console.log(matrix)

let seats = [
 ["Alice", "Bob", "Charlie"],
 ["David", "Eve", "Frank"]
];

console.log(seats[0][1])
console.log(seats[1][2])
let temp = seats[0][0];
console.log(temp)
seats[0][0] = seats[1][2]
seats[1][2] = temp
console.log(seats)



let grades = [
 ["John", 85, 90, 88],
 ["Sarah", 92, 88, 95],
 ["Mike", 78, 85, 80]
];
console.log(grades[0][2])
console.log(grades[1][0])
console.log(grades[2][1] + grades[2][2] + grades[2][3])


let game = [
 ["X", "O", "X"],
 ["O", "X", "O"],
 ["O", "X", "X"]
];

console.log(game[0][0])
console.log(game[1][1])
console.log(game[2][2])

let items = [10, 20, 30, 40, 50]

console.log(items.length)
items.length = 3
console.log(items) // it rmove extra elements

console.log(items[3]) // it is giving undefined

let numbers6 = [1, 2, 3]
numbers6[10] = 90
console.log("=====",numbers.length) // why its giving length 7 why?
console.log(numbers6[5]) //undefined


let words3 = [" hello ", " WORLD ", " JavaScript "] 
let trimElem1 = words3[0].trim()
let trimElem2 = words3[1].trim()
let trimElem3 = words3[2].trim()

let newArr = []
newArr.push(trimElem1, trimElem2, trimElem3)
console.log(newArr)
console.log(words3)
let sortedArr = newArr.sort()
let updArr = sortedArr.join(" ")
console.log(updArr)

let morningTasks = ["Exercise", "Breakfast", "Study"]
let eveningTasks = ["Dinner", "Reading", "Sleep"]

let concatedTask = morningTasks.concat(eveningTasks)
concatedTask.splice(3,0,"Lunch")
let finalTask = concatedTask.sort()
console.log(finalTask)



let original = [1, 2, 3, 4, 5]
let ref = original
let copy = original.slice()
// console.log(copy)
ref[0] = 99;
copy[0] = 88
console.log(original)
console.log(ref)
console.log(copy)

// original array is chnges with both method

let color = ["red", "green", "blue"] 
let palatte1 = colors
let palatte2 = colors
palatte1.push("yellow")
console.log(color)
console.log(palatte1)
console.log(palatte2)
// here all three have yellow color bcz they have same address and this add have one array , and all of have ref of aarry


let number = [10, 20, 30, 40, 50] 
let firstEle = number.shift()
number.push(firstEle)
console.log(number)
let secEle = number.shift()
number.push(secEle)
console.log(number)


let items2 = ["apple", "banana", "cherry", "date", "banana"]
let indOfBanana = items2.indexOf("banana")
console.log(indOfBanana)
items2.splice(1,1)
console.log(items2)
console.log(items2.includes("banana"))
console.log(items2.indexOf("banana"))



let numb = [5, 10, 15, 20, 25] 
console.log(numb.length) // not present index 7
if(numb[7] < numb.length){
	console.log("yes present index 7")
}
else{
	console.log("not present index 7")
}
console.log(numb[2])

if(numb[22] != undefined){
	console.log("Yes present index 2")
}
else{
	console.log("not present index 2") //why its giving 
}


let data5 = [1,2,3]
console.log(Array.isArray(data5))
if(data5.length > 0){
	console.log(data5[0])
}
else{
	console.log("less than zero")
}

data5 = "hello"
if(data5.length > 0){
	console.log(data5[0])
}
else{
	console.log("its a string")
}


//*shopping cart system
let cart = []
cart.push("Laptop", "Mouse", "keyboard")
console.log(cart.length)
console.log("all cart",cart)
cart.pop()
let newCart = cart.join(" ")
console.log(newCart)



let  highScores = [150, 200, 180, 220, 190]
let sorted = highScores.sort((a,b)=> a - b)
console.log(sorted)
console.log(sorted[0])


let sparse = [1, , , 4, , 6]
console.log(sparse.length)
console.log(sparse[2])
sparse.push(7)
console.log(sparse, sparse.length)

let numbers12 = [1, 10, 2, 20, 3, 30] 
console.log(numbers12.sort())
console.log(numbers12.sort((a,b)=> a-b))


let tasks = ["Task1", "Task2", "Task3", "Task4"]
let fristTask = tasks.shift()
tasks.push(fristTask)
tasks.splice(1,0,"Task2.5")
console.log(tasks)
tasks.splice(2,1)
console.log(tasks)


let allScores = [85, 92, 78, 95, 88, 73, 90] 
let copyAllScore = allScores.slice(0)
copyAllScore.sort((a,b)=> a-b)
copyAllScore.shift()
copyAllScore.pop()
let avg = (allScores[0]+allScores[1]+allScores[2]+allScores[3]+allScores[4])/5
console.log(avg)


