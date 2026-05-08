"use strict";

/*
 * ============================================================
 *   JAVASCRIPT — ES6+ MODERN FEATURES  ( Study Notes )
 * ============================================================
 *   Topics Covered:
 *     01  Enhanced Object Literals
 *     02  Array Destructuring
 *     03  Object Destructuring
 *     04  Spread Operator  ( ... )
 *     05  Rest Operator    ( ... )
 *     06  Short Circuiting  ( || and && )
 *     07  Nullish Coalescing Operator  ( ?? )
 *     08  Logical Assignment Operators ( ||=  &&=  ??= )
 *     09  for...of Loop
 *     10  Optional Chaining  ( ?. )
 *     11  Looping Objects  ( Object.keys / values / entries )
 *     12  Sets
 *     13  Maps
 *     14  Strings  ( methods )
 *     15  Coding Challenges  ( #1 – #4 )
 *
 *   📌 HOW TO USE:
 *      Un-comment ONE section at a time to run it.
 *      The restaurant object (used throughout) is defined
 *      near the top — keep it active when needed.
 * ============================================================
 */


/* ============================================================
 *  01 — ENHANCED OBJECT LITERALS  ( ES6 shorthand syntax )
 *  ─────────────────────────────────────────────────────────
 *  ES6 introduced 3 improvements to object literal syntax:
 *
 *  A) Computed property names  → [expression] as a key
 *       Before: obj[weekdays[4]] = { ... }  (outside the object)
 *       After:  { [weekdays[4]]: { ... } }  (inside the object)
 *
 *  B) Property shorthand  → when variable name === key name
 *       Before: { openingHours: openingHours }
 *       After:  { openingHours }   (JS fills in the value automatically)
 *
 *  C) Method shorthand  → shorter function syntax inside objects
 *       Before: { order: function(a, b) { ... } }
 *       After:  { order(a, b) { ... } }
 * ============================================================ */

/* //before es6 object literal
var weekdays = ["sun", "mon", "tue ", "wed", "thu", "fri ", "sat"];

var openingHours = {};

openingHours[weekdays[4]] = {
  open: 12,
  close: 12,
};

openingHours[weekdays[5]] = {
  open: 11,
  close: 23,
};

openingHours[weekdays[6]] = {
  open: 0,
  close: 24,
}; */

//after es6 object literal

/* const weekdays = ["sun", "mon", "tue ", "wed", "thu", "fri ", "sat"];

const openingHours = {
  [weekdays[4]]: {          // A) Computed property name using bracket []
    open: 12,
    close: 12,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0,
    close: 24,
  },
};

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzaria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // openingHours: openingHours,   ← Before ES6 (property: variable)
  openingHours,                    // B) ES6 shorthand (line 27) — key name matches variable name

  // order: function (starterIndex, mainIndex) { ... },   ← Before ES6
  order(starterIndex, mainIndex) {                         // C) ES6 method shorthand
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = "11:00" }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {    // rest parameter inside method
    console.log(
      `Your ordered pizza with: ${mainIngredient},${otherIngredients}.`,
    );
  },
}; */


/* ============================================================
 *  02 — ARRAY DESTRUCTURING
 *  ─────────────────────────────────────────────────────────
 *  Destructuring = unpacking values from arrays/objects
 *  into individual variables in a single clean line.
 *
 *  Syntax:  const [a, b, c] = array;
 *
 *  Key tricks:
 *    Skip elements  → [first, , second]  (leave a gap)
 *    Swap variables → [a, b] = [b, a]    (no temp variable!)
 *    Nested arrays  → [a, b, [c, d]]     (mirror the structure)
 *    Default values → [a = 1, b = 1]     (fallback if undefined)
 * ============================================================ */
