// Implement a simple person object with private properties using closures.
// const person = createPerson("Alice", 30);
// console.log(person.getName()); // Output: "Alice"
// console.log(person.getAge()); // Output: 30
// person.setName("Bob");
// person.setAge(25);
// console.log(person.getName()); // Output: "Bob"
// console.log(person.getAge()); // Output: 25

function createPerson(name, age) {
  let privateName = name;
  let privateAge = age;

  return {
    getName: function () {
      return privateName;
    },
    getAge: function () {
      return privateAge;
    },
    setName: function (newName) {
      privateName = newName;
    },
    setAge: function (newAge) {
      privateAge = newAge;
    },
  };
}

const person = createPerson("Alice", 30);
console.log(person.getName());
console.log(person.getAge());

person.setName("Bob");
person.setAge(25);

console.log(person.getName());
console.log(person.getAge());
