function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];

  this.eat = function (food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
      console.log(`${this.name} eat ${food}`);
    } else {
      console.log(`${this.name} cant eat more`);
    }
  };

  this.poop = function () {
    this.stomach = [];
    console.log(`${this.name} s poop`);
  };

  this.toString = function () {
    return `${this.name}, ${this.age} age`;
  };
}

const person1 = new Person("Angel", 50);
console.log(person1.toString());

person1.eat("apple");
person1.eat("banana");
console.log(person1.stomach);

person1.poop();
console.log(person1.stomach);

person1.eat("pie");
person1.eat("pizza");
person1.eat("soup");
person1.eat("spaghetti");
person1.eat("rice");
person1.eat("buckwheat");
person1.eat("cutlet");
person1.eat("salad");
person1.eat("cake");
person1.eat("ice cream");
person1.eat("tea");
