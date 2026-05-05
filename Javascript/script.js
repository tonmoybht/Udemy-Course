/*
 * ============================================================
 *   JAVASCRIPT FUNDAMENTALS — STUDY NOTES & PRACTICE CODE
 * ============================================================
 *   Author  : Mokles
 *   Purpose : Learning JS from scratch — topics covered below
 *
 *   📌 HOW TO USE THIS FILE:
 *      • Each section is wrapped in block comments /* ... *\/
 *      • To run a section, un-comment it and comment out others
 *      • Active (un-commented) code is at the very bottom
 * ============================================================
 */


/* ============================================================
 *  01 — FIRST CODE
 *  ─────────────────────────────────────────────────────────
 *  console.log() prints output to the browser/Node console.
 *  It is the most basic debugging and output tool in JS.
 * ============================================================ */
/*
console.log("Hello!");
*/


/* ============================================================
 *  02 — VARIABLES & DATA TYPES
 *  ─────────────────────────────────────────────────────────
 *  var  → old way to declare variables (function-scoped)
 *  let  → modern, block-scoped, can be reassigned
 *  const→ modern, block-scoped, CANNOT be reassigned
 *
 *  Primitive Types:
 *    String  → "text"
 *    Number  → 20, 3.14
 *    Boolean → true / false
 *    Undefined→ declared but no value assigned yet
 * ============================================================ */
/*
var name = "Mokles";

console.log(name);

var schoolTeam = "football";
var schoolNum = 20;

console.log(schoolNum);

var isRegistered = true;

var job;

console.log(job);   // → undefined (declared, not assigned)
*/

// console.log(isRegistered);


/* ============================================================
 *  03 — TYPE COERCION
 *  ─────────────────────────────────────────────────────────
 *  JS automatically converts types when you use + with a string.
 *  Number + String → JS converts the number to a string first.
 *  This is called IMPLICIT type coercion.
 *
 *  Example: "School: " + 20  →  "School: 20"
 * ============================================================ */
/*
console.log(name + " " + schoolNum);

var schoolName, hasCourse;

schoolName = "Gopal Academy";
hasCourse = true;

console.log(schoolName + " Has 10 Courses? " + hasCourse);
*/


/* ============================================================
 *  04 — VARIABLE MUTATION
 *  ─────────────────────────────────────────────────────────
 *  Variables declared with var/let can be re-assigned
 *  (mutated) after their initial declaration.
 *
 *  alert()  → shows a browser popup with a message
 *  prompt() → shows a browser popup asking for user input,
 *             returns the typed value as a STRING
 * ============================================================ */
/*
schoolNum = "Tweenty";
console.log(schoolNum);

schoolTeam = "Cricket";
console.log(schoolTeam);

alert(schoolTeam);

var age = prompt("Enter your age");
console.log("Age = " + age);
*/


/* ============================================================
 *  05 — BASIC OPERATORS
 *  ─────────────────────────────────────────────────────────
 *  Arithmetic : +  -  *  /  %  **
 *  Comparison : >  <  >=  <=  ===  !==
 *  Logical    : &&(AND)  ||(OR)  !(NOT)
 *
 *  Comparison operators return a Boolean (true / false).
 * ============================================================ */
/*
var totalDistance, samDistance, alexDistance;

totalDistance = 20;

samDistance = totalDistance - 12;
console.log("Sam Ran " + samDistance + "KM");

alexDistance = totalDistance - 8;
console.log("Alex Ran " + alexDistance + "KM");
*/

// Logical Operators example
/*
var distanceToschool, distanceTohome;

distanceToschool = 20;
distanceTohome = 10;

var isCloser = distanceTohome < distanceToschool;  // → true

console.log(isCloser);
*/


/* ============================================================
 *  06 — CONDITIONAL STATEMENTS (if / else if / else)
 *  ─────────────────────────────────────────────────────────
 *  Syntax:
 *    if (condition) { ... }
 *    else if (anotherCondition) { ... }
 *    else { ... }
 *
 *  JS evaluates conditions top-to-bottom and runs the FIRST
 *  block whose condition is true. The rest are skipped.
 * ============================================================ */
/*
var grade;
grade = 42;

if (grade < 40) {
  console.log("You Failed!!");
} else if (grade >= 40 && grade < 45) {
  console.log("You can retake the exam");
} else {
  console.log("You Passed!");
}
*/

