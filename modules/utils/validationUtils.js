import { RANGE_NUMBER } from '../constant';

const validationUtils = {
  checkCarNamesHaveBlank: (carNames) =>
    carNames.includes('') || carNames.includes(' '),

  checkCarNameIsOverFive: (carNames) => {
    const inputHaveOverFive = carNames.find(
      (carName) => carName.length > RANGE_NUMBER.carName
    );
    return inputHaveOverFive;
  },

  checkCarNameWithBlank: (carNames) => {
    const inputWithBlank = carNames.filter((car) => car.includes(' '));
    return inputWithBlank.length !== 0;
  },

  checkCarNamesAreDuplicated: (carNames) => {
    const carNumber = carNames.length;
    const nonDuplicatedCarNames = [...new Set(carNames)];

    return carNumber !== nonDuplicatedCarNames.length;
  },

  checkTryNumberWithBlank: (userInput) => {
    const inputHaveBlank = userInput.includes(' ');
    return inputHaveBlank;
  },

  checkTryNumberIsCharacter: (userInput) =>
    Number.isNaN(Number(userInput)) || Number(userInput) === 0,
};

export default validationUtils;
