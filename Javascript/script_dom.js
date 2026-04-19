////////////////// DOM Intro ///////////////////

/* 
let h1Select = document.querySelector("h1");

h1Select.style.color = "blue";
h1Select.style.textAlign = "center";

let pSelect = document.querySelector("p");

pSelect.style.color = "red";
pSelect.style.textAlign = "center";

isYellow = false;

let bodySelect = document.querySelector("body");

setInterval(function () {
  if (!isYellow) {
    bodySelect.style.background = "yellow";
  } else {
    bodySelect.style.background = "white";
  }
  isYellow = !isYellow;
}, 500);
 */

/////////////// Selectors //////////////

/* 
let selectID = document.getElementById("oakParagraph");
console.log(selectID);

let selectClass = document.getElementsByClassName("background");
console.log(selectClass);

let selectTag = document.getElementsByTagName("h1");
console.log(selectTag);

let selectWithQueryID = document.querySelector("#oakParagraph");
console.log(selectWithQueryID);

let selectWithQueryClass = document.querySelector(".background");
console.log(selectWithQueryClass);

let selectWithQueryClassAll = document.querySelectorAll(".background");
console.log(selectWithQueryClassAll);
 */

///////////////// DOM Manipulation ///////////////

/* 
let divManipulate = document.querySelector(".background");


divManipulate.style.height = "50px";
divManipulate.style.weight = "400px";
divManipulate.style.backgroundColor = "red";
divManipulate.style.fontSize = "30px";
divManipulate.style.border = "5px solid black"; 



divManipulate.classList.add("addClass");
divManipulate.classList.remove("addClass");

divManipulate.classList.toggle("addClass");
 */

// let paragraph = document.querySelector("#oakParagraph");
// console.log(paragraph.textContent);
// console.log(paragraph.innerHTML);

/////////// attribute manipulation/////////////

/* 
let myLink = document.querySelector("a");

console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "www.duckduckgo.com");

console.log(myLink.getAttribute("href"));
 */