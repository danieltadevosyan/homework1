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
  const sum = arr.reduce((total, user) => total + user.age, 0);
  const average = sum / arr.length;
  return average;
}

console.log(getAverageAge(users)); //  55
