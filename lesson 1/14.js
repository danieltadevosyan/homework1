//14 Output the books sorted by the percent in descending order which readStatus is true

const readers = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
];

const sortedReaders = readers
    .filter(reader => reader.readStatus === true)
    .sort((a, b) => b.percent - a.percent);

console.log(sortedReaders);