// Exercise 1 — Age-based access control
/*
var age;
age = 24;

if (age < 18) {
  console.log("You cannot enter!");
} else if(age >= 18 && age < 23){
  console.log('You can enter but cannot drink alcohol!');
} else {
  console.log("Welcome! Knock yourself out.");
}
*/


/* ============================================================
 *  07 — TERNARY OPERATOR  ( condition ? valueIfTrue : valueIfFalse )
 *  ─────────────────────────────────────────────────────────
 *  A shorthand for simple if/else.
 *  Unlike if/else, it is an EXPRESSION — it returns a value,
 *  so it can be stored in a variable or used inline in a string.
 *
 *  ✅ Use for: short, simple true/false checks
 *  ❌ Avoid for: complex logic (use if/else instead)
 * ============================================================ */
/*
var grade = 43;

grade < 45 ? console.log("You Failed!") : console.log("You passed!");

var result = grade < 45 ? "Failed" : "Passed";
console.log(result);
*/


/* ============================================================
 *  08 — SWITCH STATEMENT
 *  ─────────────────────────────────────────────────────────
 *  Useful when comparing ONE variable against MANY exact values.
 *  Always add break; after each case to prevent "fall-through"
 *  (where execution leaks into the next case).
 *  default: runs if no case matches — like the final else.
 *
 *  Trick: switch(true) lets you use range conditions in cases.
 * ============================================================ */
/*
var day;
day = "friday";

switch (day) {
  case "friday":
    console.log("Shei");
    break;
  case "saterday":
    console.log("Good");
    break;
  case "sunday":
    console.log("Baal");
    break;
  default:
    console.log("Ki baar?");
    break;
}

// switch(true) trick — allows range-based conditions
var grade = 37;

switch (true) {
  case grade < 40:
    console.log("You field!");
    break;
  case grade >= 40 && grade < 45:
    console.log("You may take retake exam");
    break;
  default:
    console.log("You passed!");
    break;
}
*/

// Exercise 2 — Find student with highest average grade
/*
var alexGrade = (90 + 80 + 95) / 3;
console.log("Alex avarage Grade = " + alexGrade);

var saraGrade = (89 + 76 + 98) / 3;
console.log("Sara avarage Grade = " + saraGrade);

var nancyGrade = (42 + 98 + 83) / 3;
console.log("Nancy avarage Grade = " + nancyGrade);

if (alexGrade > saraGrade && alexGrade > nancyGrade) {
  console.log("Alex have the highest avarage grade!");
} else if (saraGrade > alexGrade && saraGrade > nancyGrade) {
  console.log("Sara have the highest avarage grade!");
} else if (nancyGrade > alexGrade && nancyGrade > saraGrade) {
  console.log("Nancy have the highest avarage grade!");
} else {
  console.log("Maybe they have same avarage");
}
*/


/* ============================================================
 *  09 — WHILE LOOP
 *  ─────────────────────────────────────────────────────────
 *  Keeps running as long as the condition is true.
 *  Best when you DON'T know in advance how many times to loop.
 *
 *  ⚠️  Always make sure the condition eventually becomes false,
 *      otherwise you'll get an INFINITE LOOP (browser freeze!).
 *
 *  Syntax:
 *    while (condition) { ... update counter ... }
 * ============================================================ */
/*
var num = 1;

while (num <= 11) {
  console.log(num);
  num++;  // num++ is shorthand for num = num + 1
}

// Exercise — Print even numbers from 132 to 148
var num = 132;
while (num <= 148) {
  console.log(num);
  num += 2;
}

// Exercise — Print numbers divisible by 7 between 25 and 100
var num = 25;
while (num <= 100) {
  if (num % 7 === 0) {   // % (modulo) gives the remainder
    console.log(num);
  }
  num++;
}
*/


/* ============================================================
 *  10 — FOR LOOP
 *  ─────────────────────────────────────────────────────────
 *  Best when you KNOW in advance how many times to loop.
 *
 *  Syntax:
 *    for (initializer; condition; update) { ... }
 *
 *    initializer → runs once at the start   (e.g. let i = 0)
 *    condition   → checked before each loop (e.g. i < 10)
 *    update      → runs after each loop     (e.g. i++)
 * ============================================================ */
