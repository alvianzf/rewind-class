---
title: Week 7 Day 1 - Algorithm, Javascript, and Problem Solving
layout: intro
---

# Algorithm, Javascript, and Problem Solving

Rewind Class Day 1


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

# Lessons

- Computational Thinking
- JavaScript Variables
  - var vs let vs const
  - Variable naming
  - Naming Convention
- JavaScript Data Types
  - Number
  - String
  - Boolean
  - Null
  - Undefined
  - Objects
  - Array
  - Array of Objects
  - `typeof`

---
layout: center
---
# ✋ Any first questions?

---

# Computational Thinking

What is it?

**Computational thinking** is a problem-solving approach that involves breaking down complex problems into smaller, more manageable parts. It's about *approaching problems in a structured and logical way.*

---

# Developing Computational Thinking?

You can develop computational thinking by developing these concepts:

- Decomposition: This concept involves breaking down a problem into smaller, more understandable components. For example, solving a complex task by dividing it into smaller sub-tasks.
- Pattern Recognition: It's the ability to identify similarities and recurring patterns in data or problems. For instance, recognizing that a series of numbers follows a specific sequence.
- Abstraction: Abstraction involves simplifying complex problems by focusing on the most important details while ignoring irrelevant information. It's like zooming in on what's crucial for solving a problem.
- Algorithm Design: This concept revolves around creating step-by-step instructions to solve a problem. It's about designing a clear plan or recipe for solving a problem algorithmically.

---

# Let's try them out

Practice along with me:

- What is the next number in the sequence - 1 1 2 3 5 __ __
- What is the next letter in the sequence - B D H __
- Describe how to get from your town to Jakarta.

---
layout: center
---
# Javascript

---
layout: center
---
# ✋ Who already know about JavaScript?

---


# JavaScript Variables

A variable is a "named storage" for value or data.

We can use variables to store any kind of supported data.

To create a variable in JavaScript, use either the `var`, `let`, or `const` keyword.
The statement below creates (in other words: declares or defines) some variables with the name "message":

```js
var message1
let message2
const message3

var message1 = "Hello One"
let message2 = "Hello Two"
const message3 = "Hello Three"
```

---

After declaring, the lifetime of a JavaScript variable starts.

> 🚧 Use only English when declaring a variable, with descriptive name what the variable holds.

We can declare variables to store data by using the `var`, `let`, or `const` keywords.

- `var` is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
- `let` is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
- `const` is like let, but the value of the variable can’t be changed. Although not for all data types, such as array and object.

> 💡 Use only `let` or `const` in 2020.

---

We can then put some data into it by using the assignment operator `=`:

```js
const message = "Hello"; // store the string into message variable
```

The string is now saved into the memory area associated with the variable. We can access it using the variable name:

```js
// shows the variable content to the console
console.log(message)

// shows the variable content to the browser window
window.alert(message)
```

If you want to have multiple variables with better readability, please use a single line per variable.

```js
const name = 'Brendan Eich'
const age = 61
const message = 'Hello'
```
---

### `var` vs `let`

In older scripts, you may also find another keyword: `var` instead of `let`:

```js
var message = 'Hello'
```

The `var` keyword is almost the same as `let`. It also declares a variable but in a slightly different, old way.

There are subtle differences between `let` and `var`, but they do not matter for us yet.

---

# Variable Naming

Variables should be named in a way that allows us to easily understand what’s inside them.

There are two limitations on variable names in JavaScript:

- The name must contain only letters, numbers/digits, or the symbols `$`and `_`.
- The first character must not be a number/digit.

Examples of valid names:

```js
const userName
const userAge
```

---

When the name contains multiple words, `camelCase` is commonly used.

That is, words go one after another, each word starting with a capital letter: `myVeryLongName`.

These names are valid:

```js
const $ = 1 // declared a variable with the name "$"
const _ = 2 // and now a variable with the name "_"

alert($ + _) // 3
```

Examples of incorrect variable names:

