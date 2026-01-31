console.log(document);
console.dir(document); // it helps to show the orginality of html. give real face or it show developer mode

console.log(document.all[9]);
let header = document.getElementById("head");
let image = document.getElementById("twoCat");
setInterval(() => {
  // console.log(header)
  header.innerText = "Three Cat";
  image.src =
    "https://media.istockphoto.com/id/1260096255/photo/cat-image.jpg?s=170667a&w=0&k=20&c=rFFIE3E-9KWfROCAfZrFtrUu672WAdKziNhxSZ55uVE=";

  setTimeout(() => {
    header.innerText = "TWO CAT";
    image.src =
      "https://img.freepik.com/premium-photo/three-kitten-house_869741-3218.jpg?semt=ais_hybrid&w=740&q=80";
  }, 2000);
}, 4000);

console.log(document.getElementsByClassName("secondHeading")) //it give collection 

let elem = document.getElementById("NonExist")
console.log(elem)


let flowers = document.getElementsByClassName("images")

for(let flower of flowers){
	console.log(flower)
}

document.getElementsByTagName("tag_name")

let paragraph = document.getElementsByTagName("p")
console.log(paragraph.innerText)

console.log(paragraph)
console.log("============",paragraph.length) //why ?

let links = document.getElementsByTagName("a")
console.log(links)
console.log("length of anchor tag inside p ",links.length)

//* query selector

// let heading = document.querySelector("#heading1");
// console.log(heading);


///* specific selector

let anchor = document.querySelectorAll(".anchorDIv a")
console.log(anchor)

let text = document.querySelector("p")
console.log(text.innerText)
console.log(text.innerHTML)
console.log(text.textContent)

//* Practice question 1

let MainImg = document.getElementById("mainImg")
console.log("source",MainImg.src)

let oldImages = document.querySelectorAll(".old_images")
for(let i=0; i<oldImages.length;i++){
console.log(oldImages[i])


let allPara = document.querySelectorAll("p")
console.log(allPara)
}
 //*pracice three
{
let oldImages = document.querySelectorAll(".old_images")
console.log(oldImages)

let firstPara = document.querySelector("p")
console.log(firstPara)

// let mainHeading = document.getElementById("main").innerHTML = <strong>Mars</strong>
// console.log(mainHeading)

let boxLink = document.querySelectorAll("#BoxLink a")
console.log(boxLink)
console.log(boxLink.length)
}