/* 
const arr = [2, 4, 5];

const [x, y, z] = arr;         // basic destructuring
console.log(x, y, z);          // → 2 4 5

let [first, , second] = resturant.categories;   // skip index 1 with empty comma
console.log(first, second);

// Swap without a temp variable — clean ES6 trick
[first, second] = [second, first];
console.log(first, second);

console.log(resturant.order(1, 2));

// Destructure the return value of a function directly
const [starterOr, mainOr] = resturant.order(1, 2);
console.log(starterOr, mainOr);

// Nested destructuring — mirror the nested array structure
const nest = [1, 4, [5, 2]];
const [a, b, [c, d]] = nest;
console.log(a, b, c, d);       // → 1 4 5 2

// Default values — used when the array has fewer elements than expected
const deff = [6, 9];
const [i, o, p] = deff;         // p → undefined (no 3rd element)
console.log(i, o, p);

const deff2 = [6, 9];
const [q = 1, w = 1, e = 1] = deff2;   // e falls back to default: 1
console.log(q, w, e);
*/


/* ============================================================
 *  03 — OBJECT DESTRUCTURING
 *  ─────────────────────────────────────────────────────────
 *  Unlike arrays, order doesn't matter — match by KEY NAME.
 *
 *  Syntax:  const { key1, key2 } = object;
 *
 *  Key tricks:
 *    Rename variable  → { key: newName }
 *    Default value    → { key = defaultVal }
 *    Mutate existing  → wrap in ( ) → ({ a, b } = obj)
 *    Nested objects   → { outer: { inner } }
 *
 *  Very useful for function parameters — pass one object
 *  instead of many arguments, and destructure inside the function.
 * ============================================================ */
/* 
// Destructuring directly in function call (no need to match order)
resturant.orderDelivery({
  time: "10:30",
  address: "Jupiter",
  mainIndex: 2,
  starterIndex: 2,
});

// Uses default values for starterIndex (1) and time ("11:00")
resturant.orderDelivery({
  address: "Mars",
  mainIndex: 1,
});

const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

// Rename variables while destructuring
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

// Default value — `menu` doesn't exist on resturant, so it falls back to []
const { menu = [], starterMenu: starters = [] } = resturant;
console.log(menu, starters);

// Mutating existing variables with destructuring
// ⚠️  Must wrap in ( ) — otherwise JS reads { as a code block
let a = 69;
let b = 420;
const obj = { a: 24, b: 20, c: 9 };
({ a, b } = obj);
console.log(a, b);   // → 24 20  (overwritten)

// Nested object destructuring
const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);
*/


/* ============================================================
 *  04 — SPREAD OPERATOR  ( ...arr )
 *  ─────────────────────────────────────────────────────────
 *  The spread operator EXPANDS an iterable into individual items.
 *  It is written on the RIGHT side of = (or inside a call/literal).
 *
 *  Works with: arrays, strings, maps, sets — NOT plain objects
 *              (but object spread was added in ES2018 ✅)
 *
 *  Common uses:
 *    Build new arrays       → [...arr, newItem]
 *    Copy an array          → [...arr]              (shallow copy)
 *    Merge arrays           → [...arr1, ...arr2]
 *    Pass array as arguments→ fn(...arr)
 *    Copy/extend objects    → { ...obj, newKey: val }
 * ============================================================ */
/* 
const arr = [4, 5, 6];
const badArr = [1, 2, 3, arr[0], arr[1], arr[2]];   // tedious old way
console.log(badArr);

const goodArr = [1, 2, 3, ...arr];                   // clean spread
console.log(goodArr);
console.log(...goodArr);   // spreads into individual arguments

const newMenu = [...resturant.mainMenu, "Gnocci"];
console.log(newMenu);

// Shallow copy of array (original is not affected)
const mainMenuCopy = [...resturant.mainMenu];

// Merge two arrays into one
const menu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(menu);

// Spread on a string — splits into individual characters
const str = "Mokles";
const latter = [...str];
console.log(latter);     // → ['M', 'o', 'k', 'l', 'e', 's']
console.log(...str);     // → M o k l e s

const ingredients = [
  // prompt("Let's Make Pasta: Ingredient 1"),
  // prompt("Ingredient 2"),
  // prompt("Ingredient 3"),
];

// Old way — manual indexing
resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// Clean way — spread array as individual arguments
resturant.orderPasta(...ingredients);

// Spread on objects (ES2018) — copy + add/override properties
const newRestaurant = { foundedIn: 1998, ...resturant, founder: "Guiseppe" };
console.log(newRestaurant);

// Shallow copy of an object — changes to copy don't affect original
const newRestaurantCopy = { ...newRestaurant };
newRestaurantCopy.name = "Risotorante Roma";
console.log(newRestaurant.name);       // → "Classico Italiano" (unchanged)
console.log(newRestaurantCopy.name);   // → "Risotorante Roma"
*/


