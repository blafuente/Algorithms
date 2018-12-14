// let students = [
//     'jr',
//     'matt',
//     'gbinga'.
//     'katie',
//     'jason',
//     'jim',
//     'michae',
//     'ron',
//     'noelle',
//     'rob',
//     'cody',
//     'sean',
//     'greg',
//     'brian',
//     'khanh',
//     'brandon',
//     'connor',
//     'zach',
//     'chris'
// ]
// consoloe.log(students[2]);

productList = [];

for(x = 999; x >= 100; x--){
    for(y = 999; y >= 100; y--){
        product = x * y;
        productString = product.toString();
        // productList.push(productString);
        if(productString.length == 6){
            // productList.push(productString);
            if(productString[0] === productString[5] && productString[1] == productString[4] && productString[2] == productString[3]){
                productList.push(productString);
            }
        }
    }
}

productList2 = []
for(i = 0; i < productList.length; i++){
    let product2 = Number(productList[i])
    productList2.push(product2)
}

// console.log(productList2)
// console.log(productList)


function biggestPal(array) {
    biggestDrome = 0;
    for (var i = 0; i < array.length; i++) {
        currentNum = array[i]
        if (currentNum > biggestDrome) {
            biggestDrome = currentNum;
        }
    }
    return biggestDrome
}

console.log(biggestPal(productList2))
theBiggestPalindromeByTwoThreeDigitNums = 906609;