export const CAR_NAME_MAX_LENGTH = 5;

export const ERROR_MESSAGE = {
  inValidCarArray: "[ERROR] 유효한 자동차 이름이 아닙니다.",
  inValidCarName: `[ERROR] 자동차 이름은 ${CAR_NAME_MAX_LENGTH}자 이하만 가능합니다.`,
  inValidNumber: "[ERROR] 숫자가 잘못된 형식입니다.",
};

export const DELIMITER = ",";

Object.freeze(ERROR_MESSAGE);
