"use strict";

// Coding Challenge #1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgScoreDolphins = calcAverage(44, 23, 71);
const avgScoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgDolphins * 2 <= avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log("No one won!!");
  }
}

checkWinner(avgScoreDolphins, avgScoreKoalas);
*/

// Coding Challenge #2
/*
const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`The bills are: ${bills}`);
console.log(`The tips are: ${tips}`);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`The total bill is: ${total}`);
*/

// Coding Challenge #3
/*
const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
if (
  markMiller.calcBMI(markMiller.mass, markMiller.height) >
  johnSmith.calcBMI(johnSmith.mass, johnSmith.height)
) {
  console.log(
    `${markMiller.firstName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.firstName}'s ${johnSmith.bmi}!`
  );
} else {
  console.log(
    `${johnSmith.firstName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.firstName}'s ${markMiller.bmi}!`
  );
}
*/
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 5];

const tips = [];
const totals = [];
const avgArray = [1, 2, 3];
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }

  return sum / arr.length;
}

const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);

const average = calcAverage(avgArray);
console.log(average);
*/
