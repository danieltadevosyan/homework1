//6 Convert base-2 number to base-10

let bin = "010" ;
let bin1 = "10010" ;
let bin2 = "0101011" ;


function createCharacterArray(str) {
    const charArray = [];
  
    for (const char of str) {
      charArray.push(char);
    }
        let module = 1;
        let sum =  0;
        for (let i = 1; i < charArray.length; i++) {
            module = module*2;           
        }
        for (let j = 0; j < charArray.length; j++) {
            sum =  charArray[j] * module + sum;
            module = module/2;    
        }
        return sum;
  }


  console.log(createCharacterArray(bin))
  console.log(createCharacterArray(bin1))
  console.log(createCharacterArray(bin2))