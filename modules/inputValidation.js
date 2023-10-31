import { MESSAGE, RANGE_NUMBER } from './constant';

const checkCarNamesHaveBlank = (carNames) =>
  carNames.includes('') || carNames.includes(' ');

const checkCarNameIsOverFive = (carNames) => {
  const inputHaveOverFive = carNames.find(
    (carName) => carName.length > RANGE_NUMBER.carName
  );
  return inputHaveOverFive;
};

const checkCarNameWithBlank = (carNames) => {
  const inputWithBlank = carNames.filter((car) => car.includes(' '));
  return inputWithBlank.length !== 0;
};

const checkCarNamesAreDuplicated = (carNames) => {
  const carNumber = carNames.length;
  const nonDuplicatedCarNames = [...new Set(carNames)];

  return carNumber !== nonDuplicatedCarNames.length;
};

const checkCarNamesAreValid = (userInput) => {
  const input = userInput.split(',');

  const inputHaveOverName = checkCarNameIsOverFive(input);
  const inputHaveBlank = checkCarNamesHaveBlank(input);
  const inputWithBlank = checkCarNameWithBlank(input);
  const inputsAreDuplicated = checkCarNamesAreDuplicated(input);

  if (
    inputHaveOverName ||
    inputHaveBlank ||
    inputWithBlank ||
    inputsAreDuplicated
  ) {
    throw new Error(MESSAGE.error);
  }
  return input;
};

const checkTryNumberWithBlank = (userInput) => {
  const inputHaveBlank = userInput.includes(' ');
  return inputHaveBlank;
};

const checkTryNumberIsCharacter = (userInput) =>
  Number.isNaN(Number(userInput)) || Number(userInput) === 0;

const checkTryNumberIsValid = (userInput) => {
  const inputHaveBlank = checkTryNumberWithBlank(userInput);
  const inputIsCharacter = checkTryNumberIsCharacter(userInput);

  if (inputHaveBlank || inputIsCharacter) {
    throw new Error(MESSAGE.error);
  }
};

export { checkCarNamesAreValid, checkTryNumberIsValid };
