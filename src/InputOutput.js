import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE } from "./Message.js";

//자동차 이름을 입력받는 함수
const isUnderTwo = (carNames) => {
  return carNames.length < 2;
};

const isLogngName = (carNames) => {
  return carNames.some((carName) => carName.length > 5);
};

const isDuplicate = (carNames) => {};

export const validateCarNames = (carNames) => {
  if (isUnderTwo(carNames)) {
    throw new Error(ERROR_MESSAGE.DISABLE_RACE);
  }
  if (isLogngName(carNames)) {
    throw new Error(ERROR_MESSAGE.LONG_CARNAME);
  }
  return carNames;
};

//시도할 회수를 입력받는 함수
export const validateRound = (round) => {
  if (round < 1) {
    throw new Error(ERROR_MESSAGE.INVALID_ROUND);
  }
  return round;
};
