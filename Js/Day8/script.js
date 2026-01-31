//* create a car object

console.log("Day8 assignment");
let car = {
  brand: "Tesla",
  model: 1002,
  price: 5000,
  displayinfo() {
    console.log(this.brand, this.model, this.price);
  },
  applyDisc(disc) {
    this.price = this.price - disc;
	console.log("final price",this.price)
  },
};

car.displayinfo();
car.applyDisc(2000);

//* student grade calculator

let student = {
  name: "Alice",
  subject: [{ eng: 50 }, { maths: 60 }, { sci: 80 }],
  calculateAvg() {
    let avg =
      (this.subject[0].eng +
        this.subject[1].maths +
        this.subject[2].sci) /
      3;
    console.log(avg);
  },
  displayReport(){
    console.log(
      `Student name : ${
        this.name
      } and their average marks is ${this.calculateAvg()}`
    );
  },
};

student.calculateAvg();
student.displayReport();


function safeDivide(a,b){
	try{
		if(b == 0){
			throw "Connot divide by 0"
		}
		return a/b
	}
	catch(err){
		console.log(err)
	}
}
let ans = safeDivide(4,2)
console.log(ans)

//* Arraya access validator

function getElement(arr, index){
	try{
		if(index < 0){
			throw "index cannot be negative"
		}
		if(index > arr.length){
			throw "index out of bound"
		}
		return arr[index]

	}
	catch(err){
		console.log(err)
	}
}
let ans1 = getElement([1,2,3], 2)
console.log("arrr",ans1)
//* Arrow function tempreature converter

// function celciusToFarenheit(){
// 	return (celius * 9/5) +32
// }

const celciusToFarenheit = (celsius) =>{
	return (celsius * 9/5) +32
}

let res = celciusToFarenheit(100)
console.log("farenhiet",res)

//*Array filter and transform

let number = [1,2,3,5,8,9,5,11,12]

const value = () =>{
	for(let i=0;i<number.length;i++){
		if(number[i] < 10){
			console.log("array less 10",number[i])
		}
		else{
			let res = number[i]*number[i]
			console.log("square",res)
		}
	}
}

value()

//* Timing events

let count = 10

let timer = setInterval(()=>{
	count--
	console.log(count)
	if(count == 0){
		clearInterval(timer)
		console.log("countdown stopped")
	}
},1000)


//* text animation

const animateFunction = (text)=>{
	let indexCounter = 0;
	const id = setInterval(()=>{
		text[indexCounter];
		indexCounter++
	},1000)
	if(indexCounter = text.length){
		clearInterval(id)
	}
}
animateFunction("Nargis")

//*

