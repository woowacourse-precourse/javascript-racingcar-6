import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants/message.js";
import {
  hasSameName,
  isIntegerNumber,
  isNoInput,
  isValidNameInput,
  isValidRoundInput,
} from "./validation.js";

export const getCarNamesAndCheck = async () => {
  const carsInput = await Console.readLineAsync(GAME_MESSAGE.ASK_CARS_NAME);
  isNoInput(carsInput);
  removeLastComma(carsInput);
  const carArr = carsInput.split(",").map((name) => name.trim());

  isValidNameInput(carArr);
  hasSameName(carArr);
  return carArr;
};

//인풋 마지막에 ,를 넣으면 자동 삭제
export const removeLastComma = (carsInput) => {
  if (carsInput.endsWith(",")) {
    return carsInput.slice(0, -1);
  }
  return carsInput;
};

export const getRoundAndCheck = async () => {
  const roundInput = await Console.readLineAsync(GAME_MESSAGE.ASK_COUNT_NUMBER);
  isNoInput(roundInput);
  const round = parseFloat(roundInput);
  isValidRoundInput(round);
  isIntegerNumber(round);
  return round;
};
