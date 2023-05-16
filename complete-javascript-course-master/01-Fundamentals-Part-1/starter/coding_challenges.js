// Coding Challenge #1
/*
const markWeight = 78;
const markHeight = 1.69;

const JohnWeight = 92;
const JohnHeight = 1.95;

const johnBMI = markWeight / (markHeight * markHeight);
const markBMI = JohnWeight / (JohnHeight * JohnHeight);

console.log("BMI of John: " + johnBMI);
console.log("BMI of Mark: " + markBMI);

const markHigherBMI = console.log(markBMI > johnBMI);
*/

////////////////////////////////////////////////////////

// Coding Challenge #2
/*
if (johnBMI > markBMI) {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} else {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
*/

////////////////////////////////////////////////////////

// Coding Challenge #3
/*
const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 106) / 3;
const minScore = 100;

console.log(`The average of Dolphins: ${dolphinsAvg}`);
console.log(`The average of Koalas: ${koalasAvg}`);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= minScore) {
  console.log("Dolphins Won!!");
} else if (
  (dolphinsAvg >= minScore && koalasAvg >= minScore) ||
  dolphinsAvg === koalasAvg
) {
  console.log("Draw!!");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= minScore) {
  console.log("Koalas Won!!");
}
*/

// Coding Challenge #4
/*
const billValue = 430;
const tipValue =
  billValue >= 50 && billValue <= 300
    ? billValue * (15 / 100)
    : billValue * (20 / 100);

console.log(
  `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
    tipValue + billValue
  }`
);
*/
