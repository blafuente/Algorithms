let arr = [
    [-9,-9,-9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9,-9,-9, 1, 2, 3],
    [0,  0, 8, 6, 6, 0],
    [0,  0, 0,-2, 0, 0],
    [0,  0, 1, 2, 4, 0]
]
let high = -64;

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        // arr[0][0]+arr[0][1]+arr[0][2]
        //           arr[1][1]
        // arr[2][0]+arr[2][1]+arr[2][2]

        // arr[ i ][j]+arr[ i ][j+1]+arr[ i ][j+2]
        //             arr[i+1][j+1]
        // arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
        let hourGlass = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

        if(hourGlass > high){
            high = hourGlass 
        }
    }
}
console.log(high);