export const translateInput = (morseEnglishInput) => {
  const englishHeading = document.querySelector(".english-heading");
  const morseCodeHeading = document.querySelector(".morse-code-heading");

  let answer = "";

  const dictionaryArray = [
    ["A", ".-"],["B", "-..."],["C", "-.-."],
    ["D", "-.."],["E", "."],["F", "..-."],
    ["G", "--."],["H", "...."],["I", ".."],
    ["J", ".---"],["K", "-.-"],["L", ".-.."],
    ["M", "--"],["N", "-."],["O", "---"],
    ["P", ".--."],["Q", "--.-"],["R", ".-."],
    ["S", "..."],["T", "-"],["U", "..-"],
    ["V", "...-"],["W", ".--"],["X", "-..-"],
    ["Y", "-.--"],["Z", "--.."],["1", ".----"],
    ["2", "..---"],["3", "...--"],["4", "....-"],
    ["5", "....."],["6", "-...."],["7", "--..."],
    ["8", "---.."],["9", "----."],["0", "-----"],
    [" ", "/"]
  ]

  if (morseCodeHeading.classList.contains("morse-active")) {

    const arrayOfStrings = morseEnglishInput.split(" ");

    for (let index = 0; index < arrayOfStrings.length; index++) {
      for (let j = 0; j < dictionaryArray.length; j++) {
        if (arrayOfStrings[index] == dictionaryArray[j][1]) {
          answer = answer.concat(dictionaryArray[j][0])
        }
      }
    }

    return answer;
  } 

  if (englishHeading.classList.contains("english-active")) {

    const arrayOfStrings = morseEnglishInput.toUpperCase().split("");

    for (let index = 0; index < arrayOfStrings.length; index++) {
      for (let j = 0; j < dictionaryArray.length; j++) {
        if (arrayOfStrings[index] == dictionaryArray[j][0]) {
          answer = answer.concat(dictionaryArray[j][1])
          answer = answer.concat(" ")
        }
      }
    }

    return answer;
  } 
}
;