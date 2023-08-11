// 11 Write a function to convert a long phrase to its acronym

const str1 = "Prisoner of War";
const str2 = "Have a good night";

function convert(str) {
    const arr  =  str.split(" ");
    const check = (acc , el ) => {
    return acc + el[0].toLocaleUpperCase();
}   
const mapArr = arr.reduce(check,"");
return mapArr;
}   

console.log(convert(str1));
console.log(convert(str2));


