// const numbers = [5, 10, 15, 20, 25];
// const mappedNumbers = numbers.map(function (element) {

//   return element * 2;
// });
// console.log(numbers);
// console.log(mappedNumbers);

const numbers = [5, 10, 15, 20, 25];
const filteredNumbers = numbers.filter(function (number) { 
  return number >= 15;
})
console.log(numbers);
console.log(filteredNumbers)

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Получаем массив имен всех игроков

const playerNames = players.map(function (player) {
  return player.name;
});

console.log(playerNames);

// Увеличиваем количество поинтов всех игроков

// const updatePlayers = players.map(function (player) {
//   console.log(player);
//   return {
//     ...player,
//     points: player.points + player.points * 0.1
//   }
// });
// console.table(players)
// console.table(updatePlayers)
const playerIdToUpdate = 'player-3';

const updatePlayers = players.map(function (player) {
  console.log(player.id)
  if (player.id === playerIdToUpdate) { 

  return {
    ...player,
    timePlayed: player.timePlayed + 50,
  }

  }
  return player;

});
console.table(players)
console.table(updatePlayers)

const onlinePlayers = players.filter(function (player) { 
  return player.online;
})

console.table(onlinePlayers)

const hardcorePlayers = players.filter(function (player) {
  return player.timePlayed > 250;

});
console.table(hardcorePlayers);