// 19. Given an object representing a bank account with properties like accountNumber, balance, and
// accountHolder. Write functions to deposit and withdraw money from the account


const bankAccount = {
    accountNumber: "123456789",
    balance: 1000,
    accountHolder: "John Doe",
};

function updateBalance(amount, action) {
    if (action === "deposit") {
        if (amount > 0) {
            bankAccount.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${bankAccount.balance}`);
        } else {
            console.log("Invalid deposit amount. Please deposit a positive amount.");
        }
    } else if (action === "withdraw") {
        if (amount > 0 && amount <= bankAccount.balance) {
            bankAccount.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${bankAccount.balance}`);
        } else {
            console.log("Insufficient balance or invalid withdrawal amount.");
        }
    } else {
        console.log("Invalid action. Please use 'deposit' or 'withdraw'.");
    }
}

updateBalance(500, "deposit"); 
updateBalance(200, "withdraw"); 
updateBalance(-100, "deposit"); 
updateBalance(5000, "withdraw");