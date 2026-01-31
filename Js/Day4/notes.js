console.log("Hellow world")
// alert("Welcome to js")

let text = "javascript"
let newText = text.toUpperCase()
console.log(newText)


let message = " hello "
let newMessage = message.trim()
console.log(newMessage)

let word = "Mountain"
let newWord = word.slice(1,5)
console.log(newWord)

let username = " coding_wizard ";
let userName = username.trim()
console.log(userName)

let email = " user@example.com ";
let newEmail = email.trim()
console.log(newEmail)

let text1 = " hello world ";
let newText1 = text1.trim()
console.log(newText1)

let original = " test ";
let trimmed = original.trim()
console.log(original)
console.log(trimmed)

let input = " ";
console.log(input.trim())
console.log(typeof(input))


let greeting = "hello geeta"
greeting.toUpperCase() 
console.log(greeting)

let message1 = "javascript";
let upper = message1.toUpperCase()
console.log(upper)
console.log(message1)

let word1 =  "cat"
word1[0] = "b"
console.log(word1) 

let text2 = " HELLO ";
let result = text2.trim().toLowerCase()
console.log(result)
console.log(text2)


let first = "hello"
let second = "world"
let final  = first + second
console.log(final)

let msg = "JavaScript is Fun";
console.log(msg.toUpperCase())

let shout = "STOP YELLING";
console.log(shout.toLowerCase())

let userInput = "YeS";
if(userInput.toLowerCase() === "yes"){
	console.log("user agreed")
}

let mixed = "HeLLo WoRLd";
console.log(mixed.toLowerCase())
console.log(mixed.toUpperCase())



let email1 = "User@EXAMPLE.COM";
console.log(email1.toLowerCase)


let str = "Window"
console.log(str.indexOf('W'))
console.log(str.indexOf('o'))

let sentence = "I love JavaScript";
console.log(sentence.indexOf("Jav"))
console.log(sentence.indexOf("lo"))
console.log(sentence.indexOf(" "))
console.log(sentence.indexOf("Java"))

let text21 = "Hello World";
console.log(text21.indexOf('z'))

let messages = "Welcome to coding";
if(messages.indexOf("coding") !== -1){
	console.log("found the word coding")
}

let abc = "hello"
let newAbc = abc.trim().toLowerCase()
console.log(newAbc)
console.log(abc)

let input1 = " JAVASCRIPT ";
let newInput1 = input1.trim().toLowerCase().slice(4,10)
console.log(newInput1)

let sen = "A big fox in the jungle "
let newSen = sen.toUpperCase().trim().slice(6).replace("jungle", "dungle")//why ?
console.log(newSen)

let ab = "abcdefghij123"
console.log(ab.toUpperCase().replace("abc", "pqr"))


let word5 = "Mountains";
let text5 = "JavaScript";
let message5 = "Hello World";
let lang5 = "JavaScript";
console.log(word5.slice(4,5))
console.log(text5.slice(4,10))
console.log(message5.slice(5,6))
console.log(lang5.slice(-6))



let fruit = "I love apple pie";
console.log(fruit.replace("love", "dove"))

let text6 = "  I love apple pie and apple juice";
console.log(text6.replaceAll("apple","mango"))
console.log(text6.replace("apple", "banana").trim())


let colors = ["red", "green", "blue"];
console.log(colors)

let fruits = ["apple", "banana", "mango"];
console.log(fruits[0], fruits[1

	
])
let mixed1 = ["hellow", 3.14, true, 42]
console.log(mixed1[1])
console.log(mixed1[2])
console.log(mixed1.length)
let arr =  mixed1[mixed1.length-2]
console.log(arr) //why? it is giving length

let scores = [85, 90, 75, 88];
if(scores[2] >= 80){
	console.log("larger")
}
else{
	console.log("smaller")
}

let arr2 = ["a", "b", "c"];

arr2[0] = "z"
console.log(arr2) 


//* array

let array = ["apple","mango"]
array.push("banana") // it put the element in from last
console.log(array)
array.push("banana", "pea") 
console.log(array)

let popEle = array.pop()
console.log(array)
console.log(popEle) // it will remove from last

//*push -  insert from last
//*unshift -  insert from first

let abs = [1,2,3,4]
abs.unshift(51)
console.log(abs)
abs.shift()
console.log(abs)

// let items = ["first", "second", "third"]; why?
// let firstItem = items.shift();
// console.log(firstItem);  // first
// console.log(items); // second , third

let color = ["green","red","blue"]
console.log(color.includes("red"))
color.push("black")
color.unshift("pink")
console.log(color)
color.replace("green, voilet") 
console.log(color.indexOf("green"))
color[1] = "sky"
console.log(color)
console.log(color.includes("sky"))

let flag = ["orange", "green"]
let newFlag = ["white"]
let finalFlag = flag.concat(newFlag)
console.log(finalFlag)

let num = [1,2,3,4,5]
console.log(num.reverse())

let aph = ["a", "b","c",]
let alp = ["c","d"]
let finaly = aph.concat(alp)
console.log(finaly)
console.log(finaly.indexOf('c')) //why?