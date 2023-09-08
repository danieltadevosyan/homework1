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
  return arr.map((user) => user.username.length);
}

console.log(checkUserNameLength(users));
