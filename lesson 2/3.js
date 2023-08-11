// 3 Given a word, compute the scrabble score for the given word. To calculate scrabble score use the
// following table of scores:

let charList = [
    "aeioulnrst",//1   
    "dg",//2
    "bcmp",//3
    "fhvwy",//4
    "k",//5
    "jx",//6
    "qz"//7
]   


function calcScore(str) {
    let score = 0;

    for (const char of str.toLowerCase()) {
        for (let i = 0; i < charList.length; i++) {
            if (charList[i].includes(char)) {
                score += i + 1 ;
            }
        }
    }
    return score;
}

console.log(calcScore("dg"));
console.log(calcScore("hello world"));