// Coding Challenge #1
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Parvard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// My solution which is not complete
// Create one player array for each team.
const [players1, players2] = game.players;

const [gk, fieldPlayers] = (game.players[0], game.players);

console.log(gk, fieldPlayers);

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

// Coding Challenge #1
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Parvard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
*/
/*
// Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

/*
// My Solution
// 1.
const events = [
  gameEvents.get(17),
  gameEvents.get(36),
  gameEvents.get(64),
  gameEvents.get(69),
];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.

// 4.
for (const [time, event] of gameEvents.entries()) {
  if (time <= 45) {
    console.log(`[FIRST HALF] ${time}: ${event}`);
  }
  console.log(`[SECOND HALF] ${time}: ${event}`);
}


// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

*/

// Coding Challenge #4: My solution (which is half correct)
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const clickButton = document.querySelector('button');

function toCamelCase(str) {
  // 1. Trim the words with no whitespaces
  // 2. Separate the words without _
  const allLowerCase = str.toLowerCase().trim().split('_');

  if (allLowerCase.length === 2) {
    // 3. First word must be small, no whitespaces
    const firstSmall = allLowerCase[0].toLowerCase();
    // 3. Second word must be capitalized
    // - split the word into different characters.
    // - then make the first character uppercase.
    // - then join the word
    const secondSplit = allLowerCase[1].split('');

    const firstCharUpper = secondSplit[0].toUpperCase();
    const joinedSecondWord = [firstCharUpper, allLowerCase[1]]
      .join('')
      .replace(secondSplit[0], '');

    return [firstSmall, joinedSecondWord].join('');
  }
}

clickButton.addEventListener('click', function () {
  console.log(toCamelCase('underscore_case'));
  console.log(toCamelCase(' first_name'));
  console.log(toCamelCase('Some_Variable'));
  console.log(toCamelCase('  calculate_AGE'));
  console.log(toCamelCase('delayed_departure'));
});
*/

// Coding Challenge #4: Jonas Solution

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
