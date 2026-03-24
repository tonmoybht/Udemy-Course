////////////////// first code ////////////////////
// console.log("Hello!");

//////////////////// variable and data types /////////////
// var name = "Mokles";

// console.log(name);

// var schoolTeam = "football";
// var schoolNum = 20;

// console.log(schoolNum);

// var isRegistered = true;

// var job;

// console.log(job);

// console.log(isRegistered);

///////////////////// Type Coarcion //////////////////

// console.log(name + " " + schoolNum);

// var schoolName, hasCourse;

// schoolName = "Gopal Academy";
// hasCourse = true;

// console.log(schoolName + " Has 10 Courses? " + hasCourse);

/////////////////// Variable Mutation //////////////////
// schoolNum = "Tweenty";

// console.log(schoolNum);

// schoolTeam = "Cricket";

// console.log(schoolTeam);

//alert(schoolTeam);

// var age = prompt("Enter your age");

// console.log("Age = " + age);

/////////////////////// Basic Oparators //////////////////

// var totalDistance, samDistance, alexDistance;

// totalDistance = 20;

// samDistance = totalDistance - 12;
// console.log("Sam Ran " + samDistance + "KM");

// alexDistance = totalDistance - 8;
// console.log("Alex Ran " + alexDistance + "KM");

// //Logical Ops

// var distanceToschool, distanceTohome;

// distanceToschool = 20;
// distanceTohome = 10;

// var isCloser = distanceTohome < distanceToschool;

// console.log(isCloser);

////////////////// Conditional Statements ////////////////////

// var grade;

// grade = 42;

// if (grade < 40) {
//   console.log("You Failed!!");
// } else if (grade >= 40 && grade < 45) {
//   console.log("You can retake the exam");
// } else {
//   console.log("You Passed!");
// }

// //exercise 1

// var age;

// age = 24;

// if (age < 18) {
//   console.log("You cannot enter!");
// } else if(age >= 18 && age < 23){
//   console.log('You can enter but cannot drink alcohol!');
// }else {
//   console.log("Welcome! Knock yourself out.");
// }

////////////////////// Ternary Operator ///////////////////////

// var grade = 43;

// grade < 45 ? console.log("You Failed!") : console.log("You passed!");

// var result = grade < 45 ? "Failed" : "Passed";

// console.log(result);

///////////////////////// Switch case ///////////////////////

// var day;

// day = "friday";

// switch (day) {
//   case "friday":
//     console.log("Shei");
//     break;
//   case "saterday":
//     console.log("Good");
//     break;
//   case "sunday":
//     console.log("Baal");
//     break;

//   default:
//     console.log("Ki baar?");
//     break;
// }

// var grade = 37;

// switch (true) {
//   case grade < 40:
//     console.log("You field!");
//     break;
//   case grade >= 40 && grade < 45:
//     console.log("You may take retake exam");
//     break;
//   default:
//     console.log("You passed!");
//     break;
// }

// // exercise 2

// var alexGrade = (90 + 80 + 95) / 3;
// console.log("Alex avarage Grade = " + alexGrade);

// var saraGrade = (89 + 76 + 98) / 3;
// console.log("Sara avarage Grade = " + saraGrade);

// var nancyGrade = (42 + 98 + 83) / 3;
// console.log("Nancy avarage Grade = " + nancyGrade);

// if (alexGrade > saraGrade && alexGrade > nancyGrade) {
//   console.log("Alex have the highest avarage grade!");
// } else if (saraGrade > alexGrade && saraGrade > nancyGrade) {
//   console.log("Sara have the highest avarage grade!");
// } else if (nancyGrade > alexGrade && nancyGrade > saraGrade) {
//   console.log("Nancy have the highest avarage grade!");
// } else {
//   console.log("Maybe they have same avarage");
// }

////////////////////// While loop //////////////////////////

// var num = 1;

// while (num <= 11) {
//   console.log(num);
//   num++;
// }

// exercise 1

// even number

// var num = 132;

// while (num <= 148) {
//   console.log(num);
//   num += 2;
// }

// divisible by 7

// var num = 25;

// while (num <= 100) {
//   if (num % 7 === 0) {
//     console.log(num);
//   }
//   num++;
// }

///////////////////// For loop /////////////////////////

// var num = 1;

// for (i = 1; i <= 10; i++) {
//   console.log(num);
//   num++;
// }

// for (var num = 1; num <= 10; num++) {
//   console.log(num);
// }

// exercise 1

// //print even number
// for (var num = 132; num <= 148; num++) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
// }

// //print number divisible by both 7 and 5.
// for (var num = 25; num <= 100; num++) {
//   if (num % 7 === 0 && num % 5 === 0) {
//     console.log(num);
//   }
// }

///////////////////////// Functions ////////////////////////

function sayHello() {
  console.log("Hello");
}

sayHello();