/*
var num = 1;

for (i = 1; i <= 10; i++) {
  console.log(num);
  num++;
}

// Cleaner version — declare loop variable inside the for
for (var num = 1; num <= 10; num++) {
  console.log(num);
}
*/

// Exercise 1 — Using for loops with conditions
/*
// Print even numbers between 132 and 148
for (var num = 132; num <= 148; num++) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

// Print numbers between 25-100 divisible by BOTH 7 and 5
for (var num = 25; num <= 100; num++) {
  if (num % 7 === 0 && num % 5 === 0) {
    console.log(num);
  }
}
*/


/* ============================================================
 *  11 — FUNCTIONS
 *  ─────────────────────────────────────────────────────────
 *  A function is a reusable block of code.
 *  Define once → call many times.
 *
 *  Parts of a function:
 *    • Parameters → placeholders in the definition  (name)
 *    • Arguments  → actual values passed when calling ("Mokles")
 *    • return     → sends a value back to the caller
 *                   (execution STOPS at return)
 * ============================================================ */
/*
function sayHello() {
  console.log("Hello");
}
sayHello();
*/

// With arguments
/*
function sayHello(name) {
  console.log("Hi" + " " + name);
}
sayHello("Mokles");
sayHello("Kuddus");

function cube(num) {
  console.log("Cube of " + num + " is : " + num * num * num);
}
cube(3);
cube(69);

// Using return — the function sends a value back
function cube(num) {
  math = "Cube of " + num + " is : " + num * num * num;
  return math;
}
console.log(cube(3));
console.log(cube(69));

// Inline return — cleaner
function cube(num) {
  return "Cube of " + num + " is : " + num * num * num;
}
console.log(cube(3));
console.log(cube(69));

// return inside if/else — exits function early when condition met
function cube(num) {
  if (num === 69) {
    return 420;
  } else if (num === 7) {
    return "CR7 The GOAT";
  } else {
    return "Cube of " + num + " is : " + num * num * num;
  }
}
console.log(cube(3));
console.log(cube(69));
console.log(cube(7));

// Guard clause pattern — early return for invalid input
function enterCafe(age){
  if(age < 18){
    return "You cannot enter the cafe!"
  }
  return 'You can enter the cafe!'
}

let age = enterCafe(69)
console.log(age);
*/


/* ============================================================
 *  12 — FUNCTION DECLARATION vs. EXPRESSION
 *  ─────────────────────────────────────────────────────────
 *  Declaration  → uses the `function` keyword at the statement level
 *                 ✅ Can be called BEFORE it is defined (hoisted)
 *
 *  Expression   → assigns an anonymous function to a variable
 *                 ❌ CANNOT be called before it is defined
 *
 *  Both work the same way once defined — pick whichever style
 *  you prefer and stay consistent.
 * ============================================================ */

// Declaration
/*
function ageCal(birthYear) {
  return 2026 - birthYear;
}
let age = ageCal(1997);
console.log("Your Age is : ", age);
*/

// Expression
/*
let ageCal = function (birthYear) {
  return 2026 - birthYear;
};
let age = ageCal(1997);
console.log("Your age is :", age);
*/

// Exercises
/*
// Subtraction function
function subtraction(x, y) {
  return x - y;
}
console.log("Subtraction Result:", subtraction(3, 2));

// isOdd — returns true if number is odd
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}
console.log(isOdd(3));

// Sum of 1 to N — loop approach
function sumOf(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumOf(5));

// Sum of 1 to N — math formula: n*(n+1)/2  (much faster!)
function secondSumof(numm) {
  return (numm * (numm + 1)) / 2;
}
let summ = secondSumof(5);
console.log("Sum is:", summ);
*/


/* ============================================================
 *  13 — ARRAYS
 *  ─────────────────────────────────────────────────────────
 *  An array stores an ORDERED LIST of values.
 *  Values can be any data type (strings, numbers, objects, etc.)
 *
 *  Indexing starts at 0:
 *    arr[0] → first element
 *    arr[arr.length - 1] → last element
 *
 *  Arrays in JS are mutable — you can change elements directly.
 * ============================================================ */
/*
let students = ["Mokles", "Kuddus", "Karim", "Rahim"];
console.log(students);

students[0] = "Hopeless";   // mutate first element
console.log(students);

let cars = ["Mercedes", "Audi", "Bmw", "Volvo"];
let cars_length = cars.length;
console.log("Cars Array Length:", cars_length);
*/


