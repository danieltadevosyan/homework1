// 18. Given two objects representing rectangles with properties width and height, write a function to
// compare if they have the same area.


function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}

function areRectanglesSameArea(rectangle1, rectangle2) {
    return calculateArea(rectangle1) === calculateArea(rectangle2);
}

const rectangle1 = {
    width: 5,
    height: 10,
};

const rectangle2 = {
    width: 10,
    height: 5,
};

const rectangle3 = {
    width: 6,
    height: 8,
};

console.log(areRectanglesSameArea(rectangle1, rectangle2));
console.log(areRectanglesSameArea(rectangle1, rectangle3));