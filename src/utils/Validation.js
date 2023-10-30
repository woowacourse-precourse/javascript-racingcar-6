import { MESSAGE_ERROR } from "../constants/Message.js";

// 사용자 입력 유효서 검사
export const isValidPlayerInput = (input) => {
  isNumber(input);
};

const isNumber = (input) => {
  const regExp = /^[0-9]+$/;

  if (!regExp.test(input)) {
    throw new Error(MESSAGE_ERROR.errorIsNumber);
  }
};
