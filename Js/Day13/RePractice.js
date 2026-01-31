//*The Problem with Promise Chains
// What is Async/Await?
// Async/Await is a modern way to write asynchronous code in JavaScript
// Key Point: Async/Await is NOT a replacement for Promises. It's just a cleaner way to work with them.
async function fetchUserData(){
return "Bob"
}

fetchUserData()
  .then((user) => {
    console.log("User", user);
    return fetchUserPost(user.id);
  })
  .then((post) => {
    console.log("Post", post);
    return fetchPostComment(post[0].id);
  })
  .then((comments) => {
    console.log("Comments", comments);
  })
  .catch((err) => {
    console.log(err);
  });

//*The Solution with Async/Await

async function fetchData() {
  try {
    let user = await fetchUserData();
    console.log(user);
    let post = await fetchUserPost(user.id);
    console.log(post);
    let comments = await fetchUserComments(user[0].post);
    console.log(comments);
  } catch (err) {
    console.log(err);
  }
}

//* What Does async Do?
// When you put async before a function, that function automatically returns a Promise. Even if you return a
// regular value, JavaScript wraps it in a Promise for you

//* Example 1: Normal Function vs Async Function

function normalGreet(name) {
  console.log("hello", name);
}

normalGreet("Alice");

async function asyncGreet() {
  return "Hello";
}

//* if we try to console it will give the value in form of object
console.log(asyncGreet);

//* we need to call it through the async await o r .then and . catch

asyncGreet()
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });
