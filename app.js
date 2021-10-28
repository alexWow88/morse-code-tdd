import {translateInput} from "./translator.js";

const translatorForm = document.querySelector(".morse-code-translator");
const translatorInput = document.querySelector(".morse-code-translator__input");
const englishHeading = document.querySelector(".english-heading");
const morseCodeHeading = document.querySelector(".morse-code-heading");
const translationField = document.getElementById("morse-code-translation");

morseCodeHeading.classList.add("morse-active")

const displayTranslationFunction = (e) => {
  e.preventDefault();
  return translationField.innerHTML = translateInput(translatorInput.value)
}

const switchToEnglish = () => {
  englishHeading.classList.add("english-active")
  morseCodeHeading.classList.remove("morse-active")
}

const switchToMorse = () => {
  morseCodeHeading.classList.add("morse-active")
  englishHeading.classList.remove("english-active")
}

translatorForm.addEventListener("submit", displayTranslationFunction);
englishHeading.addEventListener("click", switchToEnglish);
morseCodeHeading.addEventListener("click", switchToMorse);