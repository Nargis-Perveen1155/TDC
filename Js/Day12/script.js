console.log("hello day 12");

// element.addEventListener(eventType, callbackFunction);

//* Example 1: Basic Button Click
let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "click";
body.appendChild(btn);

btn.addEventListener("click", function () {
  console.log("btton is clicked");
});

//*Example 2: Multiple Listeners on Same Element

btn.addEventListener("mouseenter", function () {
  console.log("mouse enter ");
});
btn.addEventListener("mousedown", function () {
  console.log("mouse down");
});

//*Example 3: Paragraph Click Counter

let para = document.querySelector("#para");
let count = 0;

para.addEventListener("dblclick", function () {
  count++;
  para.innerText = `You clicked me ${count} time`;
});

//*Example 1: Hover Color Change

let box = document.createElement("div");
box.innerText = "Hii";
body.insertAdjacentElement("beforeend", box);
box.style.border = "2px solid black";
box.style.height = "200px";
box.style.width = "400px";

box.addEventListener("mouseenter", function () {
  console.log("mouse enter");
  box.style.backgroundColor = "blue";
});
box.addEventListener("mouseleave", function () {
  box.style.backgroundColor = "pink";
});

let para2 = document.createElement("p");
let button2 = document.createElement("button");

body.insertAdjacentElement("afterbegin", para2);

para2.innerText = "This is my para 2";
button2.innerText = "hide";
body.insertAdjacentElement("afterbegin", button2);

button2.addEventListener("click", function () {
  if (para2.style.display == "none") {
    button2.innerText = "Hide";
    para2.style.display = "block";
  } else {
    button2.innerText = "show";
    para2.style.display = "none";
  }
});

//*Example 3: Double Click to Edit

let h1 = document.querySelector("h3");

h1.addEventListener("dblclick", function () {
  h1.innerText = "this is converted heading";
  h1.style.color = "red";
});

//*inertactive card hover

box.addEventListener("mouseenter", function () {
  box.style.scale = "scale(1.1)";
  box.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  console.log("card ");
});

//* universal color chnage

function colorChange() {
  this.style.backgroundColor = "brown";
  console.log(this.innerText + "was clicked");
}

h1.addEventListener("click", colorChange);
para2.addEventListener("mouseenter", colorChange);

// let boxes = document.querySelectorAll('div')

// function toggleActive(){
// 	this.classList.toggle("active")
// }
// for(let b of boxes){
// 	boxes.addEventListener("click", toggleActive)
// }

//* delete button

let boxes = document.querySelectorAll("div");
function deleteItems() {
  this.parentElement.remove(); // Remove the parent div
  console.log("Item deleted!");
}

for (let bt of boxes) {
  console.log("===========");
  bt.addEventListener("click", deleteItems);
  console.log("===========");
}

//*menu items

let menuItems = document.querySelectorAll(".menu-item");
console.log(menuItems);
function highlight() {
  // Remove highlight from all items
  for (let item of menuItems) {
    item.style.fontWeight = "normal";
  }
  // Highlight clicked item
  this.style.fontWeight = "bold";
  this.style.color = "red";
}

for (let item of menuItems) {
  item.addEventListener("click", highlight);
}

//*Example 1: Display Typed Character

let inpt = document.querySelector("input");

console.log("input", inpt);
inpt.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
});

//*Example 2: Arrow Key Navigation (Game Controls)

let arrow = document.querySelector(".arrow");
arrow.style.margin = "1px"

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.code === "ArrowUp") {
    // this.style.color  = "blue"
    // console.log(parseInt(arrow.style.margin));
    arrow.style.marginTop = parseInt(arrow.style.marginTop) - 10 + "px";
  } else if (event.code === "ArrowDown") {
    console.log("down arrow");
    arrow.style.marginTop = parseInt(arrow.style.marginTop) + 10 + "px";
  } else if (event.code === "ArrowLeft") {
    console.log("Move Left");
    arrow.style.marginLeft = parseInt(arrow.style.marginLeft) - 10 + "px";
  } else if (event.code === "ArrowRight") {
    console.log("Move Right");
    arrow.style.marginLeft = parseInt(arrow.style.marginLeft) + 10 + "px";
  }
});
//*Example 3: Enter Key to Submit


// let inpt = document.querySelector("input");put");
inpt.addEventListener("keydown", function(event){
	if( event.key === "Enter"){
		console.log(inpt.value)
	}
})

//*Example 4: Keyboard Shortcut (Ctrl + S)

document.addEventListener("keydown", function(event){
	if(event.ctrlKey && event.key == "s"){
		event.preventDefault()
		console.log("conetnt save")
	}
})

//*Example 5: Character Limit Warning

let textarea = document.querySelector("textarea");
let counter = document.querySelector("#counter");
textarea.addEventListener("keyup", function() {
 let length = textarea.value.length;
 counter.innerText = length + " / 100 characters";

 if (length > 100) {
 counter.style.color = "red";
 } else {
 counter.style.color = "black";
 }
});

//* form submitted

let form = document.querySelector("form")

form.addEventListener("submit", function(event){
	event.preventDefault()
	console.log("form submitted")
})

//*Example 5: Character Limit Warning

{
let area = document.querySelector('#area')
let counter = document.querySelector('#counter')

area.addEventListener("", function(){

})

}

//*login form handler

{
  let form = document.querySelector('#formm')
  form.addEventListener("submit",function(e){
e.preventDefault()
    let name = document.querySelector('#name')
    let pass = document.querySelector('#password')
    console.log(`username : ${name}`)
    console.log(`password : ${pass}`)

  })
}

