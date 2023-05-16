"use strict";

// Assignment 1: Functions
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const countryFinland = describeCountry("Finland", 6, "Helsinki");
const countryIndia = describeCountry("India", 30, "New Delhi");
const countryAustralia = describeCountry("Australia", 2, "Canberra");

console.log(countryFinland);
console.log(countryIndia);
console.log(countryAustralia);
*/

// Assignment 2: Function Declarations vs. Expressions
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// let indiaPopulation = percentageOfWorld1(1378);
// let australiaPopulation = percentageOfWorld1(25.85);
// let chinaPopulation = percentageOfWorld1(1441);

// console.log(indiaPopulation);
// console.log(australiaPopulation);
// console.log(chinaPopulation);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// let indiaPopulation = percentageOfWorld2(1378);
// let australiaPopulation = percentageOfWorld2(25.85);
// let chinaPopulation = percentageOfWorld2(1441);

// console.log(indiaPopulation, australiaPopulation, chinaPopulation);
*/

// Assignment 3: Arrow Functions
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

let indiaPopulation = percentageOfWorld3(1378);
let australiaPopulation = percentageOfWorld3(25.85);
let chinaPopulation = percentageOfWorld3(1441);

console.log(indiaPopulation, australiaPopulation, chinaPopulation);
*/

// Assignment 4: Functions Calling Other Functions
/*
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}`;
}

let indiaPopulation = describePopulation("India", 1378);
let australiaPopulation = describePopulation("Australia", 25.85);
let chinaPopulation = describePopulation("China", 1441);

console.log(indiaPopulation);
console.log(australiaPopulation);
console.log(chinaPopulation);
*/

// Assignment 5: Introduction to Arrays
/*
const populations = [1378, 238, 42, 239];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);
*/

// Assignment 6: Basic Array Operations (Methods)
/*
const neighbours = ["Japan", "Bhutan", "Myanmar"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Its your neighbouring country");
} else {
  console.log("Probably not a central European country :D");
}

const indexJapan = neighbours.indexOf("Japan");
neighbours[indexJapan] = "Republic of Sweden";
console.log(neighbours);
*/

// Assingnment 7: Introduction to Objects
/*
const myCountry = {
  country: "India",
  capital: "New Delhi",
  langauge: "Hindi",
  population: 30,
  neighbours: ["Japan", "Myanmar", "Bhutan"],
};
console.log(myCountry);
*/

// Assignment 8: Dot vs. Bracket Notation
/*
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  langauge: "finnish",
  population: 6,
  neighbours: ["Japan", "Myanmar", "Bhutan"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.langauge}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

// Using dot notation
myCountry.population += 2;
console.log(myCountry.population);

// Using bracket notation
myCountry.population -= 2;
console.log(myCountry["population"]);
*/

// Assignment 9: Object Methods
/*
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  langauge: "finnish",
  population: 6,
  neighbours: ["Japan", "Myanmar", "Bhutan"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.langauge}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    return (this.island = this.neighbours.length === 0 ? false : true);
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/

// Assignment 10: Iteration: The for Loop
/*
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/

// Assignment 11: Looping Arrays, Breaking and Continuing
/*
const populations = [10, 1441, 332, 83];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
*/

// Assignment 12: Looping Backwards and Loops in Loops
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}
*/

// Assignment 13: The While Loop
/*
const populations = [10, 1441, 332, 83];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let i = 0;
while (i < populations.length) {
  percentages2.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages2);
*/