```js
const 1a; // cannot start with a digit

const my-name; // hyphens '-' aren't allowed in the name
```

---

Remember, case matters. Variables named `apple` and `AppLE` are two different variables.

Non-English letters are allowed, but not recommended.

It is possible to use any language, including Cyrillic letters or even Hieroglyphs, like this:

```js
const имя = 'имя'
const 我 = '我'
```

---

# Reserved Names

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

For example: `let`, `class`, `return`, and `function` are reserved.

The code below gives a syntax error:

```js
let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
```

---

# Constants

To declare a constant (unchanging) variable, use const instead of let:

```js
const myBirthday = '18 April 1982'
```

Variables declared using const are called “constants”. They cannot be changed. An attempt to do so would cause an error:

```js
const myBirthday = '18 April 1982'

myBirthday = '1 January 2001' // error, can't reassign the constant!
```

Uppercase constants are used for difficult-to-remember values that are known prior to execution.

```js
const COLOR_RED = '#F00'
const COLOR_GREEN = '#0F0'
const COLOR_BLUE = '#00F'
const COLOR_ORANGE = '#FF7F00'

// then when we need to pick a color
let color = COLOR_ORANGE
console.log(color) // #FF7F00
```

---

Benefits:

- `COLOR_ORANGE` is much easier to remember than `"#FF7F00"`.
- It is much easier to mistype `"#FF7F00"` than `COLOR_ORANGE`.
- When reading the code, `COLOR_ORANGE` is much more meaningful than `#FF7F00`.

---

# Name things right

Talking about variables, there’s one more extremely important thing.

Please name your variables sensibly. Take time to think about this.

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it’s much easier to find information that is well-labeled. Or, in other words, when the variables have good names.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

---

Some good-to-follow rules are:

- Use human-readable names like `userName` or `shoppingCart`.
- Stay away from abbreviations or short names like `a`, `b`, `c`, `foo`, `bar`, `baz`, `test` unless you know what you’re doing.
- Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your mind. If a site visitor is called a "user" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newMember`.

---

# Reuse or Create?

And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones. Such programmers save a little bit on variable declaration but lose ten times more on debugging.

An extra variable is good and much better, not evil.

---

# JavaScript Data Types

Most of the time, a JavaScript application needs to work with information. Here are two examples:

- An online shop – the information might include goods being sold and a shopping cart.
- A chat application – the information might include users, messages, and much more.

Variables are used to store this information.

There are 7 basic data types in JavaScript.

- `number` for numbers of any kind: integer or floating-point.
- `string` for strings. A string may have one or more characters, there’s no separate single-character type.
- `boolean` for `true`/`false`.
- `null` for unknown values – a standalone type that has a single value null.
- `undefined` for unassigned values – a standalone type that has a single value undefined.
- `object` for more complex data structures.
- `symbol` for unique identifiers.

---

Special types:

- `Infinity`
- `NaN` (Not a Number)

> 🚧 `undefined` is when the thing is empty, but still exist. `null` is when the thing does not exist at all.

Remember, blob or binary assets such as images, photos, and videos are not JavaScript data types. We cannot store those kinds of assets inside the JavaScript program.

But we can still access them through the file system.

---

## Dynamic Typing

A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number:

Programming languages that allow such things are called “dynamically typed”, meaning that there are data types, but variables are not bound to any of them.

```js
let message = 'Hello'
message = 123456
// message = 123456
```

```js
const messages = ['Hello', 'World']
messages[0] = 123456
// messages = [123456, 'World']
```

> 🚧 This is not about `const` or `let`, but it's about changing different data types within the same variable.

---

# Number

The number type represents both integer and floating-point numbers.

```js
let number1 = 123
let number2 = 12.345
```

---

# String

A string in JavaScript must be surrounded by quotes.

```js
const text = "Hello World"
const textOther = 'Single quotes are okay too'
const textLonger = `We can embed ${text}`
```

In JavaScript, there are 3 types of quotes.

- Double quotes:

```js
"Hello"
```

- Single quotes:

```js
'Hello'
```

- Backticks:

```js
`Hello`
```

---

Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.

We use either a single quote or a double quote depending on the context of the string.

```js
const name = 'John "Master" Doe'
```

```js
const name = "John's Master"
```

---

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in `${…}`, for example:

```js 
let name = 'John'

