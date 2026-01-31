let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let pass = document.querySelector(".password");
let phone = document.querySelector(".phone");
let form = document.querySelector("form");
let submitBtn = document.querySelector("button");
let errorText = document.querySelectorAll(".errorText");
console.log(errorText);


form.addEventListener("submit", function (event) {
  //   console.log("check", event);
  event.preventDefault();

  formValidation();
});



function formValidation() {
  //* name validation

  if (firstName.value == "") {
    // errorText[0].innerText = `field should not be empty`;
    showErrorMessage(firstName, "Field should not be empty") 
  } else {
    console.log(firstName.value);
  }
  //* last name
  if (lastName.value == "") {
    errorText[1].innerText = ` field should not be empty`;
  } else {
    console.log(lastName.value);
  }

  //* email validation

  if (email.value === "") {
    errorText[2].innerText = `Plz write your email first`;
  }
  if (email.value.includes("@")) {
    console.log("email is correct");
  } else {
    errorText[2].innerText = `Email is not correct`;
  }

  //* password validation
  if (pass.value == "") {
    errorText[3].innerText = `Password is required`;
  }
  if (pass.value.length >= 6) {
    console.log(typeof pass.value);
    if (pass.value.includes("!")) {
      console.log("password is correct");
    } else {
      errorText[3].innerText = `Password is not correct`;
    }
  }
  //*phone number validation
  if (phone.value == "") {
    errorText[4].innerText = `write your phone number here`;
  }

  if (phone.value.length === 10) {
    console.log("number is correct");
  } else {
    errorText[4].innerText = `phone number should be 10 digit long`;
  }
}


function showErrorMessage(input, message){
  let error = document.createElement('p') 
  error.innerText = message
  input.after(error)
  error.style.color = "red"
}