/* ============================================================
 *  14 — ARRAY METHODS
 *  ─────────────────────────────────────────────────────────
 *  push(val)    → adds to END,       returns new length
 *  pop()        → removes from END,  returns removed item
 *  unshift(val) → adds to START,     returns new length
 *  shift()      → removes from START,returns removed item
 *  indexOf(val) → returns index of first match (-1 if not found)
 *  slice(start, end) → returns a NEW array from start up to
 *                      (but NOT including) end index
 * ============================================================ */

// 1. push / pop
/*
let students = ["Mokles", "Kuddus", "Karim", "Rahim"];
students.push("Rajesh");     // add to end
console.log(students);

let fallGuy = students.pop();  // remove from end, capture it
console.log(fallGuy);
*/

// 2. unshift / shift
/*
let students = ["Mokles", "Kuddus", "Karim", "Rahim"];
students.unshift("Jorim");  // add to start
console.log(students);

students.shift();           // remove from start
console.log(students);
*/

// 3. indexOf
/*
let students = ["Mokles", "Kuddus", "Karim", "Rahim"];
console.log(students.indexOf("Kuddus"));  // → 1
*/

// 4. slice — extracts a portion without modifying the original
/*
let students = ["Mokles","Kuddus","Karim","Rahim","Rachel","Joye","Chandler","Monika"];
let passedStudents = students.slice(3, 7);  // index 3, 4, 5, 6
console.log(passedStudents);
*/

// Exercises
/*
// Get last element using .length
let books = ["Harry Potter", "Hobbit", "Hunger Games", "Little Prince"];
console.log(books[books.length - 1]);

// Access element in a 2D (nested) array
var films = [
  ["hobbit1", "hobbit2", "hobbit3"],
  ["matrix1", "matrix2", "matrix3"],
  ["godFather1", "godFather2", "godFather3"],
];
console.log(films[2][2]);  // → "godFather3"
*/


/* ============================================================
 *  15 — ARRAY ITERATION
 *  ─────────────────────────────────────────────────────────
 *  Two main ways to loop through an array:
 *
 *  1. for loop   → gives you full index control
 *  2. forEach()  → cleaner syntax, runs a callback for each item
 *                  Callback receives: (currentValue, index, array)
 * ============================================================ */
/*
let books = ["Harry Potter", "Hobbit", "Hunger Games", "Little Prince"];

// Using for loop
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

// Using forEach — runs the function for every element
books.forEach(function () {
  console.log("something");   // fires for each item (ignores value)
});

books.forEach(function (bookName) {
  console.log(bookName);      // uses the item value
});

// Exercise — Build array [0..20], then log multiples of 5
let arrey = [];
for (let i = 0; i <= 20; i++) {
  arrey.push(i);
}
console.log(arrey);

arrey.forEach(function (mod) {
  if (mod % 5 === 0) {
    console.log(div);
  }
});
*/


/* ============================================================
 *  16 — OBJECTS
 *  ─────────────────────────────────────────────────────────
 *  An object stores KEY-VALUE pairs (like a real-world record).
 *  Unlike arrays (ordered by index), objects use named keys.
 *
 *  Two ways to access a property:
 *    Dot notation    → obj.key       (use when key is known)
 *    Bracket notation→ obj["key"]    (use with dynamic/variable keys)
 *
 *  Objects can be nested — objects inside objects, arrays
 *  inside objects, or objects inside arrays.
 * ============================================================ */
/*
let student = {
  name: "Mokles",
  age: 23,
  school: "nai",
};

console.log(student);
console.log(student['age']);
*/

// Update object properties
/*
let student = {
  name: "Mokles",
  age: 23,
  school: "nai",
};

student.age += 1;       // dot notation update
student.school = "ase"; // reassign value

console.log(student.age);
console.log(student.school);

// Nested object + array inside object
let student1 = {
  name: "Amy",
  age: 25,
  friends: ["Howerd", "Raj", "Lenord"],
  bestFriend: {
    firstName: "Penny",
    birthYear: 1988,
  },
};

let bestFriendOfStudnet1 = student1.bestFriend.firstName;  // chained dot
let friend2 = student1.friends[1];                         // array inside object

console.log(bestFriendOfStudnet1);
console.log(friend2);
*/

