//4 harcakan dorobotat ?  Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
// new array where each element from that array is placed under the index of its value. Start from the
// smallest value and end with the biggest one. If there are missing values, put in its places undefined


function rearrangeArray(arr) {
    const newArr = new Array(100); 
    for (const num of arr) {
      newArr[num] = num;
    }
    return newArr;
  }
  
  const inputArray = [5, 3, 10, 8, 2]; 
  const resultArray = rearrangeArray(inputArray);
  
  console.log(resultArray);
