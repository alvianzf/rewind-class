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

