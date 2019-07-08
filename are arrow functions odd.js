// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]

const odds = (numbers) => numbers.filter(e => e % 2);

console.log(odds([1, 2, 3, 4, 5]));