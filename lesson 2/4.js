// 4 Write a function which returns array of usernames.

const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
    }, ]

    function getUserNames(arr) {
        let usersArr = [];
        for (let index = 0; index < arr.length; index++) {
            usersArr.push(arr[index].username)  
        }
        return usersArr;
    }

console.log(getUserNames(users))    