function Calculator() {
  this.add = (x, y) => x + y;
  this.subtract = (x, y) => x - y;
  this.multiply = (x, y) => x * y;
  this.divide = (x, y) => x / y;
}

const calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
