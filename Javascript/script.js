////////////////// first code ////////////////////
/* 
console.log("Hello!");
 */

//////////////////// variable and data types /////////////
/* 
var name = "Mokles";

console.log(name);

var schoolTeam = "football";
var schoolNum = 20;

console.log(schoolNum);

var isRegistered = true;

var job;

console.log(job); 
*/

// console.log(isRegistered);

///////////////////// Type Coarcion //////////////////

/* 
console.log(name + " " + schoolNum);

var schoolName, hasCourse;

schoolName = "Gopal Academy";
hasCourse = true;

console.log(schoolName + " Has 10 Courses? " + hasCourse); 
*/

/////////////////// Variable Mutation //////////////////
/* 
schoolNum = "Tweenty";

console.log(schoolNum);

schoolTeam = "Cricket";

console.log(schoolTeam);

alert(schoolTeam);

var age = prompt("Enter your age");

console.log("Age = " + age); 
*/

/////////////////////// Basic Oparators //////////////////

/* 
var totalDistance, samDistance, alexDistance;

totalDistance = 20;

samDistance = totalDistance - 12;
console.log("Sam Ran " + samDistance + "KM");

alexDistance = totalDistance - 8;
console.log("Alex Ran " + alexDistance + "KM");
 */

// //Logical Ops

/* 
var distanceToschool, distanceTohome;

distanceToschool = 20;
distanceTohome = 10;

var isCloser = distanceTohome < distanceToschool;

console.log(isCloser); 
*/

////////////////// Conditional Statements ////////////////////

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

// //exercise 1

/* 
var age;

age = 24;

if (age < 18) {
  console.log("You cannot enter!");
} else if(age >= 18 && age < 23){
  console.log('You can enter but cannot drink alcohol!');
}else {
  console.log("Welcome! Knock yourself out.");
} 
*/

////////////////////// Ternary Operator ///////////////////////

/* 
var grade = 43;

grade < 45 ? console.log("You Failed!") : console.log("You passed!");

var result = grade < 45 ? "Failed" : "Passed";

console.log(result);
 */
///////////////////////// Switch case ///////////////////////

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

// // exercise 2

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

////////////////////// While loop //////////////////////////

/* 
var num = 1;

while (num <= 11) {
  console.log(num);
  num++;
}

exercise 1

even number

var num = 132;

while (num <= 148) {
  console.log(num);
  num += 2;
}

divisible by 7

var num = 25;

while (num <= 100) {
  if (num % 7 === 0) {
    console.log(num);
  }
  num++;
}
   */

///////////////////// For loop /////////////////////////

/* 
var num = 1;

for (i = 1; i <= 10; i++) {
  console.log(num);
  num++;
}

for (var num = 1; num <= 10; num++) {
  console.log(num);
}
*/

// exercise 1

// //print even number
/* 
for (var num = 132; num <= 148; num++) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

//print number divisible by both 7 and 5.
for (var num = 25; num <= 100; num++) {
  if (num % 7 === 0 && num % 5 === 0) {
    console.log(num);
  }
} 
  */

///////////////////////// Functions ////////////////////////

/* 
function sayHello() {
  console.log("Hello");
}

sayHello();
 */
//// Argument

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

// Return

function cube(num) {
  math = "Cube of " + num + " is : " + num * num * num;
  return math;
}

console.log(cube(3));
console.log(cube(69));

function cube(num) {
  return "Cube of " + num + " is : " + num * num * num;
}

console.log(cube(3));
console.log(cube(69));

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

function enterCafe(age){
  if(age < 18){
    return "You cannot enter the cafe!"
  }
  return 'You can enter the cafe!'
}

let age = enterCafe(69)

console.log(age);
 */

/////////////// Function declaration and expression //////////////

//// declartation

/* 
function ageCal(birthYear) {
  return 2026 - birthYear;
}

let age = ageCal(1997);

console.log("Your Age is : ", age);
 */

//// expression

/*
 let ageCal = function (birthYear) {
  return 2026 - birthYear;
};

let age = ageCal(1997);

console.log("Your age is :",age);
 */
///// Exercise

//Subtraction

/*
 function subtraction(x, y) {
  return x - y;
}

console.log("Subtraction Result:", subtraction(3, 2));
 */
// //is ODD

/*
 function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

console.log(isOdd(3));
 */

// //sum

/*
 function sumOf(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOf(5));

function secondSumof(numm) {
  return (numm * (numm + 1)) / 2;
}

let summ = secondSumof(5);

console.log("Sum is:", summ); 
*/

///////////////////////// Array ///////////////////////////

/* 
let students = ["Mokles", "Kuddus", "Karim", "Rahim"];

console.log(students);
// console.log(students[1]);

students[0] = "Hopeless";

console.log(students);

let cars = ["Mercedes", "Audi", "Bmw", "Volvo"];

let cars_length = cars.length;

console.log("Cars Array Length:",cars_length);
 */

/////////////////// Array Methods //////////////////

//// 1.Push/Pop adds or removes items from the end

