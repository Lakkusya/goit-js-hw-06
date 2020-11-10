
const numbers = [5, 10, 15, 20, 25];

const map = function (array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) { 
    const result = callback(array[i], i, array)
    newArray.push(result)
  }
  return newArray;
 }

const doubleNumbers = map(numbers, function (number, index, array) { 
  console.log(number);
  console.log(index);
  console.log(array);
  
  return number * 2;
})

console.log(doubleNumbers)
// const number = numbers.find(function (n) { 
//   return n === 10;

// })
// console.log(number)
// // ================================================================
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];
// const playerToFind = 'player-3'
  
// const player = players.find(function (player) { 
//   return player.id === playerToFind;
// })

// console.log(player)

// // ================================================================
// const isAllOnline = players.every(function (player) { 
// return player.online
// }) 
// console.log('isAllOnline: ', isAllOnline)

// // ================================================================
// const averageInPlayTime = players.every(function (player) { 
//   return player.timePlayed > 100;
// })
// console.log('averageInPlayTime: ', averageInPlayTime)

// // ================================================================

// const isAnyOnline = players.some(function (player) { 
//   return player.online;

// })
// console.log('isAnyOnline: ', isAnyOnline)