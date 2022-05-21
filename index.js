const PITCHERS = [
  { id: 1, firstName: "Ranger", lastName: "Suarez", team: 1},
  { id: 2, firstName: "Aaron", lastName: "Nola", team: 1},
  { id: 3, firstName: "Shane", lastName: "Baz", team: 2},
  { id: 4, firstName: "Luis", lastName: "Patino", team: 2},
];

const TEAMS = [
  { id: 1, name: "Philadelphia Phillies"},
  { id: 2, name: "Tampa Bay Rays"},
];

const GAMES = [
  { id: 1, homeTeam: 1, awayTeam: 2, date: "2022-05-01", startingPitchers: [1, 3]},
  { id: 2, homeTeam: 1, awayTeam: 2, date: "2022-05-02", startingPitchers: [2, 4]},
  { id: 3, homeTeam: 2, awayTeam: 1, date: "2022-05-15", startingPitchers: [2, 3]},
];

// Format the players full name
function getPlayerName(firstName, lastName) {
  const name = `${firstName} ${lastName}`;
  return name;
};

// Can use arrow function without curly braces/"return" if all you're doing is returning something
const getPlayerNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;

// Return the first player whose id matches the id passed in
function getPlayerById(id) {
  const player = PITCHERS.find(player => player.id === id);
  return player;
};


// Return a player's name based on an id passed in
function getPlayerNameByPlayerId(id) {
  const player = getPlayerById(id);
  if (player) {
    const name = getPlayerName(player.firstName, player.lastName);
    return name;
  }
  return null;
};

function getPlayerNameByPlayerIdShorthand(id) {
  const player = getPlayerById(id);
  // If the player is truthy, run getPlayerName and assign what's return to name
  // Else name = null
  const name =  player ? getPlayerName(player.firstName, player.lastName) : null;
  return name;
};

console.log(getPlayerName("Rebekah", "Callari"));
console.log(getPlayerNameArrow("Rebekah", "Callari"));
console.log(getPlayerById(3));
console.log(getPlayerNameByPlayerId(3));
console.log(getPlayerNameByPlayerIdShorthand(3));