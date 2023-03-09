//Filter method
const numbers = [12,23,43,32,55,46];

const evenNum = numbers.filter((number) =>{

    return number % 2 === 0;

});
console.log(evenNum);