/* ============================================================
 *  05 — REST OPERATOR  ( ...rest )
 *  ─────────────────────────────────────────────────────────
 *  The REST operator looks identical to spread ( ... ) but does
 *  the OPPOSITE — it COLLECTS remaining items into an array.
 *
 *  Simple rule to tell them apart:
 *    RIGHT side of =  →  SPREAD  (expands)
 *    LEFT  side of =  →  REST    (collects)
 *
 *  Uses:
 *    1) Destructuring → collect leftover elements into an array
 *    2) Functions     → accept any number of arguments ( variadic )
 *
 *  ⚠️  Rest must always be the LAST element.
 *      Only ONE rest parameter is allowed.
 * ============================================================ */
/* 
// 1) In Destructuring
const arr = [1, 2, ...[3, 4]];   // RIGHT side → SPREAD (expands [3,4])

const [a, b, ...others] = [1, 2, 3, 4, 5];   // LEFT side → REST (collects 3,4,5)
console.log(a, b, others);        // → 1  2  [3, 4, 5]

const [pizza, , risotto, ...otherFoods] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// Rest in object destructuring — collect all keys except `sat`
const { sat, ...weekdays } = resturant.openingHours;
console.log(weekdays);   // → { thu: {...}, fri: {...} }

// 2) In Functions — variadic function (accepts any number of args)
const add = function (...numbers) {   // all arguments collected into `numbers` array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(1, 2, 3);
add(4, 5, 6, 7, 8, 9);
add(10, 11, 12, 13, 14, 15, 16, 17, 18);

resturant.orderPizza("Chicken", "Onion", "Olives", "Spinach");
resturant.orderPizza("Chicken");
*/


/* ============================================================
 *  06 — SHORT CIRCUITING  ( || and && )
 *  ─────────────────────────────────────────────────────────
 *  JS logical operators don't just return true/false —
 *  they return one of the ACTUAL operand values.
 *
 *  || (OR)  → returns the FIRST TRUTHY value it finds,
 *             or the LAST value if all are falsy.
 *             Short-circuits (stops) as soon as a truthy is found.
 *             Use case: provide a fallback/default value.
 *
 *  && (AND) → returns the FIRST FALSY value it finds,
 *             or the LAST value if all are truthy.
 *             Short-circuits as soon as a falsy is found.
 *             Use case: guard — "only run if X exists".
 *
 *  Falsy values: 0, "", null, undefined, NaN, false
 *
 *  ⚠️  || has a flaw: 0 and "" are falsy, so they get skipped
 *      even when they are valid values. Use ?? instead (see 07).
 * ============================================================ */
/* 
console.log(3 || "Jonas");            // → 3         (first truthy)
console.log("" || "Jonas");           // → "Jonas"   ("" is falsy)
console.log(true || 0);               // → true
console.log(undefined || null);       // → null      (both falsy, returns last)
console.log(undefined || 0 || "" || "Hello" || 23 || null);  // → "Hello"

// || for default value (ternary equivalent)
// resturant.numGuests = 23;
const guest1 = resturant.numGuests ? resturant.numGuests : 10;   // old way
console.log(guest1);

const guest2 = resturant.numGuests || 10;   // clean short-circuit default
console.log(guest2);

// && operator
console.log(0 && "Jonas");            // → 0         (first falsy, stops)
console.log(1 && "Jonas");            // → "Jonas"   (all truthy, returns last)
console.log(true && null);            // → null
console.log("Hello" && 23 && null && true);   // → null (stops at first falsy)

// Practical use: run a method only if it exists
if (resturant.orderPizza) {
  resturant.orderPizza("Chicken", "Cheese");
}
// Same thing with && short-circuit (cleaner one-liner)
resturant.orderPizza && resturant.orderPizza("Chicken", "Cheese");
*/


