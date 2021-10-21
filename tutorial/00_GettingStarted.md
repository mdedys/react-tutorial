# React Tutorial

Welcome to the React Tutorial. In this tutorial we will be building a small TODO application. The application will be built using:
- React
- Javascript
- Styled Components

This tutorial will not be covering [Typescript](https://www.typescriptlang.org/)

## Prerequisites

The following must be installed:

1. NodeJS - https://nodejs.org/en/
  - Latest version is good enough
2. Yarn - https://yarnpkg.com/getting-started/install
  - Just the global installation of yarn is required.
  - NPM (installed with NodeJS above) --> `npm install -g yarn`
  - Homebrew (MAC) --> `brew install yarn`
3. VSCode - https://code.visualstudio.com/
  - Install Ext: Prettier - Code formatter
  - Install Ext: Bracket Pair Colorizer
  - Install Ext: htmltagwrap
  - Install Ext: javascript console utils
  - Install Ext: vscode-styled-components
  - Install Ext: Path Intellisense
  - Install Ext: npm Intellisense

## Javascript (JS) Fundamentals

## Variables

Variables are a "named storage" for data. Variables can store strings, numbers, list, dictionary. (Pretty much any data you want).

To create a variable we can use two keywords: `let` or `const`
- `let` will create a variable that can be modified
- `const` will create a variable that cannot change

**Examples**

```javascript
// string
let user = "John"
// number
let count = 5
// boolean
let truthy = true
// Can modify value
truthy = false

const message = "Hello"
```

## Data Types

Javascript supports the following core types:

### Primitives

- String
  - A string in JavaScript must be surrounded by quotes. 
  - Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
  - Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string.

Backtick Example
```javascript
const name = "John"
const text = `Hello ${name}`
```

- Number
  - The number type represents both integer and floating point numbers.
- Boolean
  - The boolean type has only two values: true and false

### Complex Types

- Object
  - Objects are used to store collections of data and more complex entities.
  - Two examples: Dictionary and List
  - They can contain any primitive or other object

Object Example
```javascript
const list = [1, 2, 3, 4, 5, 6]
const dict = { "a": "b", "c": 2}
```

### Null + Undefined

In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
The special value undefined also stands apart. It makes a type of its own, just like null. The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined.

```javascript
let age = null
alert(age) // shows null

let count;
alert(count) // shows undefined

```

## Functions

Quite often we need to perform a similar action in many places of the script. For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else. Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition. Examples of built in functions: `alert()`, `console.log()`

```javascript
// declaration
function showMessage(message) {
  console.log(message)
}

// calling function
showMessage("test message")
```

Functions can multiple paramters: `function lots(a,b,c,d,e,f){}`

Function can also be written in short hand notion using arrow functions:

```javascript
const showMessage = (message) => console.log(message)

const alertMessage = (message) => {
  alert(message)
}
showMessage("test message")
alertMessage("alert message")
```
## Loops

We often need to repeat actions. For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10. Loops are a way to repeat the same code multiple times.

```javascript
// for loop
for (let i = 0; i < 3; i++) {
  console.log(i)
}

// 0
// 1
// 2
```

## If statements

Sometimes, we need to perform different actions based on different conditions. To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

```javascript
const count = 5
if ( count > 5) {
  console.log("greater")
} else if (count < 5) {
  console.log("less")
} else {
  console.log("count is 5")
}

// will print count is 5
```

## Optional Deep Dive:
- Javascript Fundamentals: https://javascript.info/first-steps
