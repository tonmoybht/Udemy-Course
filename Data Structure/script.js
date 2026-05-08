"use strict";

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
  [weekdays[4]]: {
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
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 12,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0,
  //     close: 24,
  //   },
  // },
  // before es6 object literal

  // openingHours: openingHours,

  // after es6 object literal

  openingHours, //line 27

  //before es6 object literal

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // orderDelivery: function ({
  //   starterIndex = 1,
  //   mainIndex = 0,
  //   address,
  //   time = "11:00",
  // }) {
  //   console.log(
  //     `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
  //   );
  // },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
  //   );
  // },
  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(
  //     `Your ordered pizza with: ${mainIngredient},${otherIngredients}.`,
  //   );
  // },

  //after es6 object literal

  order(starterIndex, mainIndex) {
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
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `Your ordered pizza with: ${mainIngredient},${otherIngredients}.`,
    );
  },
}; */

/* ////////// Destructuring Array

const arr = [2, 4, 5];

const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = resturant.categories;
let [first, , second] = resturant.categories;
console.log(first, second);

// switch
// let temp = first;
// first = second;
// second = temp;
[first, second] = [second, first];

console.log(first, second);

console.log(resturant.order(1, 2));

const [starterOr, mainOr] = resturant.order(1, 2);
console.log(starterOr, mainOr);

// Nested Destructuring
const nest = [1, 4, [5, 2]];
const [a, b, [c, d]] = nest;

console.log(a, b, c, d);

//Default Value

const deff = [6, 9];
const [i, o, p] = deff;
console.log(i, o, p);

const deff2 = [6, 9];
const [q = 1, w = 1, e = 1] = deff2;
console.log(q, w, e);
 */

/* ////////// Object Destructuring
resturant.orderDelivery({
  time: "10:30",
  address: "Jupiter",
  mainIndex: 2,
  starterIndex: 2,
});

resturant.orderDelivery({
  address: "Mars",
  mainIndex: 1,
});

 const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

//change variable name
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;

console.log(resturantName, hours, tags);

// default value
const { menu = [], starterMenu: starters = [] } = resturant;
console.log(menu, starters);

// Mutating variables
let a = 69;
let b = 420;
const obj = { a: 24, b: 20, c: 9 };
({ a, b } = obj);
console.log(a, b);

//// nested objects
// const {
//   fri: { open, close },
// } = hours;
// console.log( open, close);
const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);
 */

/* ////////// Spread Operator
const arr = [4, 5, 6];
const badArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badArr);

const goodArr = [1, 2, 3, ...arr];
console.log(goodArr);
console.log(...goodArr);

const newMenu = [...resturant.mainMenu, "Gnocci"];
console.log(newMenu);
//copy arrey
const mainMenuCopy = [...resturant.mainMenu];

//joining 2 arreys or more
const menu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(menu);

//Iterables: arreys ,strings, maps, sets but not objects
const str = "Mokles";
const latter = [...str];
console.log(latter);
console.log(...str);

const ingredients = [
  // prompt("Let's Make Pasta: Ingredient 1"),
  // prompt("Ingredient 2"),
  // prompt("Ingredient 3"),
];

//solution 1

resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//solution 2 (using ...spread)

resturant.orderPasta(...ingredients);

//using spread on object
const newRestaurant = { foundedIn: 1998, ...resturant, founder: "Guiseppe" };
console.log(newRestaurant);

const newRestaurantCopy = { ...newRestaurant };
newRestaurantCopy.name = "Risotorante Roma";
console.log(newRestaurant.name);
console.log(newRestaurantCopy.name);
 */

/* ////////// Rest Operator

// 1) Destructuring
//spread operator because its used right side of =
const arr = [1, 2, ...[3, 4]];

//rest operator because its used left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


const [pizza, , risotto, ...otherFoods] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];

console.log(pizza, risotto, otherFoods);
//objects
const { sat, ...weekdays } = resturant.openingHours;
console.log(weekdays);

// 2) Function
const add = function (...numbers) {
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

/* ////////// Short Circuiting (&& and ||)

// use any data types, return any data type, short-circuiting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

// resturant.numGuests = 23;
const guest1 = resturant.numGuests ? resturant.numGuests : 10;
console.log(guest1);

const guest2 = resturant.numGuests || 10;
console.log(guest2);

// && operator

console.log(0 && "Jonas");
console.log(1 && "Jonas");
console.log(true && null);

console.log("Hello" && 23 && null && true);

//practical use
if (resturant.orderPizza) {
  resturant.orderPizza("Chicken", "Cheese");
}
//using short-circuit
resturant.orderPizza && resturant.orderPizza("Chicken", "Cheese"); */

