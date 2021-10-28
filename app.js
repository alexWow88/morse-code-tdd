import {translateInput} from "./translator.js";

const translatorForm = document.querySelector(".morse-code-translator");
const translatorInput = document.querySelector(".morse-code-translator__input");

const displayTranslationFunction = (e) => {
  e.preventDefault();
  return translatorInput.value = translateInput(translatorInput.value)
}

translatorForm.addEventListener("submit", displayTranslationFunction);
