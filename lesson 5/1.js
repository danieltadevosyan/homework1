// 19. Given an object representing a bank account with properties like accountNumber, balance, and
// accountHolder. Write functions to deposit and withdraw money from the account

const bankAccount = {
  accountNumber: "123456789",
  balance: 1000,
  accountHolder: "John Doe",
};

function withdraw(amount) {
  if (amount < this.balance) {
    return (this.balance -= amount);
  }
}
function deposit(amount) {
  return (this.balance += amount);
}

Object.prototype.withdraw = withdraw;
Object.prototype.deposit = deposit;

console.log(bankAccount.deposit(100));
console.log(bankAccount.withdraw(200));