/* ============================================================
 *  07 — NULLISH COALESCING OPERATOR  ( ?? )
 *  ─────────────────────────────────────────────────────────
 *  Introduced in ES2020 to fix the || flaw with 0 and "".
 *
 *  ?? returns the RIGHT side only if the LEFT side is:
 *    null  OR  undefined   (these are called "nullish" values)
 *
 *  Unlike ||, it does NOT treat 0 or "" as missing values.
 *
 *  Rule of thumb:
 *    Use ||  when 0 / "" should also trigger the fallback
 *    Use ??  when only null / undefined should trigger it
 * ============================================================ */
/* 
resturant.numGuests = 0;

const guest = resturant.numGuests || 10;       // → 10  ❌ Wrong! (0 is falsy)
console.log(guest);

const guestCorrect = resturant.numGuests ?? 10;  // → 0  ✅ Correct! (0 is not nullish)
console.log(guestCorrect);
*/


/* ============================================================
 *  08 — LOGICAL ASSIGNMENT OPERATORS  ( ||=  &&=  ??= )
 *  ─────────────────────────────────────────────────────────
 *  ES2021 shorthand — combine a logical operator with assignment.
 *  Think of them like += or -= but for logic.
 *
 *  a ||= b   →  a = a || b   (assign b if a is falsy)
 *  a &&= b   →  a = a && b   (assign b if a is truthy)
 *  a ??= b   →  a = a ?? b   (assign b if a is null/undefined)
 *
 *  Use case: set default values on objects cleanly.
 * ============================================================ */
/* 
const rest1 = {
  restName: "Capri",
  numGuest: 20,
};
const rest2 = {
  restName: "La Piazza",
  owner: "Giovanni Rossi",
};

// ||= : assign 10 only if numGuest is falsy (missing, 0, etc.)
rest1.numGuest ||= 10;    // rest1 already has 20 → stays 20
rest2.numGuest ||= 10;    // rest2 has no numGuest → becomes 10

// &&= : assign "<ANONYMOUS>" only if owner already exists (truthy)
rest1.owner &&= "<ANONYMOUS>";    // rest1 has no owner → stays undefined
rest2.owner &&= "<ANONYMOUS>";    // rest2 has owner → replaced

// ??= : assign only if property is null or undefined
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest1);
console.log(rest2);
*/


/* ============================================================
 *  09 — for...of LOOP  ( iterate over iterables cleanly )
 *  ─────────────────────────────────────────────────────────
 *  Syntax:  for (const item of iterable) { ... }
 *
 *  Works with: arrays, strings, sets, maps, NodeLists.
 *  Cleaner than a regular for loop — no index management.
 *
 *  To get both index AND value, use .entries():
 *    for (const [i, el] of arr.entries()) { ... }
 *    → Returns [index, element] pairs, destructured inline.
 * ============================================================ */
/* 
const menu = [...resturant.mainMenu, ...resturant.starterMenu];

for (const item of menu) console.log(item);   // just the value

for (const item of menu.entries()) {
  console.log(item);                          // → [index, value] array
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);  // manual index access
}

// Cleaner: destructure [i, el] inline
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/


/* ============================================================
 *  10 — OPTIONAL CHAINING  ( ?. )
 *  ─────────────────────────────────────────────────────────
 *  Introduced in ES2020 to safely access deeply nested properties.
 *
 *  obj?.prop  → returns undefined if obj is null/undefined,
 *               instead of throwing a TypeError.
 *
 *  You can chain multiple ?.  to safely drill into nested structures.
 *
 *  Works on:
 *    Properties → obj?.prop
 *    Methods    → obj.method?.(args)   ← note: ?. before ()
 *    Arrays     → arr?.[index]
 *
 *  Pair with ?? for a clean fallback:
 *    obj?.prop ?? "default"
 * ============================================================ */
