"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateInput = void 0;

var translateInput = function translateInput(morseEnglishInput) {
  var englishHeading = document.querySelector(".english-heading");
  var morseCodeHeading = document.querySelector(".morse-code-heading");
  var answer = "";
  var dictionaryArray = [["A", ".-"], ["B", "-..."], ["C", "-.-."], ["D", "-.."], ["E", "."], ["F", "..-."], ["G", "--."], ["H", "...."], ["I", ".."], ["J", ".---"], ["K", "-.-"], ["L", ".-.."], ["M", "--"], ["N", "-."], ["O", "---"], ["P", ".--."], ["Q", "--.-"], ["R", ".-."], ["S", "..."], ["T", "-"], ["U", "..-"], ["V", "...-"], ["W", ".--"], ["X", "-..-"], ["Y", "-.--"], ["Z", "--.."], ["1", ".----"], ["2", "..---"], ["3", "...--"], ["4", "....-"], ["5", "....."], ["6", "-...."], ["7", "--..."], ["8", "---.."], ["9", "----."], ["0", "-----"], [" ", "/"]];

  if (morseCodeHeading.classList.contains("morse-active")) {
    var arrayOfStrings = morseEnglishInput.split(" ");

    for (var index = 0; index < arrayOfStrings.length; index++) {
      for (var j = 0; j < dictionaryArray.length; j++) {
        if (arrayOfStrings[index] == dictionaryArray[j][1]) {
          answer = answer.concat(dictionaryArray[j][0]);
        }
      }
    }

    return answer;
  }

  if (englishHeading.classList.contains("english-active")) {
    var _arrayOfStrings = morseEnglishInput.split("");

    for (var _index = 0; _index < _arrayOfStrings.length; _index++) {
      for (var _j = 0; _j < dictionaryArray.length; _j++) {
        if (_arrayOfStrings[_index] == dictionaryArray[_j][0]) {
          answer = answer.concat(dictionaryArray[_j][1]);
          answer = answer.concat(" ");
        }
      }
    }

    return answer;
  }
};

exports.translateInput = translateInput;