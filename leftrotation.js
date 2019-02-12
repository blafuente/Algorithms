let arr = [1,2,3,4,5];
let  d = 4;

for(i = 0; i < d; i++){
    let lost = arr.shift();
    let found = arr.push(lost);
}
console.log(arr);