/* 
// Without optional chaining — verbose guard check
if (resturant.openingHours && resturant.openingHours.mon) {
  console.log(resturant.openingHours.mon.open);
}

// With optional chaining — reads as: "if mon exists, get open"
console.log(resturant.openingHours.mon?.open);    // → undefined (no crash)
console.log(resturant.openingHours?.mon?.open);   // chained ?.

// Real-world use — loop + optional chaining + ?? fallback
for (const day of weekdays) {
  const open = resturant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

// Optional chaining on methods — check method exists before calling
console.log(resturant.order?.(0, 1) ?? "Method does not exist");
console.log(resturant.orderRissoto?.(0, 1) ?? "Method does not exist");  // doesn't exist

// Optional chaining on arrays
const user = [{ name: "Mokles", email: "example@mail.com" }];

console.log(user[0]?.name ?? "User does not exist");   // → "Mokles"
console.log(user[1]?.name ?? "User does not exist");   // → "User does not exist"

// Old way — much more verbose
if (user.length > 0) console.log(user[0].name);
else console.log("User does not exist");
*/


/* ============================================================
 *  11 — LOOPING OBJECTS  ( Object.keys / values / entries )
 *  ─────────────────────────────────────────────────────────
 *  Plain objects are NOT iterable — you can't use for...of directly.
 *  Use these 3 built-in methods to convert them first:
 *
 *  Object.keys(obj)    → array of property NAMES  (keys)
 *  Object.values(obj)  → array of property VALUES
 *  Object.entries(obj) → array of [key, value] pairs
 *
 *  Then loop with for...of on the returned array.
 * ============================================================ */
/* 
// Object.keys — get all property names (days)
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Build a string listing open days using Object.keys
const openDays = Object.keys(openingHours);
let openStr = `We are open on ${openDays.length} days: `;
for (const day of openDays) {
  openStr += `${day}, `;
}
console.log(openStr);

// Object.values — get all property values
const values = Object.values(openingHours);
console.log(values);

// Object.entries — get [key, value] pairs and destructure inline
for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${keys} We open at ${open} and close at ${close}`);
}
*/


/* ============================================================
 *  12 — SETS
 *  ─────────────────────────────────────────────────────────
 *  A Set is a collection of UNIQUE values (no duplicates allowed).
 *  Order is preserved. Sets are iterable.
 *
 *  new Set(iterable)       → create a set from any iterable
 *  set.has(value)          → true/false — check if value exists
 *  set.add(value)          → add a value (ignored if duplicate)
 *  set.delete(value)       → remove a value
 *  set.clear()             → remove all values
 *  set.size                → number of unique items
 *
 *  Main use case: remove duplicates from an array
 *    const unique = [...new Set(array)];
 *
 *  ES2025 Set methods (if supported):
 *    intersection()        → items in BOTH sets
 *    union()               → all items from BOTH sets (no dupes)
 *    difference()          → items in A but NOT in B
 *    symmetricDifference() → items in EITHER but NOT both
 *    isDisjointFrom()      → true if sets share NO elements
 * ============================================================ */
/* 
const orderSet = new Set([
  "Pizza", "Pasta", "Risotto", "Pizza", "Pizza", "Risotto",   // duplicates removed
]);

console.log(orderSet);                // → Set {"Pizza", "Pasta", "Risotto"}
console.log(new Set("Mokles"));       // → Set of unique characters
console.log(new Set("Mokles").size);
console.log(orderSet.has("Pizza"));   // → true
console.log(orderSet.has("Bread"));   // → false
orderSet.add("Gerlic Bread");
orderSet.add("Gerlic Bread");         // ignored — already exists
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Main practical use — remove duplicates from array
const staff = ["Waiter", "Manager", "Chef", "Waiter", "Chef"];
const staffUnique = [...new Set(staff)];   // convert Set back to array with spread
console.log(staffUnique);

const italianFoods = new Set([
  "pasta", "gnocchi", "tomatoes", "olive oil", "garlic", "basil",
]);

const mexicanFoods = new Set([
  "tortillas", "beans", "rice", "tomatoes", "avocado", "garlic",
]);

// ES2025 Set operations
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log("Intersection: ", commonFoods);   // → items in both
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("Union:", italianMexicanFusion);  // → all unique items combined

console.log([...new Set([...italianFoods, ...mexicanFoods])]);  // manual union

const uniqueItalianFood = italianFoods.difference(mexicanFoods);
console.log("Unique Food:", uniqueItalianFood);   // → in Italian but not Mexican

const uniqueItalianAndMexicanFood = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFood);   // → in either but not both

console.log(italianFoods.isDisjointFrom(mexicanFoods));   // → false (they share items)
*/


