// . Write a function which remove users with language equals to 'ru'.

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

function filterUsers(arr) {
  let arrFiltered = arr.filter((items) => items.lang != "ru");
  return arrFiltered;
}

console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]
