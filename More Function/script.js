"use strict";

/*
 * ============================================================
 *   JAVASCRIPT — ADVANCED FUNCTIONS  ( Study Notes )
 * ============================================================
 *   Topics Covered:
 *     01  Default Parameters
 *     02  Passing Arguments: Value vs Reference
 *     03  First-Class & Higher-Order Functions
 *     04  Functions Accepting Callback Functions
 *     05  Functions Returning Functions
 *     06  call() and apply() Methods
 *     07  bind() Method  + Partial Application
 *     08  IIFE  ( Immediately Invoked Function Expression )
 *     09  Closures
 *     10  Coding Challenges  ( #1 Poll App  &  #2 IIFE + Closure )
 *
 *   📌 HOW TO USE:
 *      Un-comment ONE section at a time to run it.
 * ============================================================
 */


/* ============================================================
 *  01 — DEFAULT PARAMETERS
 *  ─────────────────────────────────────────────────────────
 *  Default values are used when an argument is not passed
 *  or is explicitly set to `undefined`.
 *
 *  Syntax:  function fn(param = defaultValue) { }
 *
 *  Key rules:
 *    • Defaults can reference EARLIER parameters in the same list
 *        e.g. price = 199 * numPassengers  ← uses numPassengers
 *    • To skip a parameter and use its default, pass `undefined`
 *        e.g. createBooking("LH123", undefined, 458)
 *    • null does NOT trigger a default — only undefined does
 *
 *  ES5 equivalent (old pattern):
 *    numPassengers = numPassengers || 1;
 * ============================================================ */
/* 
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,                   // default: 1 passenger
  price = 199 * numPassengers,         // default: depends on numPassengers
) {
  // ES5 old way (now replaced by default params above):
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");                   // uses all defaults → 1 passenger, $199
createBooking("LH123", 2, 800);           // override all → 2 passengers, $800
createBooking("LH123", 4);               // price default uses numPassengers=4 → $796
createBooking("LH123", undefined, 458);  // skip numPassengers → default=1, price=$458
*/


/* ============================================================
 *  02 — PASSING ARGUMENTS: VALUE vs. REFERENCE
 *  ─────────────────────────────────────────────────────────
 *  Primitives (string, number, boolean) → passed by VALUE
 *    A COPY is made. Changing it inside the function does NOT
 *    affect the original variable outside.
 *
 *  Objects (arrays, objects) → passed by REFERENCE
 *    The function receives a reference to the SAME object in memory.
 *    Changing a property inside the function DOES affect the original.
 *
 *  ⚠️  This is a common source of bugs — be careful when
 *      modifying objects inside functions. Consider making a
 *      copy first if you don't want to mutate the original:
 *        const copy = { ...originalObject }
 *
 *  Key example below:
 *    flight (string) → copy → changing flightNum has NO effect outside
 *    mokles (object) → reference → changing passenger.name DOES affect mokles
 * ============================================================ */
/* 
const flight = "LH235";
const mokles = {
  name: "mokles",
  passport: 23238859842,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";                        // modifies the COPY only — flight unchanged outside
  passenger.name = "Mr. " + passenger.name;  // modifies the ORIGINAL object — mokles.name changes!

  if (passenger.passport === 23238859842) {
    alert("Checked In");
  } else {
    alert("Wrong Passport Number");
  }
};

// checkIn(flight, mokles);
console.log(flight);    // → "LH235"  (unchanged — primitive passed by value)
console.log(mokles);    // → name is now "Mr. mokles" (changed — object passed by reference)

// Danger: two functions modifying the same object
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);   // mutates mokles directly!
};

newPassport(mokles);
// checkIn(flight, mokles);   // would now fail — passport number has changed
*/


/* ============================================================
 *  03 — FIRST-CLASS & HIGHER-ORDER FUNCTIONS  ( Concept )
 *  ─────────────────────────────────────────────────────────
 *  First-Class Functions:
 *    In JS, functions are VALUES — they can be:
 *      • Stored in a variable     → const fn = function() {}
 *      • Passed as an argument    → doSomething(fn)
 *      • Returned from a function → return function() {}
 *      • Called from a variable   → fn()
 *    This is a language FEATURE — it just means functions are values.
 *
 *  Higher-Order Functions:
 *    A function that RECEIVES another function (callback) as an
 *    argument, OR returns a new function.
 *    Possible BECAUSE of first-class functions.
 *
 *    Examples: forEach, map, filter, addEventListener — they all
 *    accept a callback → they are higher-order functions.
 * ============================================================ */