/* ============================================================
 *  13 — MAPS
 *  ─────────────────────────────────────────────────────────
 *  A Map is a key-value store like an object, BUT:
 *    • Keys can be ANY type (objects, arrays, booleans, numbers)
 *    • Order of insertion is maintained
 *    • Better performance for frequent additions/removals
 *
 *  new Map()              → create empty map
 *  map.set(key, value)    → add/update entry (returns the map → chainable)
 *  map.get(key)           → retrieve value
 *  map.has(key)           → true/false
 *  map.delete(key)        → remove entry
 *  map.size               → number of entries
 *
 *  Create from array of pairs:  new Map([[k1,v1],[k2,v2]])
 *  Create from object:          new Map(Object.entries(obj))
 *  Convert back to array:       [...map]
 *
 *  Map vs Object:
 *    Use Map when keys are not strings, or key order matters.
 *    Use Object for structured data with known string keys.
 * ============================================================ */
/* 
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));   // set() returns the map → chainable

// Method chaining — each .set() returns the map
rest
  .set("categories", ["Italian", "Pizzaria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

// Using boolean keys — dynamic lookup based on condition
const time = 12;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));  // → "We are open"

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.size);

// ⚠️  Array/object as key — must use the SAME reference
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));   // ✅ works — same reference
// rest.get([1, 2]) would fail — different object reference

// DOM element as key
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

// Map initialized from array of [key, value] pairs
const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  [4, "Programming is Shit!!!!"],
  ["correct", 4],
  [true, "Correct Answer!"],
  [false, "Try Again!"],
]);
console.log(question);

// Convert object → Map using Object.entries()
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iterating a Map with for...of + destructuring
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}

// const answer = Number(prompt("Your Answer : 1, 2, 3 or 4 ?"));
// console.log(question.get(answer === question.get("correct")));

// Convert Map → array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/


/* ============================================================
 *  14 — STRING METHODS
 *  ─────────────────────────────────────────────────────────
 *  Strings are primitives but JS auto-boxes them to String objects
 *  so you can call methods on them. Strings are IMMUTABLE —
 *  all methods return a NEW string, never modify the original.
 *
 *  Key methods:
 *    [index]               → character at position
 *    .length               → number of characters
 *    .indexOf(str)         → first index of match (-1 if not found)
 *    .lastIndexOf(str)     → last index of match
 *    .slice(start, end)    → extract substring (end is exclusive)
 *                            negative index counts from end
 *    .toLowerCase()        → all lowercase
 *    .toUpperCase()        → all uppercase
 *    .trim()               → remove whitespace from both ends
 *    .replace(a, b)        → replace FIRST occurrence
 *    .replaceAll(a, b)     → replace ALL occurrences
 *    .includes(str)        → true/false — does string contain str?
 *    .startsWith(str)      → true/false
 *    .endsWith(str)        → true/false
 *    .split(separator)     → split into array
 *    .join(separator)      → (array method) join array into string
 *    .padStart(len, char)  → pad from start to reach length
 *    .padEnd(len, char)    → pad from end to reach length
 *    .repeat(n)            → repeat string n times
 * ============================================================ */
