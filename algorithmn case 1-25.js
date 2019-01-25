function caseConvert(str, conversionType){
    if(conversionType === "snakecase"){
        snakecase = str.replace(/ /g, '_');
        console.log(snakecase);    
    }else if(conversionType === "camelcase"){
        convertedStr = str.replace(/ [a-z]/g, (whatwasfound)=>(whatwasfound.toUpperCase()));
        convertedStr = convertedStr.replace(/./, (firstLetter)=>(firstLetter.toLowerCase()))
        convertedStr = convertedStr.replace(/\s/g, ``);
        console.log (convertedStr)
    }
} 

caseConvert("The rain in SPAIN stays in the plain", 'camelcase');
caseConvert("The rain in SPAIN stays in the plain", 'snakecase');
 