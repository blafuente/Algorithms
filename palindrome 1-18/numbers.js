const fs = require('fs');
const file = fs.readFileSync('numbers.txt','utf-8');
// break up all the lines into an array
// break up all the elements in to a single string
const numberString = file.split('\n').join('');
// console.log(numberString);
// now split the one string into a bunch of  numbers
const numberArray = numberString.split('');
let count = 0;
for(let i = 0; i < numberArray.length; i++){
    count += Number(numberArray[i]);
}
console.log(count);