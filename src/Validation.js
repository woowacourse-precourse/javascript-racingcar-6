import { CAR_NAME_ERROR_MESSAGE, RACE_COUNT_ERROR_MESSAGE } from './Messages.js';

export function checkCarName(carName) {
  const pass = carName.indexOf(',') > -1 && carName.split(',').every((car) => car.length <= 5);

  if (!pass) {
    throw new Error(CAR_NAME_ERROR_MESSAGE);
  }
}

export function checkRaceCount(raceCount) {
  const pass = !isNaN(raceCount);

  if (!pass) {
    throw new Error(RACE_COUNT_ERROR_MESSAGE);
  }
}