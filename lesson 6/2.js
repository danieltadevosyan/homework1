function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.compareAge = function compareAge(obj) {
  if (obj.age > this.age) {
    console.log(`${obj.name} is older than me`);
  } else if (obj.age < this.age) {
    console.log(`${obj.name} is younger than me`);
  } else {
    console.log(`${obj.name} is the same age as me`);
  }
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1);
console.log(p2);
console.log(p3);

p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);
