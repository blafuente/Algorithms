const n = 7;
let ar = [1,2,1,2,1,3,2];

// function sockMerchant(n,ar){
    ar.sort();
    let pairs = 0;
    for(let i = 0; i < ar.length; i++){
        if(ar[i] == ar[i+1]){
            pairs+=1;
            i++;
        }        
    }
    console.log(pairs);


