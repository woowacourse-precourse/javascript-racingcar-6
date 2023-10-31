import {
  validateBetweenOneAndNine,
  validateName,
  validateNoneZeroLengthInput,
  validateNumber,
} from './validation.js';

export function parseNames(str) {
  validateNoneZeroLengthInput(str);

  const nameArr = str.split(',');
  nameArr.forEach(validateName);

  return nameArr;
}

export function parseNumber(str) {
  validateNoneZeroLengthInput(str);

  const number = Number(str);
  validateNumber(number);

  return number;
}

export function getDistanceToMove(randomNumber) {
  validateBetweenOneAndNine(randomNumber);

  if (randomNumber < 3) return 0;

  return 1;
}

export function getDistanceString(distanceNumber) {
  return '-'.repeat(distanceNumber);
}

export function getWinners(cars) {
  const sortedCars = cars.slice().sort((a, b) => b.distance - a.distance);
  const winners = sortedCars
    .filter((car) => sortedCars[0].distance === car.distance)
    .map((car) => car.name);

  return winners;
}
