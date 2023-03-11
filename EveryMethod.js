// in this program we will check that every number contain in number array is even or not 
//if every number contain in array, then its return true otherwise return false

const numbers = [2,4,6,8,24]

const isEven = numbers.every((number) => number % 2 == 0)

console.log(isEven);

const numbers2 = [2,43,61,8,24]

const isEven2 = numbers2.every((number) => number % 2 == 0)

console.log(isEven2)