let myList = [6, 4, 1];

console.log(myList);
// let temp = myList[0];// temp = 7
// myList[0] = myList[1]; // myList[0] = 6
// myList[1] = temp; // myList[1] = 7

let origList = myList;

// console.log(myList);
swaps = 0;
sort = false;
// while(!sort){
    for (k = myList.length-1; k > 0; k--){
        for (i = 0; i < myList.length-1; i++){
            if (myList[i] > myList[i+1]){
                temp = myList[i];
                myList[i] = myList[i+1];
                myList[i+1] = temp;
                swaps++;
                
            }
        }
        // console.log(myList); // will print mylist n times
    } 
    // if (swaps === 0){
    //     sorted = false;
    // }
    console.log(myList);  // prints the final list sorted
    console.log(swaps)
// }