// embed a variable
console.log(`Hello ${name} welcome to the jungle.`)
// Hello John welcome to the jungle.

// embed an expression
console.log(`The result of 1+2 is ${1 + 2}.`) // the result of 1+2 is 3

// multiple lines
console.log(`Title
Line One
Line Two
`)

// multiple lines affected by line break and indentation
console.log(`
  # Title
  
  - Line One
  - Line Two
`)
```

---

In some languages, there is a special “character” type for a single character. For example in the C language and Java, it is `char`.

In JavaScript, there is no such type. There’s only one type: `string`. A string may consist of only one character or many of them.

> 💡 Remember, `console` is just used for developers. Regular users would not see it.

---

# Boolean (logical type)

The boolean type has only two values: `true` and `false`.

This type is commonly used to store yes/no values: `true` means “yes, correct”, and `false` means “no, incorrect”.

```js
let nameFieldChecked = true // yes, name field is checked
let ageFieldChecked = false // no, age field is not checked
```

Boolean values also come as a result of comparisons:

```js
let isGreater = 4 > 1

alert(isGreater) // true (the comparison result is "yes")
```

```js
let isLess = 1 < -2

alert(isLess) // false (the comparison result is "no")
```

---

# `null`

The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value:

```js
let age = null
```

In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value that represents “nothing”, “empty”, or “value unknown”.

`null` is not the same as `undefined`.

---

# `undefined`

The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined:

```js
let x

alert(x) // shows "undefined"
```

Technically, it is possible to assign undefined to any variable:

```js
let x = 123

x = undefined

alert(x) // "undefined"
```

---

# Objects

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

```js
const objectName = {
  keyName: 'Value text', // remember the comma
  'key-name': 'Value text'
}
```

```js
const language = `JavaScript`

