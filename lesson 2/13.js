function myUnshift(array, ...elements) {
  return [...elements, ...array];
}

function myShift(array) {
  if (array.length === 0) {
    return undefined;
  }
  const shiftedElement = array[0];
  const newArray = [];
  shiftedElement;
  return { shiftedElement, newArray };
}

function myPop(array) {
  if (array.length === 0) {
    return undefined;
  }
  const poppedElement = array[array.length - 1];
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    myPush(newArray, array[i]);
  }
  return { poppedElement, newArray };
}

function myPush(array, ...elements) {
  return [...array, ...elements];
}

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function myFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
}

function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
