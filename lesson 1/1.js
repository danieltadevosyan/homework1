"use strict"

//1 Find the sign of product of three numbers without multiplication operator. Display the specified sign.

function multi(x,y,z) {
    if (x === 0 || y === 0 || z === 0) {
        return "unsigned"
    }
    let count = 0 ;
    if (x < 0 ) count++;
    if (y < 0 ) count++;
    if (z < 0 ) count++;

    if (count % 2 === 0 ) {
        return "+"
    }
    else {
        return "-"
    }
}


console.log(multi(-8,9,-6));
console.log(multi(-14,5,0));
console.log(multi(4,19,-2));