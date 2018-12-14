function findRoutes(gridSize){
    let routeMatrix = [];
    for(let i = 1; i <= gridSize; i++){
        routeMatrix.push(i);
    }
    for(let i = 1; i <= gridSize; i++){
        for(let j = 1; j <= gridSize; j++){
            routeMatrix[j] = routeMatrix[j] + routeMatrix[j-1];
        }
        routeMatrix[i] = 2 * routeMatrix[i-1];
    }
    // console.log(routeMatrix);
    return routeMatrix[gridSize];
}

gridSize = 5;
n = findRoutes(gridSize);
console.log(n);