/* 
const airplane = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);   // → "A"
console.log(plane[1]);   // → "3"
console.log(plane[2]);   // → "2"

console.log(airplane.length);
console.log(plane.length);

console.log(airplane.indexOf("r"));                      // → 6  (first r)
console.log(airplane.indexOf("Portugal"));               // → 8
console.log(airplane.lastIndexOf("r"));                  // → 10 (last r)
console.log(airplane.slice(4));                          // → "Air Portugal"
console.log(airplane.slice(4, 7));                       // → "Air"
console.log(airplane.slice(0, airplane.indexOf(" ")));   // → "TAP" (up to first space)
console.log(airplane.slice(airplane.lastIndexOf(" ") + 1)); // → "Portugal" (after last space)

// Practical: check middle seat (slice(-1) gets the last character)
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);   // last character = column letter
  if (s === "B" || s === "E") console.log("You Got Middle Seat");
  else console.log("You Got Lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// Fix casing — capitalize first letter
const passenger = "mOklEs";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);   // → "Mokles"

// Sanitize email — lowercase + remove surrounding whitespace
const email = "  hello@MokLes.com   ";
const sanitizeEmail = email.toLocaleLowerCase().trim();   // chained methods
console.log(sanitizeEmail);

// replace / replaceAll — fix formatting
const priceGB = "200,97@";
const priceUS = priceGB.replace("@", "$").replace(",", ".");
console.log(priceUS);   // → "200.97$"

const announcement = "All passengers come to boarding door 23, Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));   // replaces all, not just first

// Boolean string checks
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));          // → true
console.log(plane2.startsWith("Air"));         // → true

if (plane2.startsWith("Airbus") && plane2.endsWith("neo"))
  console.log("Part of new Airbus Family");

// Practical: security baggage check (always lowercase before checking)
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();   // normalize to avoid case mismatches
  const notAllowed = ["Pocket Knife", "Gun", "Bomb", "Knife"];
  for (const notAllowedCheck of notAllowed) {
    if (baggage.includes(notAllowedCheck.toLowerCase())) {
      console.log("You are not allowed to board the plane!");
      return;   // early exit as soon as one match is found
    }
  }
  console.log("Board the plane");
};
checkBaggage("I have a laptop and knife");

// split — turn string into array
console.log("a very nice string".split(" "));   // → ["a", "very", "nice", "string"]

// Destructure split result directly
const [firstName, lastName] = "Mokles Khan".split(" ");
console.log(firstName);
console.log(lastName);

// join — turn array back into string with separator
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);   // → "Mr. Mokles KHAN"

// Capitalize each word in a name
const correctName = function (name) {
  const splitName = name.split(" ");
  const nameUpper = [];
  for (const word of splitName) {
    nameUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};
correctName("mokles khan");
correctName("kuddus boyati");

// padStart / padEnd — pad to a fixed width (great for formatting/alignment)
const msg = "Mokles";
console.log(msg.padStart(10, "*").padEnd(20, "*"));  // → "****Mokles**********"

// Practical: mask credit card number (show only last 4 digits)
const maskCard = function (num) {
  const toStr = String(num);
  const trimNum = toStr.slice(-4);             // last 4 characters
  return trimNum.padStart(num.length, "*");    // pad the rest with *
};
console.log(maskCard("34242223355465456"));
console.log(maskCard("432979021803908734"));

// repeat — repeat a string N times
const massage = "Bad Weather ";
console.log(massage.repeat(20));

const planeInLine = function (plane) {
  console.log(`There are ${plane} planes waiting in line ${"!".repeat(plane)}`);
};
planeInLine(2);
planeInLine(4);
planeInLine(6);
*/


/* ============================================================
 *  SHARED TEST DATA — Game Object  ( Challenges #1, #2, #3 )
 * ============================================================ */
/* 
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer","Pavard","Martinez","Alaba","Davies",
      "Kimmich","Goretzka","Coman","Muller","Gnarby","Lewandowski",
    ],
    [
      "Burki","Schulz","Hummels","Akanji","Hakimi",
      "Weigl","Witsel","Hazard","Brandt","Sancho","Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/


/* ============================================================
 *  CODING CHALLENGE #1
 *  ─────────────────────────────────────────────────────────
 *  Practice: Destructuring, Spread, Rest, Short-circuiting
 *
 *  Tasks:
 *  1. Create player arrays from game.players (array destructure)
 *  2. Separate goalkeeper from field players (rest operator)
 *  3. Create allPlayers array (spread operator)
 *  4. Add 3 substitute players to team 1 (spread + new items)
 *  5. Extract odds into variables (nested object destructure)
 *  6. printGoals() — variadic (rest) + template literal
 *  7. Determine likely winner using && short-circuit (no if/ternary)
 * ============================================================ */