// Add new properties to an empty object
/*
let colors = {};
colors.orange = { code: 123 };
colors.black = { code: [1, 2, 3, 4] };

console.log(colors);
console.log(colors.black.code[1]);  // nested array access → 2
*/

// Complex structure — array of objects, with nested arrays of objects
/*
let blogPosts = [
  {
    title: "Weather",
    content: "It is Rainy Today",
    comment: [
      { name: "Harry", lastName: "Potter" },
      { name: "Bilbo", lastName: "Bagins" },
    ],
  },
  {
    title: "Weather",
    content: "Do not like Rainy weather",
  },
];

console.log(blogPosts[1].title);            // → "Weather"
console.log(blogPosts[0].comment[1].name);  // → "Bilbo"
*/

// Exercise — Array of objects with conditional loop output
/*
let universities = [
  { name: "Omuk",  hasGone: false, year: null },
  { name: "tomuk", hasGone: true,  year: 1969 },
  { name: "Romuk", hasGone: true,  year: 1968 },
  { name: "Bomuk", hasGone: true,  year: 1967 },
  { name: "Komuk", hasGone: false, year: null },
];

// Using for loop
for (let i = 0; i < universities.length; i++) {
  if (universities[i].hasGone === false) {
    console.log(universities[i].name);
  } else {
    console.log(universities[i].name, universities[i].hasGone, universities[i].year);
  }
}

// Using forEach — cleaner and more readable
universities.forEach(function (university) {
  if (university.hasGone === true) {
    console.log(university.name, university.year);
  } else {
    console.log(university.name);
  }
});
*/


/* ============================================================
 *  17 — OBJECT METHODS
 *  ─────────────────────────────────────────────────────────
 *  A method is a FUNCTION stored as a property of an object.
 *  This lets objects have behaviour, not just data.
 *
 *  Call it with:  objectName.methodName()
 * ============================================================ */
/*
let sheldon = {
  name: "Sheldon",
  age: 25,
  hasGone: true,
  friends: ["Lenord", "Howard", "Raj"],
  say: function () {
    console.log("Say Hi Sheldon");
  },
};
sheldon.say();

let lenord = {
  name: "Lenord",
  say: function () {
    console.log("Say Hi Lenord");
  },
};
lenord.say();
*/


/* ============================================================
 *  18 — THE `this` KEYWORD
 *  ─────────────────────────────────────────────────────────
 *  `this` refers to the OBJECT that is currently calling the method.
 *  It lets methods access other properties of their own object.
 *
 *  In a regular function (not inside an object):
 *    → `this` refers to the global object (window in browser)
 *
 *  In an object method:
 *    → `this` refers to the object the method belongs to
 *
 *  Useful pattern: store a computed value on `this` so you
 *  only calculate it once (e.g. this.age = ...).
 * ============================================================ */
/*
// `this` in global scope
console.log(this);   // → Window object (browser)

// `this` in a regular function → still Window
function addNumber(x, y) {
  console.log(x + y);
  console.log(this);  // → Window
}
addNumber(10, 10);

// `this` inside an object method → the object itself
let harry = {
  name: "Harry",
  age: 15,
  say: function () {
    console.log(this);            // → the harry object
    console.log("Say Hi " + this.name);
  },
};
harry.say();
*/


/* ============================================================
 *  ════════════════════════════════════════════════════════
 *       SECOND COURSE — MODERN JAVASCRIPT (ES6+)
 *  ════════════════════════════════════════════════════════
 * ============================================================ */


/* ============================================================
 *  19 — CHALLENGE 1 : BMI CALCULATOR
 *  ─────────────────────────────────────────────────────────
 *  BMI Formula: mass(kg) / height(m)²
 *  Math.round() rounds to the nearest whole number.
 *  ** is the exponentiation operator (power).
 * ============================================================ */
/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.195;

const BMIMark = Math.round(massMark / heightMark ** 2);
const BMIJohn = Math.round(massJohn / heightJohn ** 2);

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

if (BMIMark > BMIMark) {
  console.log(`Mark has the highest BMI: ${BMIMark}`);
} else {
  console.log(`John has the highest BMI: ${BMIJohn}`);
}

if (BMIMark > BMIMark) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}
*/


