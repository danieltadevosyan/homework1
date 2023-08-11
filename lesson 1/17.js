// 17  Given an array of cars with properties like make, model, and year, print out the car's details in a
// readable format for given care make.
const cars = [
    {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2023,
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2021,
    },
    {
        make: "Toyota",
        model: "Camry",
        year: 2023,
    },
    {
        make: "Chevrolet",
        model: "Silverado",
        year: 2022,
    },
    {
        make: "Toyota",
        model: "Rav4",
        year: 2023,
    },
];

function printCarInfo(car) {
    return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`;
}

function printCarsByMake(make, cars) {
    const carsByMake = cars.filter(car => car.make === make);

    if (carsByMake.length === 0) {
        return 'No cars found for the specified make.';
    }

    const carInfoStrings = carsByMake.map(printCarInfo);

    return carInfoStrings.join('\n');
}

const inputMake = "Toyota";
const output = printCarsByMake(inputMake, cars);
console.log(output);
