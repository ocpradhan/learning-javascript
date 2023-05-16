'use strict';

// CODING CHALLENGE #1 (My solution and it is correct!!)
/*
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const onlyDogsJulia = dogsJulia.slice();
  onlyDogsJulia.splice(0, 1);
  onlyDogsJulia.splice(-2);

  const allDogs = onlyDogsJulia.concat(dogsKate);

  allDogs.forEach(function (age, dog) {
    return age >= 3
      ? console.log(
          `Dog number ${dog + 1} is an adult, and is ${age} years old`
        )
      : console.log(`Dog number ${dog + 1} is still a puppy 🐶`);
  });
};
checkDogs(dogsJulia, dogsKate);
*/

/*
// CODING CHALLENGE #1 (Jonas' Solution)
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// CODING CHALLENGE #2 (My solution and it is correct!!)
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (item) {
    if (item <= 2) {
      return 2 * item;
    } else if (item > 2) {
      return 16 + item * 4;
    }
  });

  const dogLessYear = humanAges.filter(function (item) {
    if (item >= 18) {
      return item;
    }
  });

  const totalHumanAge = dogLessYear.reduce(function (acc, item) {
    return acc + item;
  });

  const avgHumanAge = totalHumanAge / dogLessYear.length;
  console.log(humanAges);
  console.log(dogLessYear);
  console.log(totalHumanAge);
  return Math.round(avgHumanAge * 10) / 10;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
*/

// CODING CHALLENGE #2 (Jonas' Solution)
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 === 2.5 2/2+3/2 = 2.5

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

// CODING CHALLENGE #3 (My Solution) (Little bit wrong!)
/*
const calcAverageHumanAge = function (ages) {
  const average = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

// CODING CHALLENGE #3 (Jonas' Solution)
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

// CODING CHALLENGE #4
// 1. (My Solution)
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const recommendedPortion = dogs.map(dogWeight => dogWeight.weight ** 0.75 * 28);

for (let i = 0; i < dogs.length; i++) {
  for (let j = 0; j < recommendedPortion.length; j++) {
    dogs[i].recommendedFood = recommendedPortion[i];
  }
}
console.log(dogs);
*/

// 1. (Jonas' Solution)
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// 2. (My Solution)
/*
if (dogs.find(owner => owner.owners.includes('Sarah'))) {
  const index = dogs.findIndex(object => {
    return object.owners.includes('Sarah');
  });
  // console.log(index);
  if (dogs[index].curFood > dogs[index].recFood) {
    // console.log('Eating too much');
  } else {
    // console.log('Not Eating too much');
  }
}
*/

// 2. Jonas' Solution
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3. (My Solution)
/*
const ownersEatTooLittle = dogs
  .map(cur => {
    if (cur.recFood > cur.curFood) {
      return [...cur.owners];
    }
  }, [])
  .flat()
  .filter(item => item !== undefined);

const ownersEatTooMuch = dogs
  .map(cur => {
    if (cur.recFood < cur.curFood) {
      return [...cur.owners];
    }
  }, [])
  .flat()
  .filter(item => item !== undefined);

// console.log(dogs);
// console.log(ownersEatTooLittle);
// console.log(ownersEatTooMuch);
*/

// 3. Jonas' Solution
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooLittle);

// 4. Jonas' Solution
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// 5. My Solution

/*
for (let i = 0; i < dogs.length; i++) {
  if (dogs[i].recFood === dogs[i].curFood) {
    // console.log(true);
  }
  // console.log(false);
}
*/

// 5. Jonas' Solution
console.log(dogs.some(dog => dog.curFood === dog.recFood));

/*
// 6. My Solution
for (let i = 0; i < dogs.length; i++) {
  if (dogs[i].recFood >= dogs[i].curFood) {
    // console.log(true);
  } else {
    // console.log(false);
  }
}
*/

// 6. Jonas' Solution
// current > (recommended * 0.90) && current < (recommended * 1.0)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7. My Solution
/*
const okAmtFood = dogs
  .map(dog => (dog.curFood <= dog.recFood ? dog : null))
  .filter(dog => (dog !== undefined ? dog : null));

// console.log(okAmtFood);
*/

// 7. Jonas' Solution
console.log(dogs.filter(checkEatingOkay));

// 8. My Solution
/*
const shallowDogs = [...dogs];
console.log(shallowDogs);

const sortShallowdogs = shallowDogs.sort((dog1, dog2) => {
  return dog1.recFood - dog2.recFood;
});

console.log(sortShallowdogs);
*/

// 8. Jonas' Solution
// Sort it by recommended food portion in an ascending order
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.curFood);
console.log(dogsSorted);
