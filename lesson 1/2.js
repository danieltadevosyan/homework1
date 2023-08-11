//2  Find the sign of product of three numbers without multiplication operator. Display the specified sign.not use if

let obj  = {
    "1" : "+", 
    "-1" : "-",
}


function multi2 (x,y,z) {
    let number = (x * y * z);
    let key = (number/Math.abs(number)) ;
    
    key = key + "";


    return obj[key] ?? "unsigned"
}




console.log(multi2(-8,9,-6));
console.log(multi2(-14,5,0));
console.log(multi2(4,19,-2));