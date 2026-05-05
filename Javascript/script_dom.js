/*
 * ============================================================
 *   JAVASCRIPT — DOM (Document Object Model)
 * ============================================================
 *   Purpose : Manipulating HTML elements from JavaScript
 *
 *   📌 WHAT IS THE DOM?
 *      The DOM is a tree-like representation of your HTML page
 *      that the browser creates automatically. JavaScript can
 *      read and modify this tree to change what you see on screen
 *      — without reloading the page.
 *
 *      HTML file → Browser parses it → Creates the DOM tree
 *      JS accesses the DOM tree → Changes appear on screen
 *
 *   📌 HOW TO USE THIS FILE:
 *      Un-comment one section at a time to test it.
 *      All sections require an HTML file linked to this script.
 * ============================================================
 */


/* ============================================================
 *  01 — DOM INTRO  ( reading & styling elements )
 *  ─────────────────────────────────────────────────────────
 *  document.querySelector(selector)
 *    → Finds the FIRST element matching a CSS selector.
 *    → Returns an HTMLElement object you can read/modify.
 *
 *  element.style.property = "value"
 *    → Sets INLINE CSS on that element directly from JS.
 *    → CSS property names use camelCase (e.g. textAlign, not text-align).
 *
 *  setInterval(callback, ms)
 *    → Repeatedly calls the callback every `ms` milliseconds.
 *    → Here used to make the background alternate every 500ms (0.5s).
 *    → The isYellow flag flips each time ( !isYellow ) to toggle state.
 * ============================================================ */
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
  isYellow = !isYellow;   // flip the flag each interval
}, 500);
*/


/* ============================================================
 *  02 — SELECTORS  ( 5 ways to find elements )
 *  ─────────────────────────────────────────────────────────
 *  Method                           Returns
 *  ────────────────────────────────────────────────────────
 *  getElementById("id")           → Single element (or null)
 *  getElementsByClassName("cls")  → HTMLCollection (live list)
 *  getElementsByTagName("tag")    → HTMLCollection (live list)
 *  querySelector("css selector")  → First matching element
 *  querySelectorAll("css selector")→ NodeList (all matches)
 *  ────────────────────────────────────────────────────────
 *  querySelector / querySelectorAll are the most flexible —
 *  they accept any CSS selector (#id, .class, tag, a[href], etc.)
 *
 *  querySelector  → returns ONE element (first match)
 *  querySelectorAll → returns ALL matches as a NodeList
 * ============================================================ */
/*
let selectID = document.getElementById("oakParagraph");
console.log(selectID);

let selectClass = document.getElementsByClassName("background");
console.log(selectClass);

let selectTag = document.getElementsByTagName("h1");
console.log(selectTag);

// querySelector equivalent of getElementById
let selectWithQueryID = document.querySelector("#oakParagraph");   // # for ID
console.log(selectWithQueryID);

// querySelector equivalent of getElementsByClassName (first match only)
let selectWithQueryClass = document.querySelector(".background");  // . for class
console.log(selectWithQueryClass);

// querySelectorAll — returns NodeList of ALL elements with class "background"
let selectWithQueryClassAll = document.querySelectorAll(".background");
console.log(selectWithQueryClassAll);
*/


/* ============================================================
 *  03 — DOM MANIPULATION  ( styling & classList )
 *  ─────────────────────────────────────────────────────────
 *  A) Inline style via element.style
 *       element.style.backgroundColor = "red";
 *       → Applies styles directly on the element (highest specificity)
 *       → Good for dynamic, one-off changes
 *
 *  B) classList — add/remove/toggle CSS classes
 *       element.classList.add("myClass")    → adds a class
 *       element.classList.remove("myClass") → removes a class
 *       element.classList.toggle("myClass") → adds if absent, removes if present
 *
 *  ✅ Prefer classList over inline styles when:
 *      • You have pre-defined CSS classes to apply
 *      • You want cleaner separation of JS and CSS
 * ============================================================ */
/*
let divManipulate = document.querySelector(".background");

// --- Inline style manipulation ---
divManipulate.style.height = "50px";
divManipulate.style.weight = "400px";           // ⚠️ "weight" is not a valid CSS property — use "width"
divManipulate.style.backgroundColor = "red";    // camelCase! (not background-color)
divManipulate.style.fontSize = "30px";
divManipulate.style.border = "5px solid black";

// --- classList manipulation ---
divManipulate.classList.add("addClass");        // adds class "addClass"
divManipulate.classList.remove("addClass");     // removes class "addClass"

divManipulate.classList.toggle("addClass");     // toggles — adds if missing, removes if present
*/


/* ============================================================
 *  04 — READING ELEMENT CONTENT  ( textContent vs innerHTML )
 *  ─────────────────────────────────────────────────────────
 *  textContent → returns the raw TEXT inside the element
 *                (strips all HTML tags, safe to read/write)
 *
 *  innerHTML   → returns the full HTML string inside the element
 *                (includes any nested tags like <strong>, <a>, etc.)
 *
 *  ⚠️  Never set innerHTML using untrusted user input —
 *      it can lead to XSS (Cross-Site Scripting) attacks.
 *      Use textContent when you only need plain text.
 * ============================================================ */
// let paragraph = document.querySelector("#oakParagraph");
// console.log(paragraph.textContent);   // → plain text only
// console.log(paragraph.innerHTML);     // → text + any inner HTML tags


/* ============================================================
 *  05 — ATTRIBUTE MANIPULATION  ( getAttribute / setAttribute )
 *  ─────────────────────────────────────────────────────────
 *  HTML attributes are things like href, src, id, class, alt.
 *
 *  getAttribute("attr")          → reads the current attribute value
 *  setAttribute("attr", "value") → sets/overwrites the attribute value
 *
 *  Example use cases:
 *    • Change where a link points     → setAttribute("href", "...")
 *    • Read an image source           → getAttribute("src")
 *    • Update an input placeholder    → setAttribute("placeholder", "...")
 * ============================================================ */
/*
let myLink = document.querySelector("a");

console.log(myLink.getAttribute("href"));           // read current href

myLink.setAttribute("href", "www.duckduckgo.com");  // change the link destination

*/