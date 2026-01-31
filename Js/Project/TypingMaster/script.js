let container = document.querySelector("#container");

let paraEl = document.querySelector("p");
let areaEl = document.querySelector("#area");

let paraText = paraEl.innerText;
paraEl.innerHTML = "";
for (let char of paraText) {
  let span = document.createElement("span");
  span.innerText = char;
  paraEl.appendChild(span);
  console.log(char);
}

let span = paraEl.querySelectorAll("span");
areaEl.addEventListener("input", function () {
  let typeText = areaEl.value;

  for (let i = 0; i < span.length; i++) {
    if (typeText[i] == null) {
      span[i].style.backgroundColor = "";
    } else if (typeText[i] == span[i].innerText) {
      span[i].style.backgroundColor = "green";
    } else {
      span[i].style.backgroundColor = "red";
    }
  }
});

// areaEl.addEventListener("input", function(){

// 	let typeText = areaEl.value

// 	for(let i=0;i<typeText.length;i++){
//   if(paraText[i] == null){
// 	 paraText.style.backgroundColor = ""
// }
// 		if(typeText[i] === paraText[i]){
// 			paraText.style.backgroundColor = "green"
// 		}
// 		else{
// 			paraText.style.backgroundColor = "green"
// 		}
// 	}
// })
