// Write a function which calculator average age of user (your function must use reduce method)

function getAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    const averageAge = totalAge / users.length;

    return averageAge;
}

const users = [
    {
        name: "John Doe",
        age: 30,    
        isAdmin: false,
    },
    {
        name: "Jane Smith",
        age: 25,
        isAdmin: true,
    },
    {
        name: "Bob Johnson",
        age: 40,
        isAdmin: false,
    },
];

const averageAge = getAverageAge(users);
console.log(averageAge); 