/* First-Class and Higher-Class functions: explain... */


/* ============================================================
 *  04 — FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
 *  ─────────────────────────────────────────────────────────
 *  A callback is a function you pass as an argument.
 *  The higher-order function calls it at the right time.
 *
 *  Why use callbacks?
 *    • Separation of concerns — each function does ONE thing
 *    • Reusability — pass different callbacks for different behaviour
 *    • Abstraction — hide implementation details behind a clean API
 *
 *  Here: `transformed` is the higher-order function.
 *  `upperFirstWord` and `oneWord` are the callbacks.
 *  `transformed` doesn't care HOW the string changes — it just
 *  delegates that to whatever `fn` is passed in.
 * ============================================================ */
/* 
// Callback 1 — removes spaces and lowercases the whole string
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

// Callback 2 — uppercases only the FIRST word
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function — accepts a string AND a function (fn)
const transformed = function (str, fn) {
  console.log(`Original    : ${str}`);
  console.log(`Transformed : ${fn(str)}`);   // fn is the callback — called here
};

transformed("Function accepting callback function", upperFirstWord);
transformed("Function accepting callback function", oneWord);
*/


/* ============================================================
 *  05 — FUNCTIONS RETURNING FUNCTIONS
 *  ─────────────────────────────────────────────────────────
 *  A function can RETURN another function.
 *  The returned function "remembers" the outer variable via CLOSURE.
 *
 *  This pattern is used for:
 *    • Partial application / currying
 *    • Factory functions that generate specialised functions
 *    • Encapsulating state privately
 *
 *  Calling pattern:
 *    greetingFunc("Kire")  → returns the inner function
 *    greetingFunc("Kire")("Mokles!")  → calls both in one line
 *
 *  Arrow function version makes the return implicit and clean.
 * ============================================================ */
/* 
// Arrow function version — each => is a return
const greetingFunc = (greeting) =>
  (name) => console.log(`${greeting} ${name}`);

// Two-step call — store the returned function first
const nameFunc = greetingFunc("Kire");
nameFunc("Kuddus!");              // → "Kire Kuddus!"

// One-step call — chain both () immediately
greetingFunc("Kire")("Mokles!"); // → "Kire Mokles!"
*/


/* ============================================================
 *  06 — call() AND apply() METHODS
 *  ─────────────────────────────────────────────────────────
 *  Normally `this` inside a method refers to the object that
 *  OWNS the method. But what if you want to borrow a method
 *  and use it on a DIFFERENT object?
 *
 *  call(thisArg, arg1, arg2, ...)
 *    → Call the function immediately, setting `this` to thisArg.
 *      Pass arguments one by one after thisArg.
 *
 *  apply(thisArg, [arg1, arg2, ...])
 *    → Same as call, but arguments are passed as an ARRAY.
 *      ⚠️  Mostly replaced by call() + spread: fn.call(obj, ...arr)
 *
 *  Use case:
 *    lufthansa.book is defined on the lufthansa object.
 *    By extracting it into `book` and using .call(), we can
 *    reuse the same logic for euroWing and other airlines.
 * ============================================================ */
/* 
const lufthansa = {
  airline: "lufthansa",
  bookings: [],
  iataCode: "LH",
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight No. ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(245, "Mokles");
console.log(lufthansa);

const euroWing = {
  airline: "Eurowing",
  iataCode: "EW",
  bookings: [],
};

// Extract the method into a standalone function (this is now undefined in strict mode)
const book = lufthansa.book;

// call() — manually set `this` to euroWing, pass args normally
book.call(euroWing, 231, "Kuddus");
console.log(euroWing);

book.call(lufthansa, 387, "Mofiz");
console.log(lufthansa);

// apply() — same as call() but arguments passed as an array
const flightData = [420, "George Micheal"];
book.apply(euroWing, flightData);
console.log(euroWing);

// Modern alternative to apply() — call() + spread operator
book.call(lufthansa, ...flightData);
*/


