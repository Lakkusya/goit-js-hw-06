// Write code under this line
const getUsersWithGender = (array, gender) => array.filter(array => array.gender === gender).map(({name}) => name);

console.log(getUsersWithGender(users, 'male'));
// console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