/* 
//1) Destructure the top-level players array into two team arrays
const [players1, players2] = game.players;

//2) First element → goalkeeper, rest → field players
const [gk, ...fieldPlayers] = players1;

//3) Combine both teams into one array with spread
const allPlayers = [...players1, ...players2];

//4) Add substitutes to a new array without mutating original
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//5) Nested object destructure — rename `x` to `draw`
const {
  odds: { team1, x: draw, team2 },
} = game;

//6) Variadic function — rest collects all arguments into `players` array
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored ${players}`);
};
printGoals(...game.scored);

//7) The lower odd = more likely winner — && stops at first falsy
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
*/


/* ============================================================
 *  CODING CHALLENGE #2
 *  ─────────────────────────────────────────────────────────
 *  Practice: for...of, Object.entries, building scorers object
 *
 *  Tasks:
 *  1. Print each scorer with their goal number
 *  2. Calculate average odd
 *  3. Print formatted odds (get team names from game object)
 *  BONUS: Build a `scorers` object counting each player's goals
 * ============================================================ */
/* 
//1) Loop over scored array — use .entries() for index + value
for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

//2) Average odd — sum all values then divide by count
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

//3) Object.entries gives [key, value] — detect 'x' key to label as "draw"
for (const [teams, value] of Object.entries(game.odds)) {
  const teamStr = teams === "x" ? "draw" : `victory ${game[teams]}`;
  console.log(`Odd if ${teamStr} : ${value}`);
}
*/


/* ============================================================
 *  CODING CHALLENGE #3
 *  ─────────────────────────────────────────────────────────
 *  Practice: Maps, Sets, for...of, optional chaining
 *
 *  Tasks:
 *  1. Build `events` array — unique events from the Map (use Set)
 *  2. Delete the unfair yellow card at minute 64
 *  3. Print average time between events (90 / map size)
 *  4. Loop and label each event as FIRST or SECOND HALF
 * ============================================================ */
/* 
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1) Spread Map values into a Set to remove duplicates, then into array
const event = [...new Set(gameEvents.values())];
console.log(event);

// 2) Delete the unfair yellow card
gameEvents.delete(64);

// 3) Average interval — 90 minutes / number of events remaining
console.log(
  `An Event happened, on average, every ${90 / gameEvents.size} minutes`,
);

// Alternative: use actual last event timestamp from Map keys
const time = [...gameEvents.keys()].pop();   // last key in Map
console.log(
  `An Event happened, on average, every ${time / gameEvents.size} minutes`,
);

// 4) Label each event by half — ternary inside template literal
for (const [mins, events] of gameEvents) {
  const half = mins < 45 ? "First" : "Second";
  console.log(`[${half} Half] ${mins} : ${events}`);
}
*/


/* ============================================================
 *  CODING CHALLENGE #4
 *  ─────────────────────────────────────────────────────────
 *  Practice: Strings, DOM, split/join, padEnd, repeat
 *
 *  Task:
 *  Read underscore_case variable names from a textarea,
 *  convert each to camelCase, and print with padding + checkmarks.
 *
 *  Input:                     Output:
 *  underscore_case       →    underscoreCase      ✅
 *  first_name            →    firstName           ✅✅
 *  Some_Variable         →    someVariable        ✅✅✅
 *  calculate_AGE         →    calculateAge        ✅✅✅✅
 *  delayed_departure     →    delayedDeparture    ✅✅✅✅✅
 *
 *  Key steps per row:
 *  → trim() + toLowerCase()  — normalize input
 *  → split("_")              — separate the two parts
 *  → capitalize second part  — replace first char with uppercase
 *  → padEnd(20)              — align output
 *  → "✅".repeat(i+1)        — add checkmarks based on row number
 * ============================================================ */
/* 
// Create and inject textarea + button into the page dynamically
const textarea = document.createElement("textarea");
document.querySelector("body").append(textarea);

const button = document.createElement("button");
button.textContent = "Click";
document.querySelector("body").append(button);

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");   // each line is a separate variable name

  for (const [i, value] of rows.entries()) {
    const [firstPart, secondPart] = value.toLowerCase().trim().split("_");
    // Capitalize first letter of second part and merge
    const output = `${firstPart}${secondPart.replace(secondPart[0], secondPart[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});
*/