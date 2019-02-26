let magazine1 = ["give", "me", "one", "grand", "today", "night"]
let note1 = ["give", "one", "grand", "today"]

let magazine = ["two", "times", "three",  "is",  "not", "four"]
let note = ["two", "times", "two", "is", "four"]

// function checkMagazine(magazine, note) {
//     const magazineMap = new Map();
//     const noteMap = new Map();
//     let count = 0;
//     for(let i = 0; i < magazine.length; i++){
//         magazineMap.set(i, magazine[i])
//     }
//     for(let i = 0; i < note.length; i++){
//         noteMap.set(i, note[i])
//     }
//     // for(let [key,value] of noteMap.entries()){
//     //         if(noteMap.get(value) === magazineMap.get(value)){
//     //             count++;
//     //             noteMap.delete(key);
//     //             magazineMap.delete(key);
//     //         }
//     // }
//         console.log(count)
//         console.log(magazineMap)
//         console.log(noteMap)
//     if(count === note.length){
//         console.log("Yes")
        
//     } else {
//         console.log("No");
//     }
//  }

// checkMagazine(magazine,note);
// checkMagazine(magazine1,note1);

function ransom_note(magazine, note){

    res = {}
    magazine.forEach( function (word) {
         if (res[word])
             res[word] = res[word] + 1;
         else
             res[word] = 1;
     })
     
    
    var result = true;
     note.forEach(function (word) {
         if  (!res[word] || res[word] < 1)
             result = result && false;
         if (res[word] && res[word] > 0) {
             res[word] = res[word] - 1;
         }
     }) 
    
     return result;
 }
 
 function main() {
     var m_temp = readLine().split(' ');
     var m = parseInt(m_temp[0]);
     var n = parseInt(m_temp[1]);
     magazine = readLine().split(' ');
     note = readLine().split(' ');
     
     if (ransom_note(magazine, note)) {
        console.log('Yes'); 
     }
     else {
         console.log('No');       
     }
        
 }
ransom_note();