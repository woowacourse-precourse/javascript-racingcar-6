import { ERROR_MESSAGES } from './constants.js';
export function validateInputCar(carsText) {
  const carArr = carsText.split(',');
  const set = new Set();

  carArr.forEach((str) => {
    if (str.length > 5) {
      throw new Error(ERROR_MESSAGES.tooLongTextName);
    }
    set.add(str);
  });

  if (set.size !== input.length) {
    throw new Error(ERROR_MESSAGES.sameName);
  }

  return carArr;
}

export function valiateRound(input) {
  const intRound = parseInt(input, 10);
  if (Number.isNaN(intRound)) {
    throw new Error(ERROR_MESSAGES.notNumber);
  }
  return intRound;
}
export function makeSet(carArray) {
  console.log(carArray);
  const carSet = {};
  carArray.map((car) => {
    carSet[car] = 0;
  });
  return carSet;
}
