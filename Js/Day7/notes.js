console.log("hellow")


function helloWorld(){
	console.log("hellow world")
}

helloWorld()


//*2

function greet(){
	console.log("hellow javascript")

}
greet()
greet()


 function showMessage(){
	console.log("function is fun")
}
showMessage()


function javascript(){
	console.log("i was created in 1995");
	console.log("my name is javascript")
}
javascript()


function functionName(parameter1, parameter2){
	console.log("object")
}
functionName(1,2)


function greets(name){
	console.log("Hello", name)
}
greets("Nargis")


function sum(a, b){
	return a+b
}
let result = sum(1,2)
console.log(result)


function createMessage(name, age){
	console.log(`My name is ${name} and my age is ${age}`)
}
createMessage("Nargis", 22)


function calculateArea(l,b){
	let area = l * b
	return area
}
let res = calculateArea(5,8)
console.log(res)



let val = "Hi"

function outer(){
	 val = "Hello" //why ? when we not give let 
	console.log(val)
	function inner(){
		console.log(val)

	}
	inner()
}
console.log(val)
outer()


function test(){
	return 10
	console.log("Test is completed")
	return 20
}

let ress = test()
console.log(ress)

