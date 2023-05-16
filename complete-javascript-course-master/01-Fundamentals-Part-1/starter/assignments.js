// Assignment: Values and Variables
// let country = "India";
// let continent = "Asia";
// let population = 138;

// console.log(country);
// console.log(continent);
// console.log(population);

////////////////////////////////////////////////////////

// Assignment: Data Types
// let isIsland = "Goa";
// isIsland = true;

// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

////////////////////////////////////////////////////////

// Assignment: let, const and var
// language = "Hindi";
// const country = "India";
// const continent = "Asia";
// const isIsland = false

// isIsland = true;

// Assignment: Basic Operators
/*let halfPopulation = (population / 2);
console.log(halfPopulation);
population++;
console.log(population);

console.log(population > 6);
console.log(population < 33);

let description = "Portugal" + " " + "is" + " " + "in" + " " + "Europe" + ", " + "its " + "11 " + "million " + "people " + "speak " + "portuguese";
console.log(description);
*/

//////////////////////////////////////////////////////////////////

// Assignment: Strings and Template Literals
/*
let description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);
*/

//////////////////////////////////////////////////////////////////

// Assignment: Taking Decisions: if / else statements
/*
const population = 22;
let avgPopulation = 33 - population;

if (population > 33) {
  console.log("Portugal's population is above average.");
} else {
  console.log(
    `Portugal's population is ${avgPopulation} million below average`
  );
}
*/
/////////////////////////////////////////////////

// Assignment: Type Coversion and Coercion
/*
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
*/

// Assignment: Equality Operators: == vs. ==
/*
const numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/

////////////////////////////////////////////////////////
/*
//Assignment: Logical Operators
const population = 43;
const language = "English";
const isIsland = true;

if (population < 50 && language === "English" && isIsland) {
  console.log("You should live in Portugal:)");
} else {
  console.log("Portugal doesn't meet your criteria :(");
}
*/

////////////////////////////////////////////////////////

// Assignment: The switch Statement
/*
const language = "japanese";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;

  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;

  case "hindi":
    console.log("Number 4");
    break;

  case "arabic":
    console.log("5th most spken language");
    break;

  default:
    console.log("Great language too :D");
}
*/

////////////////////////////////////////////////////////

// Assignment: The Conditional (Ternary) Operator
/*
const population = 33;
const country = "Portugal";

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
*/