/* ============================================================
 *  07 — bind() METHOD  +  PARTIAL APPLICATION
 *  ─────────────────────────────────────────────────────────
 *  bind(thisArg, arg1?, arg2?, ...)
 *    → Does NOT call the function immediately.
 *    → Returns a NEW function with `this` permanently set to thisArg.
 *    → Optionally pre-fills (partially applies) arguments.
 *
 *  call() / apply() → call immediately
 *  bind()           → return a new pre-configured function
 *
 *  Use cases:
 *  A) Fixing `this` in event listeners
 *       When a method is used as an event listener, `this` points
 *       to the DOM element — bind() fixes it to the intended object.
 *
 *  B) Partial Application  ( pre-setting arguments )
 *       Pass null as thisArg (don't care about `this`), then
 *       pre-fill one or more arguments to create a specialised fn.
 *       e.g. addVat = addTax.bind(null, 0.23) — rate is locked in
 * ============================================================ */
/* 
const lufthansa = {
  airline: "lufthansa",
  bookings: [],
  iataCode: "LH",
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight No. ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const euroWing = { airline: "Eurowing",     iataCode: "EW", bookings: [] };
const swiss    = { airline: "Swiss Airlines",iataCode: "LX", bookings: [] };

const book = lufthansa.book;

// A) bind — create dedicated booking functions per airline
const bookLH = book.bind(lufthansa);   // `this` permanently = lufthansa
const bookEW = book.bind(euroWing);    // `this` permanently = euroWing
const bookLX = book.bind(swiss);       // `this` permanently = swiss

bookLX(699, "Butt Head");
console.log(swiss);

// Partial application — pre-fill flightNum (66) as well
const bookEW66 = book.bind(euroWing, 66);   // `this`=euroWing, flightNum=66
bookEW66("Long Bottom");                    // only name needed now

// B) Fixing `this` in event listeners
//    Without bind → `this` inside buyPlane would be the button element
//    With bind    → `this` is permanently locked to lufthansa
lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // ✅ `this` = lufthansa

// C) Partial Application (null for `this` — we don't need it here)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));   // → 220

// Lock rate=0.23 permanently → now only needs `value`
const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));   // → 123
console.log(addVat(200));   // → 246

// Same result using a function that returns a function (closure-based)
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;   // `rate` captured via closure
  };
};
const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));   // → 123
*/


/* ============================================================
 *  08 — IIFE  ( Immediately Invoked Function Expression )
 *  ─────────────────────────────────────────────────────────
 *  A function defined and called ONCE — immediately.
 *  After it runs, it's gone. Cannot be called again.
 *
 *  Why use it?
 *    • Create a private scope — variables inside don't leak out
 *    • Encapsulate one-time setup / init code
 *    • Avoid polluting the global namespace
 *
 *  Scope rules demonstrated below:
 *    const / let inside { } block  → block-scoped (private) ✅
 *    var inside { } block          → function-scoped, leaks out ⚠️
 *    const / let inside IIFE       → completely private ✅
 *
 *  Modern alternative to IIFE:
 *    A plain { } block also creates a private scope for const/let.
 *    IIFE is still useful when you need function-level scope or
 *    an async IIFE, etc.
 * ============================================================ */
/* 
(function () {
  console.log("This will never run again");
  const isPrivate = 69;   // trapped inside — not accessible outside
})();
console.log(isPrivate);   // ❌ ReferenceError — isPrivate is not defined

// Block scope alternative (no function needed for const/let)
{
  const isPrivate = 40;   // block-scoped ✅ — not accessible outside
  var notPrivate = 30;    // ⚠️ var ignores block scope — leaks out!
}

console.log(isPrivate);   // ❌ ReferenceError
console.log(notPrivate);  // → 30  (leaked because of var)
*/


/* ============================================================
 *  09 — CLOSURES
 *  ─────────────────────────────────────────────────────────
 *  A closure is when an inner function REMEMBERS the variables
 *  from its outer function's scope — even after the outer
 *  function has already returned and finished executing.
 *
 *  JS achieves this by keeping the outer variable environment
 *  alive in memory as long as the inner function exists.
 *
 *  Key properties:
 *    • A closure has access to variables of its outer scope
 *    • It remembers the CURRENT value (not a snapshot)
 *    • Each function call creates its own separate closure scope
 *
 *  Practical uses:
 *    • Data privacy / encapsulation (like private variables)
 *    • Stateful functions (functions that remember state)
 *    • Callbacks and event handlers referencing outer variables
 *    • Partial application and currying
 * ============================================================ */
