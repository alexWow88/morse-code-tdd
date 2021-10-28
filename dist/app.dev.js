"use strict";

var _translator = require("./translator.js");

var translatorForm = document.querySelector(".morse-code-translator");
var translatorInput = document.querySelector(".morse-code-translator__input");

var displayTranslationFunction = function displayTranslationFunction(e) {
  e.preventDefault();
  return translatorInput.value = (0, _translator.translateInput)(translatorInput.value);
};

translatorForm.addEventListener("submit", displayTranslationFunction);