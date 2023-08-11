// . Given an array, return a new array that only includes the numbers

const arr1 = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, 
NaN];

function returnNumbers(arr) {
    let numberArr =  arr.filter((items) => typeof items === "number" && !items === false )
    return numberArr;
}

console.log(returnNumbers(arr1));