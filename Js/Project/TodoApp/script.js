console.log("Todo App");

let inputEl = document.querySelector("input");
let buttonEl = document.querySelector("button");

// console.log(inputEl.value)
let colorArray = [
  //   "#313642",
  "#7CB9DD",
  "#A9C991",
  "#FF7360 ",
  "#F9AA53",
  "#AA9AFF",
];

// let counter = 0
function randomColor() {
  let colorIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[colorIndex];
}

function colorChange(elements) {
  // let boxes = document.querySelectorAll('.box')
  elements.forEach((elem) => {
    elem.style.backgroundColor = randomColor();
  });
}

function addTodo() {
  let inputVal = inputEl.value;
  if (inputVal == "") {
    alert("Provide input first");
    return;
  }
  // console.log("clicked add todo")
  let container = document.querySelector("#container");
  let todoBox = document.createElement("div");
  let todoList = document.createElement("h4"); //h4
  let deleteBtn = document.createElement("button"); // deleteBtn
  let updateBtn = document.createElement("button");

  //box , h4

  // console.log(inputVal)
  container.insertAdjacentElement("afterbegin", todoBox);
  todoBox.appendChild(todoList);
  todoBox.appendChild(deleteBtn);
  todoBox.appendChild(updateBtn);
  todoList.innerText = inputVal;
  deleteBtn.innerText = "Delete";
  updateBtn.innerText = "Update";

  inputEl.value = ""; // inputVal = "" is not working

  //* adding class
  buttonEl.classList.add("box");
  todoBox.classList.add("todoItem");
  todoList.classList.add("message", "box");
  deleteBtn.classList.add("deleteBtn", "box");
  updateBtn.classList.add("updateBtn", "box");

  //* calling colorchanging function
  colorChange([todoList, deleteBtn, updateBtn, buttonEl]);

  //* delete functionality
  deleteBtn.addEventListener("click", () => {
    todoBox.remove();
  });

  //* update functionality
  updateBtn.addEventListener("click", () => {
    console.log("click update");
    inputEl.value = todoList.innerText;
    buttonEl.innerText = "Save";
    buttonEl.onclick = function () {
      todoList.innerText = inputEl.value;
      inputEl.value = "";
      buttonEl.innerText = "Add";
      buttonEl.onclick = addTodo; // ?
    };
  });

//*    checkBox property
    let checkBox = document.createElement("input");
  //   checkBox.setAttribute("type", "checkbox");
  checkBox.type = "checkbox"
    // checkBox.setAttribute("checked", "")
    todoBox.insertAdjacentElement("afterbegin", checkBox);
     checkBox.classList.add("check")
      checkBox.addEventListener("change", (e)=>{
  		if(e.target.checked == true){
  			 todoList.style.textDecoration = "line-through"
  		}
  		else{
  			todoList.style.textDecoration = "none"
  		}
  	})
  	
}