/* 
let students = ["Mokles", "Kuddus", "Karim", "Rahim"];

students.push("Rajesh");

console.log(students);

let fallGuy = students.pop();

console.log(fallGuy);
 */

////2.unshift/shift adds or removes items from beginning

/* 
let students = ["Mokles", "Kuddus", "Karim", "Rahim"];

students.unshift("Jorim");

console.log(students);

students.shift();

console.log(students);
 */

////3. Index of

/* 
let students = ["Mokles", "Kuddus", "Karim", "Rahim"];

console.log(students.indexOf("Kuddus"));
 */

////4.slice

/*
 let students = [
  "Mokles",
  "Kuddus",
  "Karim",
  "Rahim",
  "Rachel",
  "Joye",
  "Chandler",
  "Monika",
];

let passedStudents = students.slice(3, 7);

console.log(passedStudents); 
*/

////Exercise

// //print last name using length
/* 
let books = ["Harry Potter", "Hobbit", "Hunger Games", "Little Prince"];

console.log(books[books.length - 1]); 
*/

// //print godFather3

/*
 var films = [
  ["hobbit1", "hobbit2", "hobbit3"],
  ["matrix1", "matrix2", "matrix3"],
  ["godFather1", "godFather2", "godFather3"],
];

console.log(films[2][2]) 
*/ ////// arrey iteration

/* 
let books = ["Harry Potter", "Hobbit", "Hunger Games", "Little Prince"];

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

... printing something for each array elements
books.forEach(function () {
  console.log("something");
});

books.forEach(function (bookName) {
  console.log(bookName);
});

// Exercise

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

////////////////////// Object /////////////////////

/* 
let student = {
  name: "Mokles",
  age: 23,
  school: "nai",
};

console.log(student);
console.log(student['age']); 
*/

/////// Update object

/* 
let student = {
  name: "Mokles",
  age: 23,
  school: "nai",
};

student.age += 1;
student.school = "ase";

console.log(student.age);
console.log(student.school);

let student1 = {
  name: "Amy",
  age: 25,
  friends: ["Howerd", "Raj", "Lenord"],
  bestFriend: {
    firstName: "Penny",
    birthYear: 1988,
  },
};

let bestFriendOfStudnet1 = student1.bestFriend.firstName;

let friend2 = student1.friends[1];

console.log(bestFriendOfStudnet1);

console.log(friend2); 
*/

///////// Add property to object

/* 
let colors = {};

colors.orange = { code: 123 };
colors.black = { code: [1, 2, 3, 4] };

console.log(colors);
console.log(colors);
console.log(colors.black.code[1]);
 */

/* 
let blogPosts = [
  {
    title: "Weather",
    content: "It is Rainy Today",
    comment: [
      {
        name: "Harry",
        lastName: "Potter",
      },
      {
        name: "Bilbo",
        lastName: "Bagins",
      },
    ],
  },
  {
    title: "Weather",
    content: "Do not like Rainy weather",
  },
];

console.log(blogPosts[1].title);
console.log(blogPosts[0].comment[1].name);
 */

//// Exercise

/* let universities = [
  {
    name: "Omuk",
    hasGone: false,
    year: null,
  },
  {
    name: "tomuk",
    hasGone: true,
    year: 1969,
  },
  {
    name: "Romuk",
    hasGone: true,
    year: 1968,
  },
  {
    name: "Bomuk",
    hasGone: true,
    year: 1967,
  },
  {
    name: "Komuk",
    hasGone: false,
    year: null,
  },
];

// Using for


for (let i = 0; i < universities.length; i++) {
  if (universities[i].hasGone === false) {
    console.log(universities[i].name);
  } else {
    console.log(
      universities[i].name,
      universities[i].hasGone,
      universities[i].year,
    );
  }
} 


// Using forEach

universities.forEach(function (university) {
  if (university.hasGone === true) {
    console.log(university.name, university.year);
  } else {
    console.log(university.name);
  }
});
 */

///////// Object Methods////////////

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

/////////////////// This Keyword /////////////////////

// console.log(this);

/* 
function addNumber(x, y) {
  console.log(x + y);
  console.log(this);
}

addNumber(10, 10);

let harry = {
  name: "Harry",
  age: 15,
  say: function () {
    console.log(this);
    console.log("Say Hi " + this.name);
  },
};

harry.say();
 */

/////////////////// ********** Another Course **********///////////////////

/// Challange 1

/* const massMark = 78;
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
////////////// Tamplate Literals///////////

/* //Old way

const _name = "Mokles";
const job = "bekar";
const birthYear = 1969;
const year = 2026;

const hi =
  "My name is " + _name + " I'm a " + (year - birthYear) + " years old " + job;

console.log("Old Way :", hi);

// new way

const bye = `My name is ${_name} I'm a ${year - birthYear} years old ${job}`;

console.log("New Way :", bye);

console.log(`Sting with
multiple 
lines`);
 */

/* 
const favThing = prompt("Whats Your Favourite thing to do?");

console.log(favThing); 
*/

///Challange 2

