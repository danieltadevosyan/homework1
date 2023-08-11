// 5Write a function which returns array of lengths of user names

const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
    }, 
  ];


  function checkUserNameLength(arr) {
        let usersArr = [];
        for (let index = 0; index < arr.length; index++) {
            usersArr.push(arr[index].username.length)  
        }
        return usersArr;
  }

  console.log(checkUserNameLength(users))