/* ============================================================
 *  20 — TEMPLATE LITERALS  ( `backtick strings` )
 *  ─────────────────────────────────────────────────────────
 *  Template literals use backticks ` ` instead of quotes.
 *  They allow:
 *    • Embedded expressions  → ${variable} or ${expression}
 *    • Multi-line strings    → just press Enter inside backticks
 *
 *  Much cleaner than string concatenation with +.
 * ============================================================ */
/*
// Old way (concatenation)
const _name = "Mokles";
const job = "bekar";
const birthYear = 1969;
const year = 2026;

const hi = "My name is " + _name + " I'm a " + (year - birthYear) + " years old " + job;
console.log("Old Way :", hi);

// New way (template literal)
const bye = `My name is ${_name} I'm a ${year - birthYear} years old ${job}`;
console.log("New Way :", bye);

// Multi-line string — no \n needed
console.log(`String with
multiple
lines`);
*/

/*
const favThing = prompt("Whats Your Favourite thing to do?");
console.log(favThing);
*/


/* ============================================================
 *  21 — CHALLENGE 2 : TEAM SCORE COMPARISON
 * ============================================================ */
/*
const scoreDolphines = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(`Dolphines Score Avg: ${scoreDolphines}`);
console.log(`Koalas Score Avg: ${scoreKoalas}`);

if (scoreDolphines > scoreKoalas) {
  console.log("Dophine win the trophy");
} else if (scoreDolphines === scoreKoalas) {
  console.log("Both win the trophy");
} else {
  console.log("Koalas win the trophy");
}
*/


/* ============================================================
 *  22 — TERNARY OPERATOR (Revisited — ES6 context)
 *  ─────────────────────────────────────────────────────────
 *  Key advantage over if/else:
 *    → It's an EXPRESSION, so it can be used INSIDE template literals
 *       e.g.  `You can drink ${age >= 18 ? "Vodka" : "Water"}`
 *
 *  ⚠️  The else part ( : ) is MANDATORY in the ternary operator.
 * ============================================================ */
/*
const age = 19;

age >= 18
  ? console.log("You can Drink VODKA!")
  : console.log("You can drink Water");

const drink = age >= 18 ? "Vodka" : "Water";
console.log(`You can drink ${drink}!`);

// Inline inside template literal
console.log(`You can drink ${age >= 18 ? "Vodka" : "Water"}`);
*/

// Challenge 3 — Bill + tip calculator using ternary
/*
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Bill: ${bill}`);
console.log(`Tip: ${tip}`);
console.log(`Total Bill to be paid ${bill + tip}`);
*/


/* ============================================================
 *  23 — STRICT MODE  ( "use strict" )
 *  ─────────────────────────────────────────────────────────
 *  Add "use strict"; at the very top of a file or function.
 *  It activates a stricter parsing mode that:
 *    • Throws errors for silent mistakes (e.g. undeclared variables)
 *    • Prevents using future reserved keywords as variable names
 *    • Makes debugging easier — bugs show up earlier
 *
 *  ✅ Best practice: always use strict mode in modern JS.
 * ============================================================ */
/*
"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("Can Drive");
*/


/* ============================================================
 *  24 — FUNCTIONS (ES6 Recap)
 * ============================================================ */
/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} Oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/


/* ============================================================
 *  25 — FUNCTION DECLARATION & EXPRESSION (ES6 Recap)
 * ============================================================ */

// Declaration
/*
function calcAge1(birthYear) {
  return 2026 - birthYear;
}
const age = calcAge1(1997);
*/

// Expression
/*
const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};
const age2 = calcAge2(1997);

console.log(age, age2);
*/


/* ============================================================
 *  26 — ARROW FUNCTIONS  ( => )
 *  ─────────────────────────────────────────────────────────
 *  Shortest syntax for writing functions, introduced in ES6.
 *
 *  One-liner (implicit return — no braces, no return keyword):
 *    const fn = (param) => expression;
 *
 *  Multi-line (explicit return — needs braces and return):
 *    const fn = (param) => {
 *      ...
 *      return value;
 *    };
 *
 *  ⚠️  Arrow functions do NOT have their own `this` binding.
 *      Avoid using them as object methods when you need `this`.
 * ============================================================ */
/*
// Single line — implicit return
const calcAgeArrow = (birthYear) => 2026 - birthYear;
const age = calcAgeArrow(1997);
console.log(age);
*/

