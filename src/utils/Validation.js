import { GAME_CAR_NAME_LENGTH } from "../constants/GameSetting.js";
import { MESSAGE_ERROR } from "../constants/Message.js";

// 사용자 입력 유효성 검사
export const isValidPlayerInput = (input) => {
  isNumber(input);
};

const isNumber = (input) => {
  const regExp = /^[0-9]+$/;

  if (!regExp.test(input)) {
    throw new Error(MESSAGE_ERROR.errorIsNumber);
  }
};

// 차 입력 유효성 검사
export const isValidCarName = (input) => {
  const splitInput = input.split(",");

  splitInput.forEach((carName) => {
    if (carName.length > GAME_CAR_NAME_LENGTH) {
      throw new Error(MESSAGE_ERROR.errorCarNameLength);
    }
    if (carName === "" || carName === " ") {
      throw new Error(MESSAGE_ERROR.errorCarNameLength);
    }
  });

  const setInput = new Set(splitInput);
  if (setInput.size !== splitInput.length) {
    throw new Error(MESSAGE_ERROR.errorCarNameDuplicate);
  }
};
