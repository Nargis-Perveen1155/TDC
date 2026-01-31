console.log("color palatte");

// let box = document.querySelector('div')
let container = document.querySelector("#container");
let mainBox = document.createElement("div");
let box1 = document.createElement("div");
let box2 = document.createElement("div");
let box3 = document.createElement("div");
let box4 = document.createElement("div");
let button = document.createElement("button");

container.appendChild(mainBox);
mainBox.appendChild(box1);
mainBox.appendChild(box2);
mainBox.appendChild(box3);
mainBox.appendChild(box4);
mainBox.appendChild(button);

button.innerText = "Click";

mainBox.classList.add("mainBox");
button.classList.add("button");
box1.classList.add("box1");
box2.classList.add("box2");
box3.classList.add("box3");
box4.classList.add("box4");

let colorArr = ["red", "green", "blue"];
function colorChanger() {
  // for(let i=0;i<colorArr.length;i++){
  // 	let indx =  Math.floor(Math.random() *255)
  // 	colorArr[indx]
  // 	console.log(object)
  // }
  // return `rgb(${red}, ${green}, ${blue})`
  
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255); //0 to 255
  return `rgb(${red}, ${green}, ${blue})`;
}

button.addEventListener("click", function () {
  box1.style.backgroundColor = colorChanger();
  box2.style.backgroundColor = colorChanger();
  box3.style.backgroundColor = colorChanger();
  box4.style.backgroundColor = colorChanger();
});