// Multi-line — explicit return with {}
/*
const calcAgeArrow = (birthYear) => {
  const age = 2026 - birthYear;
  const retirementAge = 65 - age;
  return retirementAge;
};
const yearsLeft = calcAgeArrow(1997);
console.log(`${yearsLeft} Years left for Retirement`);
*/

// Multiple parameters
/*
const calcAgeArrow = (firstName, birthYear) => {
  const age = 2026 - birthYear;
  const retirementAge = 65 - age;
  return `${firstName} retires in ${retirementAge} years`;
};
console.log(calcAgeArrow("Tonmoy", 1997));
*/


/* ============================================================
 *  27 — CALLBACK FUNCTIONS
 *  ─────────────────────────────────────────────────────────
 *  A callback is a function PASSED AS AN ARGUMENT to another function.
 *  It allows you to reuse logic and keep functions modular.
 *
 *  Here cutPieces() is a helper called inside fruitProcessor().
 *  This keeps each function small and single-purpose.
 * ============================================================ */
/*
function cutPieces(fruits) {
  return fruits * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);     // callback usage
  const orangePieces = cutPieces(oranges);   // callback usage
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of Oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
function calcAge(birthYear) {
  return 2026 - birthYear;
}

// yearsUntilRetirement calls calcAge internally — it's a callback pattern
function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirementAge = 65 - age;

  if (retirementAge > 0) {
    return `${firstName} retires in ${retirementAge} years`;
  } else {
    return `${firstName} already retired`;
  }
}

console.log(yearsUntilRetirement(1997, "Mokles"));
console.log(yearsUntilRetirement(1960, "Kuddus"));
*/

// Challenge — Team score comparison with a function
/*
const calcAverage = (a, b, c) => a + b + c / 3;  // ⚠️ Bug: should be (a+b+c)/3

let dolphinesScore = Math.round(calcAverage(85, 54, 41));
let koalasScore = Math.round(calcAverage(23, 34, 27));

function winner(avgDolphines, avgKoalas) {
  if (avgDolphines > avgKoalas * 2) {
    console.log(`Dolphines Wins with : ${dolphinesScore} vs ${koalasScore}`);
  } else if (avgKoalas > avgDolphines * 2) {
    console.log(`Koalas Wins with : ${koalasScore} vs ${dolphinesScore}`);
  } else {
    console.log("No one wins");
  }
}

winner(dolphinesScore, koalasScore);
*/


/* ============================================================
 *  28 — CHALLENGE : TIP CALCULATOR WITH ARRAYS & FUNCTIONS
 *  ─────────────────────────────────────────────────────────
 *  Tip rules:
 *    bill between $50–$300 → 15% tip
 *    bill outside that range → 20% tip
 *
 *  Steps:
 *    1. calcTip function using ternary operator
 *    2. bills array with test data
 *    3. tips array — calculated from bills
 *    4. (Bonus) totalBill array — bill + tip for each
 * ============================================================ */
/*
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

let totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips);
console.log(totalBill);
*/


/* ============================================================
 *  29 — OBJECTS (ES6 Revisited)
 *  ─────────────────────────────────────────────────────────
 *  Bracket notation with dynamic keys:
 *    const key = "Name";
 *    obj[`first${key}`]  → accesses obj.firstName
 *
 *  You can ADD new properties anytime after creating the object:
 *    obj.newProp = value;
 * ============================================================ */
/*
let bioData = {
  firstName: "Mokles",
  age: 2026 - 1996,
  job: "Unemployed",
  friends: ["Kuddus", "Hopeless"],
};

console.log(bioData.age);         // dot notation
console.log(bioData["age"]);      // bracket notation (same result)

const nameKey = "Name";
console.log(bioData[`first${nameKey}`]);   // dynamic bracket access → "Mokles"

// Prompt-based conditional access (commented out)
// let userChoice = prompt("What do you want to know about Mokles? firstName, Age, Job, Friends");
// if (bioData[userChoice]) {
//   console.log(bioData[userChoice]);
// } else {
//   console.log("Wrong Request... Choose between : firstName, Age, Job, Friends");
// }

// Adding new properties dynamically
bioData.location = "BhoberDesh";
bioData["Twitter"] = "BoomShakalaka";

console.log(bioData);

console.log(
  `${bioData.firstName} has ${bioData.friends.length} friends and ${bioData.friends[0]} is his bestfriend`,
);
*/


