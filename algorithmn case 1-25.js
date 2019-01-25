function caseConvert(str, conversionType){
    if(conversionType === "snakecase"){
        snakecase = str.replace(/ /g, '_');
        console.log(snakecase);    
    }else if(conversionType === "camelcase"){
        var cam = str.replace(/ [a-z]/g, (whatwasfound)=>(whatwasfound.toUpperCase()));
        cam = cam.replace(/./, (firstLetter)=>(firstLetter.toLowerCase()))
        let resConcat = cam.replace(/\s/g, ``);
        console.log (cam)
        console.log(resConcat)   
    }
} 

caseConvert("The rain in SPAIN stays in the plain", 'camelcase');
caseConvert("The rain in SPAIN stays in the plain", 'snakecase');



   