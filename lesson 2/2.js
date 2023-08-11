// 2 Convert a long phrase to its acronym

const str = "Prisoner of War";
const str2 = "Have a good night";

function convertLong(str) {
    const arr  =  str.split(" ");

    const check = (acc , el ) => {
    return acc + el[0].toLocaleUpperCase();
}
    const mapArr = arr.reduce(check,"");
    return mapArr
}




console.log(convertLong(str));
console.log(convertLong(str2));