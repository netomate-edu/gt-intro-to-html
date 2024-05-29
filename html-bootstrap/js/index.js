/*
Computer does:
1. Data (input)
2. Process (data --> information)
3. Output (information)

Programming concepts
1. Variables
2. Loops
3. Functions

Types of data
1. String (e.g Peter, Dog, etc)
2. Numbers (e.g 1, 4.5, 3000, etc)
3. Boolean (e.g true, false)
*/


console.log("Hello, how are you doing today?")
console.log(1 + 2)
console.log(false)
console.log(true)

var myName = "Peter"
var age = 14
var isFemale = false

// string concatenation
console.log("My name is " + myName)
console.log("I am " + age + " years old");
console.log("Is " + myName + " a female? " + isFemale)

var a = 5
var b = 6

console.log(a + b)

/* Types of number data
    1. Integer (1, 3, 5283, 12491)
    2. Floats (1.2, 4.524, 21.31)
*/

var PI = 22 / 7
console.log("The value of PI is " + PI);


// Accessing html elements on the DOM (document object model)

var introText = document.getElementById("intro-text");

introText.style.color = "red"

