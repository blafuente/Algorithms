const fs = require('fs');
let names = fs.readFileSync('names.txt', 'utf-8');
// console.log(names);

// \n is computer speak for "new line"
let namesArray = names.split('\n');
// console.log(namesArray);
namesArray.forEach((data)=>{
    let reverse = data.split('').reverse().join('');
    // let nameAsArray = data.split('');
    // console.log(nameAsArray);
    // let reverseStringAsArray = nameAsArray.reverse():
    // console.log(reverseStringAsArray);
    // let reverseStringAsArray = reverseStringAsArray.join('')
    if(data === reverse){
        console.log(data)
    }
    
})
