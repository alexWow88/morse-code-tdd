let morseEnglishInput = "....";


const translateInput = (morseEnglishInput) => {
  let answer = "";
  const arrayOfStrings = morseEnglishInput.split(" ");
  console.log(arrayOfStrings);
  for (let index = 0; index < arrayOfStrings.length; index++) {
    if (arrayOfStrings[index] == ".-"){
      answer = answer.concat("A");
    } else if (arrayOfStrings[index] == "-..."){
      answer = answer.concat("B");
    } else if (arrayOfStrings[index] == "-.-."){
      answer = answer.concat("C");
    } else if (arrayOfStrings[index] == "-.."){
      answer = answer.concat("D");
    } else if (arrayOfStrings[index] == "."){
      answer = answer.concat("E");
    } else if (arrayOfStrings[index] == "..-."){
      answer = answer.concat("F");
    } else if (arrayOfStrings[index] == "--."){
      answer = answer.concat("G");
    } else if (arrayOfStrings[index] == "...."){
      answer = answer.concat("H");
    } else if (arrayOfStrings[index] == ".."){
      answer = answer.concat("I");
    } else if (arrayOfStrings[index] == ".---"){
      answer = answer.concat("J");
    } else if (arrayOfStrings[index] == "-.-"){
      answer = answer.concat("K");
    } else if (arrayOfStrings[index] == ".-.."){
      answer = answer.concat("L");
    } else if (arrayOfStrings[index] == "--"){
      answer = answer.concat("M");
    } else if (arrayOfStrings[index] == "-."){
      answer = answer.concat("N");
    } else if (arrayOfStrings[index] == "---"){
      answer = answer.concat("O");
    } else if (arrayOfStrings[index] == ".--."){
      answer = answer.concat("P");
    } else if (arrayOfStrings[index] == "--.-"){
      answer = answer.concat("Q");
    } else if (arrayOfStrings[index] == ".-."){
      answer = answer.concat("R");
    } else if (arrayOfStrings[index] == "..."){
      answer = answer.concat("S");
    } else if (arrayOfStrings[index] == "-"){
      answer = answer.concat("T");
    } else if (arrayOfStrings[index] == "..-"){
      answer = answer.concat("U");
    } else if (arrayOfStrings[index] == "...-"){
      answer = answer.concat("V");
    } else if (arrayOfStrings[index] == ".--"){
      answer = answer.concat("W");
    } else if (arrayOfStrings[index] == "-..-"){
      answer = answer.concat("X");
    } else if (arrayOfStrings[index] == "-.--"){
      answer = answer.concat("Y");
    } else if (arrayOfStrings[index] == "--.."){
      answer = answer.concat("Z");
    } else if (arrayOfStrings[index] == ".----"){
      answer = answer.concat("1");
    } else if (arrayOfStrings[index] == "..---"){
      answer = answer.concat("2");
    } else if (arrayOfStrings[index] == "...--"){
      answer = answer.concat("3");
    } else if (arrayOfStrings[index] == "....-"){
      answer = answer.concat("4");
    } else if (arrayOfStrings[index] == "....."){
      answer = answer.concat("5");
    } else if (arrayOfStrings[index] == "-...."){
      answer = answer.concat("6");
    } else if (arrayOfStrings[index] == "--..."){
      answer = answer.concat("7");
    } else if (arrayOfStrings[index] == "---.."){
      answer = answer.concat("8");
    } else if (arrayOfStrings[index] == "----."){
      answer = answer.concat("9");
    } else if (arrayOfStrings[index] == "-----"){
      answer = answer.concat("0");
    }
  } 
  return answer;
}
;

console.log(translateInput("...."));