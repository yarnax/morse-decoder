const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //console.log(expr)
    console.log(expr.length)
    let slicedArray = [];
    for (i=0; i<(expr.length/10); i++) {
        slicedArray.push(expr.slice(i*10, (i+1)*10))
    }
    //console.log(slicedArray)
    slicedArray.forEach((letter, index) => {
        if (letter==="**********") {
            slicedArray[index]=" ";
        } else {
            let dashLetter = "";
            for (i=0;i<5;i++) {
                if (letter[i*2]==="0" && letter[i*2+1]==="0") {
                    dashLetter +="";
                }
                if (letter[i*2]==="1" && letter[i*2+1]==="0") {
                    dashLetter +=".";
                }
                if (letter[i*2]==="1" && letter[i*2+1]==="1") {
                    dashLetter +="-";
                }
            }
            slicedArray[index]=dashLetter;
        }
        
        
    })
    //console.log(slicedArray)
    let answer = "";
    slicedArray.forEach((sign, index) => {
        if (sign===" ") {
            answer += " ";
        } else {
            answer += MORSE_TABLE[sign];
        }
        
    })
    console.log(answer)
    return answer;



}

module.exports = {
    decode
}