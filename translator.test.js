import {translateInput} from "./translator";

test("it should translate .- to A", () => {
  //Arrange
  let translation;
  const outcome = "A";
  //Act
  translation = translateInput(".-");
  //Assert
  expect(translation).toBe(outcome);
})
test("it should translate .-. to R", () => {
  //Arrange
  let translation;
  const outcome = "R";
  //Act
  translation = translateInput(".-.");
  //Assert
  expect(translation).toBe(outcome);
})
test("it should translate ..--- to 2", () => {
  //Arrange
  let translation;
  const outcome = "2";
  //Act
  translation = translateInput("..---");
  //Assert
  expect(translation).toBe(outcome);
})
test("it should translate ----- to 0", () => {
  //Arrange
  let translation;
  const outcome = "0";
  //Act
  translation = translateInput("-----");
  //Assert
  expect(translation).toBe(outcome);
})
test("it should translate .... . .-.. .-.. --- to hello", () => {
  //Arrange
  let translation;
  const outcome = "HELLO";
  //Act
  translation = translateInput(".... . .-.. .-.. ---");
  //Assert
  expect(translation).toBe(outcome);
})
test("it should translate .... --- .-- / .- .-. . / -.-- --- ..- to how are you", () => {
  //Arrange
  let translation;
  const outcome = "HOW ARE YOU";
  //Act
  translation = translateInput(".... --- .-- / .- .-. . / -.-- --- ..-");
  //Assert
  expect(translation).toBe(outcome);
})