console.log("Dom amnipulation")

let solarImg = document.querySelector("img") // it gives first tag
console.log(solarImg)

solarImg.src = "https://hips.hearstapps.com/hmg-prod/images/ginger-maine-coon-kitten-running-on-lawn-in-royalty-free-image-1719608142.jpg?crop=1xw:0.84415xh;0,0.185xh"
// solarImg.style.height = "200px"
// solarImg.style.width = '400px'

//* get the id 

let solarImage = document.querySelector('img')
let imageId =  solarImage.getAttribute("id") //it give id of image tag
console.log(imageId)
let imageClass = solarImage.getAttribute("class")// it give all classes
console.log(imageClass)

//*chnge the id

solarImage.setAttribute("id", "headImage")
let newId = solarImage.getAttribute("id")
console.log(newId)



//*Example 3: Change the image source

{
	let image = document.querySelector("#headImage")
	image.setAttribute("src", "https://png.pngtree.com/background/20250104/original/pngtree-purple-color-rose-flower-picture-image_15591918.jpg")
	image.setAttribute("Height","100px")
}


//*Example 4: Get and change a link's href
{
	let links = document.querySelector("a") 
	console.log(links)
	links.setAttribute("Href", "https://www.google.com/") // idf we put querySelector All it will not work , it can chnge only one attributes
}

{
	//*Example 5: Check if an attribute exists

	let image= document.querySelector("img")
	let findAttributes = image.getAttribute("href")
	console.log(findAttributes) //null
}


//*2. Manipulating Style (Inline)
{

	let head = document.querySelector("h1")
	head.style.color = "pink"

	//*Example 2: Change background color (camelCase!)

	head.style.backgroundColor = "teal"

	let para = document.querySelector('p')
	para.style.color = "wheat"
	para.style.fontSize = "20px"


	//*change image size

	let image = document.querySelector('img')
	image.style.height = "300px"
	image.style.width = "400px"

	//*hide an elemsnts

	let box = document.querySelector('.box')
	console.log(box)
	box.style.display = "none"
}

//*3. The classList Property  : it is used for giving css property

// Methods:
// classList.add(className) - Add a class
// classList.remove(className) - Remove a class
// classList.contains(className) - Check if class exists (returns true/false)
// classList.toggle(className) - Add if missing, remove if present


{

	let image = document.querySelector('img')

	console.log(image)
	image.classList.add("image")

	console.log(image.classList.contains("image"))


	let para = document.querySelector('p')
	console.log(para)
	para.classList.add("boxStyle")


	para.classList.remove("boxStyle")

	para.classList.toggle("boxStyle")
}

let buttons = document.querySelector("button")
console.log(buttons)
let onOff = false
buttons.addEventListener("click", function(){
	console.log("click")
	buttons.classList.toggle("buttonStyle")
	
	if(onOff){
		buttons.innerText = "on"
	} else {
		buttons.innerText = "OFF"
	}

	onOff = !onOff
})


// 4. Navigation (DOM Traversal)
// What is DOM Navigation?

// Once you select an element, you can find its "family members" - parents, children, and siblings.

// Methods:
// parentElement - Get the parent
// children - Get all child elements (returns a collection)
// nextElementSibling - Get the next sibling
// previousElementSibling - Get the previous sibling
// 🌍 Real-World Analogy: Family Tree
// parentElement : Your Mom/Dad 👨‍👩
// children : Your Kids 👶
// nextElementSibling : Your younger brother/sister 👧
// previousElementSibling : Your older brother/sister �

{


	//* Example 1: Find all children of an element

	let imageBox = document.querySelector(".images")
	let imageChild = imageBox.children
	let siblingOfImage = imageBox.nextElementSibling
	console.log("childern of img",imageChild)
	console.log("sibling",siblingOfImage )

	let para = document.querySelector('p')
	console.log("parent elemnt",para.parentElement)
	let ul = document.querySelector("ul")
	console.log(ul.parentElement)
	let ulChildren = ul.children[0]
	console.log(ulChildren)



}

//*5. Adding Elements to the Page

// two step in this first is create and second is Add

//*Example 1: Create and add a button

let button1 = document.createElement("button")
button1.innerText = "Click here"
let list = document.createElement("p")
list.innerText = "My name is Nargis"

let box = document.querySelector(".images")
box.appendChild(button1)
// box.append(button1)

// box.prepend(button1)

box.appendChild(list)


let para2 = document.querySelector("#description")

para2.insertAdjacentElement("afterbegin",button1)



// //*
// 7. Removing Elements from the Page
// Methods:
// element.remove() - Removes the element itself (Modern way)
// parent.removeChild(child) - Removes a specific child (Old way)


let image = document.querySelector('img')
image.remove() // it remove itself

let para = document.querySelector("p")
// para.removeChild()

