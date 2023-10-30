import { INPUT_ERROR } from './message/errorMessage.js';
import { GAME_DEFAULT } from './default/gameDefault.js';

export const nameError = (cars) => {
  cars.forEach((car) => {
    if (car.length > GAME_DEFAULT.nameLength) {
      throw new Error(INPUT_ERROR.lengthError);
    }
    if (car.trim().length !== car.length) {
      throw new Error(INPUT_ERROR.spaceError);
    }
  });
};

export const numberError = (gameAttempt) => {
  if (isNaN(Number(gameAttempt))) {
    throw new Error(INPUT_ERROR.numError);
  }
  if (gameAttempt.trim().length !== gameAttempt.length) {
    throw new Error(INPUT_ERROR.spaceError);
  }
};