/* ////////// The Nullish Coalescing Operator
resturant.numGuests = 0;
const guest = resturant.numGuests || 10;
console.log(guest);
// using nullish operator
const guestCorrect = resturant.numGuests ?? 10;
console.log(guestCorrect); */

/* ////////// Logical Assignment Operators

const rest1 = {
  restName: "Capri",
  // numGuest: 20,
  numGuest: 20,
};
const rest2 = {
  restName: "La Piazza",
  owner: "Giovanni Rossi",
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

//logical or operator
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

// logical and operator
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

//logical nullish coalescing operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest1);
console.log(rest2); */

/* ////////// for of (array)

const menu = [...resturant.mainMenu, ...resturant.starterMenu];

for (const item of menu) console.log(item);
for (const item of menu.entries()) {
  console.log(item);
}
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// destructured
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} */

/* ////////// Optional Chaining

// without optional chaining
if (resturant.openingHours && resturant.openingHours.mon) {
  console.log(resturant.openingHours.mon.open);
}

// with optional chaining
console.log(resturant.openingHours.mon?.open);
console.log(resturant.openingHours?.mon?.open);

//example

for (const day of weekdays) {
  const open = resturant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

//method (nullish and optional chaining)
console.log(resturant.order?.(0, 1) ?? "Method does not exist");
console.log(resturant.orderRissoto?.(0, 1) ?? "Method does not exist");

//arrey (optional chaining)
const user = [
  {
    name: "Mokles",
    email: "example@mail.com",
  },
];
//new way
console.log(user[0]?.name ?? "User does not exist");
console.log(user[1]?.name ?? "User does not exist");

//old way
if (user.length > 0) console.log(user[0].name);
else console.log("User does not exist"); */

/* ////////// Looping Objects

//object properties name
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const openDays = Object.keys(openingHours);
let openStr = `We are open on ${openDays.length} days: `;

for (const day of openDays) {
  openStr += `${day}, `;
}
console.log(openStr);

//object values
const values = Object.values(openingHours);
console.log(values);

//entries object
for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${keys} We open at ${open} and close at ${close}`);
} */

/* ////////// Coding Challenge #1

 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
 */

/* ////////// Sets

 const orderSet = new Set([
  "Pizza",
  "Pasta",
  "Risotto",
  "Pizza",
  "Pizza",
  "Risotto",
]);

console.log(orderSet);
console.log(new Set("Mokles"));
console.log(new Set("Mokles").size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Gerlic Bread");
orderSet.add("Gerlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ["Waiter", "Manager", "Chef", "Waiter", "Chef"];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log("Intersection: ", commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("Union:", italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFood = italianFoods.difference(mexicanFoods);
console.log("Unique Food:", uniqueItalianFood);

const uniqueItalianAndMexicanFood =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFood);

console.log(italianFoods.isDisjointFrom(mexicanFoods)); */

/* ////////// Maps

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzaria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));

const time = 12;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.size);
const arr = [1, 2];
// rest.set([1, 2], "Test");
rest.set(arr, "Test");
console.log(rest.get(arr));

//dom
rest.set(document.querySelector("h1"), "Heading");

console.log(rest);

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

// convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}

// const answer = Number(prompt("Your Answer : 1, 2, 3 or 4 ?"));

// console.log(question.get(answer === question.get("correct")));

//Solution 2
// console.log(
//   answer === question.get("correct") ? question.get(true) : question.get(false),
// );

//convert map to arrey

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]); */

/* //////Game object for challenge 1, 2 and 3

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
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

/* Challenge - 1
1)
const [players1, players2] = game.players;
2)
const [gk, ...fieldPlayers] = players1;
3)
const allPlayers = [...players1, ...players2];
4)
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

5)
const {
  odds: { team1, x: draw, team2 },
} = game;
6)
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored ${players}`);
};

printGoals(...game.scored);

7)
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
 
*/

/* // Coding Challenge #2
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/* //1)

for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

//2)

const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;

console.log(avg);

//3)
for (const [teams, value] of Object.entries(game.odds))
{
  const teamStr = teams === 'x' ? 'draw' : `victory ${game[teams]}`
  console.log(`Odd if ${teamStr} : ${value}`);
}
 */

/* // Coding Challenge #3
 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL */

/* const gameEvents = new Map([
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

// 1)
const event = [...new Set(gameEvents.values())];
console.log(event);

// 2)
gameEvents.delete(64);

// 3)
console.log(
  `An Event happened, on average, every ${90 / gameEvents.size} minutes`,
);

// second solution

const time = [...gameEvents.keys()].pop();
console.log(
  `An Event happened, on average, every ${time / gameEvents.size} minutes`,
);
// 4)
for (const [mins, events] of gameEvents) {
  const half = mins < 45 ? "First" : "Second";
  console.log(`[${half} Half] ${mins} : ${events}`);
}
 */