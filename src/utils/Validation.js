import { GAME_CAR_NAME_LENGTH } from '../constants/GameSetting.js';
import { MESSAGE_ERROR } from '../constants/Message.js';

const isNumber = (input) => {
  const regExp = /^[0-9]+$/;

  if (!regExp.test(input)) {
    throw new Error(MESSAGE_ERROR.errorIsNumber);
  }
};

export function isValidPlayerInput(input) {
  isNumber(input);
}

const isCarName = (inputArr) => {
  const regExp = /\s/g;

  inputArr.forEach((carName) => {
    if (carName.length > GAME_CAR_NAME_LENGTH) {
      throw new Error(MESSAGE_ERROR.errorCarNameLength);
    }
    if (regExp.test(carName) || carName === '') {
      throw new Error(MESSAGE_ERROR.errorCarNotValid);
    }
  });
};

const isCarDuplicate = (inputArr) => {
  const setInput = new Set(inputArr);
  if (setInput.size !== inputArr.length) {
    throw new Error(MESSAGE_ERROR.errorCarNameDuplicate);
  }
};

export function isValidCarName(input) {
  const inputArr = input.split(',');

  isCarName(inputArr);
  isCarDuplicate(inputArr);
}
