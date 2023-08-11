// . Write a function which calculates average age of users.

const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
      age: 56, 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
      age: 54, 
    }, 
  ]; 

  function getAverageAge(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age;
  }
  let average = sum / arr.length;
  return average;
  }

  console.log(getAverageAge(users)); // 55