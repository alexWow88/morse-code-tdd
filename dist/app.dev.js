"use strict";

var _translator = require("./translator.js");

var translatorForm = document.querySelector(".morse-code-translator");
var translatorInput = document.querySelector(".morse-code-translator__input");
var englishHeading = document.querySelector(".english-heading");
var morseCodeHeading = document.querySelector(".morse-code-heading");
var translationField = document.getElementById("morse-code-translation");
morseCodeHeading.classList.add("morse-active");

var displayTranslationFunction = function displayTranslationFunction(e) {
  e.preventDefault();
  return translationField.innerHTML = (0, _translator.translateInput)(translatorInput.value);
};

var switchToEnglish = function switchToEnglish() {
  englishHeading.classList.add("english-active");
  morseCodeHeading.classList.remove("morse-active");
};

var switchToMorse = function switchToMorse() {
  morseCodeHeading.classList.add("morse-active");
  englishHeading.classList.remove("english-active");
};

translatorForm.addEventListener("submit", displayTranslationFunction);
englishHeading.addEventListener("click", switchToEnglish);
morseCodeHeading.addEventListener("click", switchToMorse);