let string = "AAABBB"
let stringArr = string.split("");
let count = 0;

for(i = stringArr.length; i > 0; i--){
    if(stringArr[i] === stringArr[i+1]){
        stringArr.splice(i,1)
        count++;
    }
}

console.log(string)
console.log(stringArr)
console.log(count)