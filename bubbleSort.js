let myList = [5,4,3,2,1,0];

console.log(myList);
// let temp = myList[0];// temp = 7
// myList[0] = myList[1]; // myList[0] = 6
// myList[1] = temp; // myList[1] = 7

let origList = myList;

// console.log(myList);
sort = false;
// while(!sort){
    for (k = myList.length-1; k > 0; k--){
        for (i = 0; i < myList.length-1; i++){
            if (myList[i] > myList[i+1]){
                temp = myList[i];
                myList[i] = myList[i+1];
                myList[i+1] = temp;
            }
        }
        console.log(myList);
    }
    // console.log(myList);
