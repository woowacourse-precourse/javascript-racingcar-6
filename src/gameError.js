import { INPUT_ERROR } from './message/errorMessage.js';
import { GAME_DEFAULT } from './default/gameDefault.js';

export const nameError = (cars) => {
  cars.forEach((car) => {
    if (car.length > GAME_DEFAULT.nameLength) {
      //길이가 5 이하인지 판별
      throw new Error(INPUT_ERROR.lengthError);
    }
    if (car.trim().length !== car.length) {
      //공백이 있는지 판별
      throw new Error(INPUT_ERROR.spaceError);
    }
  });
};

export const numberError = (gameAttempt) => {
  const isNumber = Number(gameAttempt);

  if (isNaN(isNumber)) {
    //숫자인지 판별
    throw new Error(INPUT_ERROR.numError);
  }
  if (isNumber <= 0) {
    //양수인지 판별
    throw new Error(INPUT_ERROR.numValueError);
  }
  if (gameAttempt.trim().length !== gameAttempt.length) {
    //공백이 있는지 판별
    throw new Error(INPUT_ERROR.spaceError);
  }
};