/* const scoreDolphines = (96 + 108 + 89) / 3;
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

////////// Ternary OP(Else block is Mandatory, can be used in tamplate literal)
/* 
const age = 19;

age >= 18
  ? console.log("You can Drink VODKA!")
  : console.log("You can drink Water");


const drink = age >= 18 ? "Vodka" : "Water";

console.log(`You can drink ${drink}!`);


console.log(`You can drink ${age >= 18 ? "Vodka" : "Water"}`);
 */

/// Challange 3

/* const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Bill: ${bill}`);
console.log(`Tip: ${tip}`);
console.log(`Total Bill to be paid ${bill + tip}`);

 */

///////////////// Strict Mode ////////////////

/* 
"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("Can Drive"); 
*/

//// Function

/*
 function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} Oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
 */

////////// function Declaration & Expression /////////////

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

/// Arrow function

/*
const calcAgeArrow = (birthYear) => 2026 - birthYear;

const age = calcAgeArrow(1997);

console.log(age);
 */
// for multiple line use {}

/* const calcAgeArrow = (birthYear) => {
  const age = 2026 - birthYear;
  const retirementAge = 65 - age;
  return retirementAge;
};

const yearsLeft = calcAgeArrow(1997);

console.log(`${yearsLeft} Years left for Retirement`);
 */

/*
const calcAgeArrow = (firstName, birthYear) => {
  const age = 2026 - birthYear;
  const retirementAge = 65 - age;
  return `${firstName} retires in ${retirementAge} years`;
};

console.log(calcAgeArrow("Tonmoy", 1997));
 */

//// Callback Function

/* 
function cutPieces(fruits) {
  return fruits * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of Oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
 */

/* 
function calcAge(birthYear) {
  return 2026 - birthYear;
}

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

/// Challange

/* 
const calcAverage = (a, b, c) => a + b + c / 3;

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

// Challange

/* 
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

1. Write a function calcTip that takes any bill value as an input and returns the corresponding  tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So, create an array called bills containing the test data below.

3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



*/

/* const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

let totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips);
console.log(totalBill);
 */

////// Object

/* let bioData = {
  firstName: "Mokles",
  age: 2026 - 1996,
  job: "Unemployed",
  friends: ["Kuddus", "Hopeless"],
};

console.log(bioData.age);
console.log(bioData["age"]);

const nameKey = "Name";

console.log(bioData[`first${nameKey}`]);

// let userChoice = prompt(
//   "What do you want to know about Mokles? firstName, Age, Job, Friends",
// );

// if (bioData[userChoice]) {
//   console.log(bioData[userChoice]);
// } else {
//   console.log("Wrong Request... Choose between : firstName, Age, Job, Friends");
// }

bioData.location = "BhoberDesh";
bioData["Twitter"] = "BoomShakalaka";

console.log(bioData);

console.log(
  `${bioData.firstName} has ${bioData.friends.length} friends and ${bioData.friends[0]} is his bestfriend`,
);
 */

///// object methods

/* let bioData = {
  firstName: "Mokles",
  birthYear: 1996,
  job: "Unemployed",
  friends: ["Kuddus", "Hopeless"],
  hasDriverLicense: false,
  // calcAge: function (birthYear) {
  //   return 2026 - birthYear;
  // },

  // calcAge: function () {
  //   return 2026 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2026 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${this.hasDriverLicense ? "a" : "no"} drivers License!`;
  },
};

// console.log(bioData.calcAge(1996));>
// console.log(bioData["calcAge"](1996));

// console.log(bioData.calcAge(1996));

// console.log(bioData.calcAge());

// console.log(bioData.age);

console.log(bioData.getSummery());
 */
/// Challange

/* 
Your tasks:

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
 */

/* const mark = {
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
  console.log(
    `Mark Miller's BMI ${mark.bmi} is higher than John Smith's ${john.bmi}!`,
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `John Smith's BMI ${john.bmi} is higher than Mark Miller's ${mark.bmi}!`,
  );
} else {
  console.log(`Both BMI are same`);
}
 */

////// for loop

/* for (let rep = 1; rep <= 20; rep++) {
  if (rep % 2 === 0) {
    console.log(`Even Number: ${rep}`);
  }
  if (rep % 2 !== 0) {
    console.log(`Odd Number: ${rep}`);
  }
}
 */

/* let bioData = [
  "Mokles",
  2026 - 1996,
  "Unemployed",
  ["Kuddus", "Hopeless"],
  true,
];

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

/* 
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------Starting Exercise ${exercise}------ (For Loop)`);
  for (let i = 1; i <= 5; i++) {
    console.log(`Exercise ${exercise}: Weight Lifting Exercise ${i}`);
  }
}
 */

/* let exercise = 1;
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

/* let dice = Math.round(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You Rolled a ${dice}`);
  dice = Math.round(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is about to end.....");
} */

//// Challenge

/* 
Your tasks:

1. Create an array called bills containing all 10 test bill values.

2. Create empty arrays for the tips and the totals (tips and totals)

3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

1. Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

2. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

3. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.


*/

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
