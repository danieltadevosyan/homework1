//  Write a function which filters object by field.

const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
      isAstronaut: true, 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
      isAstronaut: true, 
    }, 
    { 
      username: "Elon Musk", 
      isAstronaut: false, 
    }, 
  ]; 

 function filterByField(arr,key ) {
    let filteredArr =  arr.filter((items) => items[key]);
    return filteredArr;
 }

  console.log(filterByField(users, "isAstronaut")); 


