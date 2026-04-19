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