"use strict";

////// Bankist App

const account1 = {
  owner: "Mokles Rahman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Kuddu Ali",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Mofiz Uddin",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Anwar Zaman",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account = [account1, account2, account3, account4];

const containerMovements = document.querySelector(".movements-container");

/* Display Movements */
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, index) {
    const type = mov > 0 ? "deposit" : "withdraw";
    const html = `
    <div class="movements-row">
     <div class="movements">
      <p class="movements-type movements-type-${type}">${index + 1} ${type}</p>
      <p class="date"><span class="movements-date">05/03/2037</span></p>
      </div>
      <div class="movements-value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

/* Create Username */

const createUsername = (acc) => {
  acc.forEach((accounts) => {
    accounts.username = accounts.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsername(account);

///////Array Methods

//let arr = [1, 2, 3, 4, 5];
//let arr2 = [6, 7, 8, 9, 10];

/*//Slice Method

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); */

/*//// Splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr); */

/* //// Reverse
console.log(arr.reverse());
console.log(arr); */

/* //// Concat
const letter = arr.concat(arr2);
console.log(letter);
console.log([...arr, ...arr2]); */

/* //// Join
console.log(letter.join(" - ")) */

/* //// at
console.log(arr[0]);
console.log(arr.at(0));

//getting last Element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); */

/* //// forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//old way
for (const [count,readArr] of movements.entries()){
if (readArr > 0) {
    console.log(`Movement ${count + 1}: You deposited: ${readArr}`);
  } else {
    console.log(`Movement ${count + 1}: You withdrew: ${Math.abs(value)}`);
  }
} 

//new
movements.forEach((amount, index, arr) => {
  if (amount > 0) {
    console.log(`Movement ${index + 1} - You deposited: ${amount}`);
  } else {
    console.log(`Movement ${index + 1} - You withdrew: ${Math.abs(amount)}`);
  }
});

// console.log(usingForEach);

//forEach on Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((long, short, arr) => {
  console.log(`${short}: ${long}`);
});

//forEach on Set

const curr = new Set([["USD"], ["EUR"], ["GBP"]]);

curr.forEach((long, _, arr2) => {
  console.log(`${long}: ${long}`);
});
 */

/* //// Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map((money) => money * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const withMaps = movements.map(
  (money, index) =>
    `Movement ${index + 1} - You ${money > 0 ? "deposited" : "withdrew"}: ${Math.abs(money)}`,
);
console.log(`${withMaps}`); */

/* /////// Coding Challenge #1

 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const checkDogs = (dogsJulia, dogsKate) => {
  const correctedDogsJulia = dogsJulia.slice();
  correctedDogsJulia.splice(0, 1);
  correctedDogsJulia.splice(-2);
  const dogs = correctedDogsJulia.concat(dogsKate);

  dogs.forEach((age, num) => {
    if (age >= 3) {
      console.log(`Dog number ${num + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${num + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