/* ============================================================
 *  30 — OBJECT METHODS + `this` (ES6 Revisited)
 *  ─────────────────────────────────────────────────────────
 *  Caching a computed value with `this`:
 *    Instead of calling calcAge() every time, store the result
 *    on the object (this.age = ...) so it's computed only once.
 *
 *  getSummery() demonstrates combining multiple properties and
 *  methods into one readable output string.
 * ============================================================ */
/*
let bioData = {
  firstName: "Mokles",
  birthYear: 1996,
  job: "Unemployed",
  friends: ["Kuddus", "Hopeless"],
  hasDriverLicense: false,

  // calcAge stores result on `this` to avoid recalculation
  calcAge: function () {
    this.age = 2026 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${this.hasDriverLicense ? "a" : "no"} drivers License!`;
  },
};

console.log(bioData.getSummery());
*/

// Challenge — BMI with object methods
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = Math.round(this.mass / (this.height * this.height));
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = Math.round(this.mass / (this.height * this.height));
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`Mark Miller's BMI ${mark.bmi} is higher than John Smith's ${john.bmi}!`);
} else if (john.bmi > mark.bmi) {
  console.log(`John Smith's BMI ${john.bmi} is higher than Mark Miller's ${mark.bmi}!`);
} else {
  console.log(`Both BMI are same`);
}
*/


/* ============================================================
 *  31 — FOR LOOP (ES6 Revisited) + NESTED LOOPS
 *  ─────────────────────────────────────────────────────────
 *  Nested loops → a loop inside a loop.
 *  Outer loop runs once → inner loop runs fully each time.
 *  Great for: tables, grids, exercise sets, 2D arrays, etc.
 * ============================================================ */

// Even/Odd check in a loop
/*
for (let rep = 1; rep <= 20; rep++) {
  if (rep % 2 === 0) {
    console.log(`Even Number: ${rep}`);
  }
  if (rep % 2 !== 0) {
    console.log(`Odd Number: ${rep}`);
  }
}
*/

// Loop through array + build a new array with push
/*
let bioData = ["Mokles", 2026 - 1996, "Unemployed", ["Kuddus", "Hopeless"], true];

for (let i = 0; i < bioData.length; i++) {
  console.log(bioData[i]);
}

let year = [1969, 1997, 2008, 2020];
let age = [];

for (let i = 0; i < year.length; i++) {
  age.push(2026 - year[i]);
}
console.log(age);
*/

// Nested for loop
/*
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------Starting Exercise ${exercise}------ (For Loop)`);
  for (let i = 1; i <= 5; i++) {
    console.log(`Exercise ${exercise}: Weight Lifting Exercise ${i}`);
  }
}
*/

// Same nested loop with while
/*
let exercise = 1;
while (exercise <= 3) {
  let i = 1;
  console.log(`------Starting Exercise ${exercise}------ (While Loop)`);
  while (i <= 5) {
    console.log(`Exercise ${exercise}: Weight Lifting Exercise ${i}`);
    i++;
  }
  exercise++;
}
*/


/* ============================================================
 *  32 — WHILE LOOP — RANDOM DICE EXAMPLE
 *  ─────────────────────────────────────────────────────────
 *  Math.random() → returns a decimal between 0 (inclusive) and 1 (exclusive)
 *  Math.random() * 6    → 0.0 to 5.999...
 *  Math.round(... + 1)  → rounds to 1–7 (not perfect for dice)
 *
 *  This shows while loops are perfect when you don't know
 *  in advance how many iterations you'll need.
 * ============================================================ */
/*
let dice = Math.round(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You Rolled a ${dice}`);
  dice = Math.round(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is about to end.....");
}
*/


/* ============================================================
 *  ████████████████████████████████████████████████████████
 *   Challenge: Tip Calculator + Average Function
 *  ████████████████████████████████████████████████████████
 *
 *  Steps:
 *  1. bills      → array of 10 bill amounts
 *  2. calcTip()  → returns 15% tip if bill is $50–$300, else 20%
 *  3. for loop   → fills tips[] and total[] arrays
 *  4. calcAverage() → sums all values and divides by array length
 * ============================================================ */

/* 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(bills[i] + tip);
}

console.log(tips, total);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return Math.round(sum / arr.length);
};

console.log(calcAverage(total)); 
*/