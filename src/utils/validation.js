import { CHECK } from "./constants.js";

const isCarNameLengthValid = (carNames) => {
  return carNames.every(
    (carName) => carName.length <= CHECK.MAX_CAR_NAME_LENGTH
  );
};

const isNumberOfCarsValid = (carNames) => {
  return carNames.length >= CHECK.MIN_NUMBER_OF_CARS;
};

const areCarNamesUnique = (carNames) => {
  return new Set(carNames).size === carNames.length;
};

const isNaturalNumber = (input) => {
  const number = Number(input);
  return Number.isInteger(number) && number >= 1;
};

export {
  isCarNameLengthValid,
  isNumberOfCarsValid,
  areCarNamesUnique,
  isNaturalNumber,
};
