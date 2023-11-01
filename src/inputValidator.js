import NUMBER from "../constants/NUMBER.js";

export const isNumber = (input) => {
  return !isNaN(input);
};

export const isNotEmpty = (input) => {
  return input !== "";
};

export const isNotEmptyList = (inputList) => {
  return (
    Array.isArray(inputList) && inputList.every((value) => isNotEmpty(value))
  );
};

export const isValidateCarList = (carNamesList) => {
  return carNamesList.every(
    (carName) =>
      carName.length <= NUMBER.CAR_NAME.MAX &&
      carName.length >= NUMBER.CAR_NAME.MIN
  );
};

export const isValidateCount = (count) => {
  return count >= NUMBER.COUNT.MIN;
};