/* 
// Classic closure example — passengerCount lives on after secureBooking() returns
const secureBooking = () => {
  let passengerCount = 0;       // private — cannot be accessed from outside
  return () => {
    passengerCount++;            // inner function closes over passengerCount
    console.log(`${passengerCount} Passengers`);
  };
};

const booking = secureBooking();   // secureBooking() runs and RETURNS the inner fn
booking();   // → 1 Passengers
booking();   // → 2 Passengers
booking();   // → 3 Passengers   (passengerCount persists between calls!)

let f;

// Example 1 — closure scope can be RE-ASSIGNED
// f closes over `a` from g's scope
const g = () => {
  const a = 23;
  f = () => console.log(a * 2);   // f now closes over a=23
};

// f is re-assigned to close over `b` from h's scope
const h = () => {
  const b = 777;
  f = () => console.log(b * 2);   // f now closes over b=777 (replaces a)
};

g();
f();   // → 46  (a * 2)

// Re-assigning f — closure scope changes to h's scope
h();
f();   // → 1554  (b * 2)  — f now remembers b, not a

// Example 2 — closure inside setTimeout (async callback)
// The callback inside setTimeout is a closure over passengerGrp and count.
// Even though boardPassengers() finishes before the timer fires,
// the callback still accesses passengerGrp via closure ✅
const boardPassengers = (count, wait) => {
  const passengerGrp = Math.trunc(count / 3);
  setTimeout(() => {
    console.log(`We are now boarding all ${count} passengers`);
    console.log(`There are 3 groups, each with ${passengerGrp} passengers`);
  }, wait * 1000);   // fires after `wait` seconds
  console.log(`We will start boarding in ${wait} seconds`);   // runs immediately
};

boardPassengers(20, 5);
*/


/* ============================================================
 *  CODING CHALLENGE #1 — Poll App
 *  ─────────────────────────────────────────────────────────
 *  Practice: bind(), short-circuiting, default params, `this`
 *
 *  Tasks:
 *  1. registerNewAnswer() — prompt user, validate, update answers[]
 *  2. Attach it to the poll button click via addEventListener + bind()
 *  3. displayPoll(type) — show results as array OR formatted string
 *  4. Call displayPoll() at the end of registerNewAnswer()
 *
 *  BONUS: Call displayPoll() with a fake `this` using .call()
 *  on external arrays — without adding data to the poll object.
 *
 *  Key decisions:
 *    new Array(4).fill(0) → creates [0, 0, 0, 0] — one counter per option
 *    typeof answer === "number" && answer < length && answers[answer]++
 *      → validates AND increments in one short-circuit chain
 *    bind(poll) on the event listener → ensures `this` = poll object,
 *      not the button element that triggered the click
 * ============================================================ */
/* 
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),   // → [0, 0, 0, 0]

  // 1. Prompt user and register their answer
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number) `,
      ),
    );

    // Validate: must be a number AND within valid range → then increment
    // Short-circuit: stops at first falsy — no need for if/else
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayPoll();           // show as array (default)
    this.displayPoll("string");   // show as formatted string
  },

  // 3. Display results — defaults to "array" if no type is given
  displayPoll(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are: ${this.answers.join(", ")}`);
    }
  },
};

// 2. Bind poll as `this` — without bind, `this` would be the button element
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
*/


/* ============================================================
 *  CODING CHALLENGE #2 — IIFE + Closure
 *  ─────────────────────────────────────────────────────────
 *  Practice: IIFE, closures, event listeners
 *
 *  Task:
 *  Inside the IIFE, select the <h1> and attach a body click
 *  listener that turns it blue — WITHOUT re-selecting <h1>.
 *
 *  Why it works — CLOSURE explanation:
 *    The IIFE runs once and finishes. But the `header` variable
 *    it created is captured (closed over) by the event listener callback.
 *    Every time the body is clicked, the callback still has access
 *    to `header` via its closure — even though the IIFE is long gone.
 *
 *    This is the core power of closures: inner functions remember
 *    the environment in which they were created, not where they run.
 * ============================================================ */
/* 
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";   // set initial color immediately

  // This callback closes over `header` — still accessible on every click
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";   // ✅ works via closure — no re-selection needed
  });
})();
*/