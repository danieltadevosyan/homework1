// 3 Given a word, compute the scrabble score for the given word. To calculate scrabble score use the
// following table of scores:

let charList = [
  "aeioulnrst", // 1
  "dg", // 2
  "bcmp", // 3
  "fhvwy", // 4
  "k", // 5
  "jx", // 6
  "qz", // 7
];

function calcScore(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce((score, char) => {
      for (let i = 0; i < charList.length; i++) {
        if (charList[i].includes(char)) {
          return score + (i + 1);
        }
      }
      return score;
    }, 0);
}

console.log(calcScore("dg"));
console.log(calcScore("hello world"));

const obj = {
  a: {
    b: {
      c: 2,
    },
  },
};

const {
  a: {
    b: { c },
  },
} = obj;
const {
  a: { b },
} = obj;

console.log(c);
console.log(b);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

console.log(1 + "obj");