const human = {
  name: 'Brendan Eich',
  website: 'https://brendaneich.com',
  twitter: 'https://twitter.com/BrendanEich',
  github: 'https://github.com/BrendanEich',
  'about-me':
    'Brendan Eich is an American technologist and creator of the JavaScript programming language',
  description: `Brendan Eich is the creator of ${language} programming language.`
  // multiword property name must be quoted
}
```

---

# Array

```js
const numbers = [1, 3, 5, 7, 10]
```

```js
const names = ['Andy', 'Betty', 'Charlie']
```

```js
const fruits = ['Apple', 'Orange', 'Grape']
```

---

# Array of Objects

```js
let fruits = [
  {
    id: 1,
    text: 'Apple',
    tags: ['red', 'delicious'],
    favorite: true
  },
  {
    id: 2,
    text: 'Orange',
    tags: ['orange', 'sour'],
    favorite: false
  },
  {
    id: 3,
    text: 'Grape',
    tags: ['purple', 'green', 'white']
  }
]
```
---

# `typeof` Operator

The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

The `typeof` operator allows us to see which type is stored in a variable.

- Two forms:
  - As an operator: `typeof x`.
  - As a function: `typeof(x)`.
- Returns a string with the name of the type, like `"string"`.
- For `null` returns `"object"` – this is an error in the language, it’s not an object.

In other words, it works with parentheses or without them. The result is the same.

The call to typeof x returns a string with the type name:

```js
typeof 'hello' // "string"
typeof 0 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
```

---


# References

- [w3schools](https://w3schools.com/js/)
- [Developer Mozilla](https://developer.mozilla.org/en-US/)

---

# Implementation - How to Solve a problem
 
## Step One : Understand the Problem
What are we trying to solve?
What do you want your program to be able to do for users and how will they interact with our code?
**Example:** We need to create a calculator that can add two numbers together (or subtract if needed).
### Why does it matter?
We have to understand why we're solving these problems before we start coding because there's no point doing something that doesn't work!
We should understand why we're solving these problems because there may already exist solutions out there that could help us avoid reinventing the wheel!

We should understand why we're solving these problems so that we know what features we'll have to implement later on when building out our application. This helps to guide what our code will look like.

We should understand why we're solving these problems so we know what kind of solution makes sense. This helps us decide whether there's already something out there.

---

# Implementation

## Step Two : Write the steps
Write down what input should go into each part of your algorithm so that you know exactly where to put things later on!

Write down what steps should take place when the user runs their program. What data needs to go into each step so that the computer knows where to start.

---

# Implementation


## Pseudocode
Write out pseudocode of what each step should look like in English.

This is called writing **pseudocode**. It's not real code, but it helps us think about what needs to happen before we start coding!

---

# Implementation

## Pseudocode

What is pseudocode
- It's just english words written down without any syntax or punctuation
- You don't have to write actual code but rather describe what you would expect the computer to do
- This helps us think about problems before writing code so we know exactly where we're going wrong when something goes wrong!
- The purpose here isn't to make an exact copy of the code but instead give us enough information so we know exactly where to start when writing the actual code

Pseudocode has three parts:
- Input - What information needs to come into this function/method
- Output - What information comes out after running through all the lines inside the method / function
- Algorithm - How we will solve our problem using logic and maths

---

# Implementation

## Pseudocode
Problem: I want to check if a number is even or odd.

Solution: Use an `if` statement with a condition that checks whether its divisible by 2.

| Input | Number (int) 10,25436789 etc... |
| --- | --- |
| Output | True(even), False(odd). |
| Algorithm | Check if the Number is divisible by two or not. If yes: even, if no: odd. |

---

# Implementation

## Pseudocode

Algorithm:

1. START
2. DEFINE number AS AN INTEGER
3. INPUT number
4. IF number MOD 2 = 0 THEN
5. PRINT "The number is even."
6. ELSE
7. PRINT "The number is odd."
8. END IF
9. END

---

| **Algorithm:** | **Code** |
| :--- | :--- |
| 1. START | |
| 2. DEFINE number AS AN INTEGER | let number; |
| 3. INPUT number | function isItEven(number) { |
| 4. IF number MOD 2 = 0 THEN | &nbsp; &nbsp;&nbsp; &nbsp;  if (number % 2 == 0) { |
| 5. PRINT "The number is even." | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log("The number is even.") |
| 6. ELSE | &nbsp; &nbsp;&nbsp; &nbsp;  } else { |
| 7. PRINT "The number is odd." | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log("The number is odd.")|
| 8. END IF | &nbsp; &nbsp; &nbsp; &nbsp; } |
| 9. END | } |

---
layout: center
align: center
---

# ✏️ Practice
Write a pseudocode for this algorithm:

```js
function sumOfNumbers(n) {
  let total = 0

  for (var i = 1; i <= n; i++) {
    total +=i
  }

  return total
}
```


---
layout: center
align: center
---

# ✏️ Practice
Write a pseudocode for this problem statement:
>  Write an algorithm that will take in two numbers and print the larger of them out to the console.  

Example:  
Input: `5`, `8`  
Output: `8`

---
layout: center
align: center
---

# ✏️ Practice
Write a pseudocode for this problem statement:
> Write an algorithm to create this pattern:

```*
*
**
***
****
*****
******
```

---
layout: center
align: center
---

# ✏️ Advanced Practice
Write a pseudocode for this problem statement:
> Given a string, write code that returns true or false depending on whether it contains any vowels. Vowel characters are "a", "i", "u", "e", "o"

Example:  
Input: `revou`  
Output: `true`


Input: `bzzr`  
Output: `false`

---
layout: center
align: center
---
# Questions
## ❓❓❓