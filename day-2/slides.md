---
title: Rewind Class 2 - Algorithm, Javascript, and Problem Solving
layout: intro
---

# Asynchronous Javascript and Typescript

Rewind Class Day 2

<!--
Introdution and Asynchronous Javascript
-->

---
layout: section
---

# Instructor Profile

---
layout: image-left
image: https://media.licdn.com/dms/image/C4E03AQHV6QWRtZFHFQ/profile-displayphoto-shrink_400_400/0/1615196247404?e=1699488000&v=beta&t=w6ZT36rWvo_Xpoxpir6aQHD87bTH69T0-TncdDzLE58
---


# Alvian Zachry Faturrahman

Program Manager at RevoU  
CTO at TiketQ  
Technical Lead at Kuadran Teknologi Indonesia

Past experiences:

- Glints
- TalentTribe.asia
- Webimp, pte, ltd

---

# About Javascript
JavaScript is a single-threaded language that runs on a main thread (usually within a web browser) to execute code sequentially. This means that if you have multiple tasks or operations to perform in your JavaScript code, they are executed one after the other, in the order they are encountered in your script.

<center>
    <img src="https://miro.medium.com/v2/format:webp/1*V5syja2casc0gCuu9zKV5g.png" width="450">
</center>

##### Asynchronous functions in JavaScript are a fundamental concept that allows you to perform tasks without blocking the main thread of execution. They are essential for handling operations that might take some time to complete, such as network requests, file reading/writing, and timer-based actions, without causing the application to become unresponsive.
---

# Asynchronous in Javascript 

### Synchronous
```javascript

function syncFunction() {
    console.log("I am a synchronous function");
    }

syncFunction(); // I am a synchronous function 
console.log('Hello');// Hello

```

### Asynchronous
```javascript
const asyncFunction = () => new Promise((resolve) =>{
    setTimeout(()=>{
        console.log("I am an asynchronous function")
    },200);});

    syncFunction();// I am a synchronous function
    
    setTimeout(syncFunction(),15);// I am an asynchronous function
}
```

---

# Promise
a Promise is an object that represents a value that may not be available yet but will be resolved or rejected at some point in the future. Promises are a fundamental part of asynchronous programming in JavaScript, and they provide a structured way to handle asynchronous operations.
<center>
    <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_106535542_970647970450096_67303.jpg" width="300">
</center>


#### Promises has three states:
1. **Pending**: The initial state when a Promise is created, and it hasn't been resolved or rejected yet.  
2. **Fulfilled (Resolved)**: The state when a Promise has successfully completed its operation, and a result value is available.  
3. **Rejected**: The state when a Promise has encountered an error or failed to complete its operation, and an error reason is available.  

---

# Promise
The main advantage of using Promises is their ability to handle asynchronous code in a more structured and readable manner, avoiding callback hell (a situation where multiple nested callbacks make code hard to follow). Here's how you typically create and use a Promise in JavaScript:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Data fetched successfully"); // Resolving with a value
    } else {
      reject("Error: Unable to fetch data"); // Rejecting with an error
    }
  }, 2000); // Simulated delay of 2 seconds
});

myPromise
  .then((result) => {
    console.log(result); // Data fetched successfully
  })
  .catch((error) => {
    console.error(error); // Error: Unable to fetch data
  });

```

<!--
We create a Promise using the new Promise() constructor, which takes a function as an argument. This function receives two parameters: resolve and reject, which are functions used to indicate the successful resolution or rejection of the Promise.

Inside the Promise constructor, we simulate an asynchronous operation using setTimeout. Depending on the outcome of the operation (success or failure), we either call resolve with a result or reject with an error.

We then use the .then() method to specify what should happen when the Promise is resolved and the .catch() method to handle any errors if the Promise is rejected.
-->

---

# `.then()` and `.catch()`
In JavaScript Promises, the .then() and .catch() methods are used to handle the result (fulfillment) and error (rejection) outcomes of a Promise, respectively. These methods allow you to define what should happen when a Promise is resolved successfully (fulfilled) or when it encounters an error (rejected).

```javascript
somePromise
  .then((result) => {
    // Code to handle the successful resolution (fulfillment) of the Promise
  })
  .catch((error) => {
    // Code to handle the rejection of the Promise (error)
  });

```