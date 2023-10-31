import { MissionUtils } from "@woowacourse/mission-utils";
import {
  START_GAME_MESSAGE,
  TRIAL_COUNT_MESSAGE,
  NOT_INCLUDED_COMMA_USER_INPUT_ERROR,
  CARS_NAME_LENGTH_USER_INPUT_ERROR,
  NOT_NUMBER_TYPE_USER_INPUT_ERROR,
  SAME_NAME_USER_INPUT_ERROR,
} from "./constants/messages.js";

const getUserInput = async (command) => {
  try {
    return await MissionUtils.Console.readLineAsync(command);
  } catch (error) {
    throw new Error(error);
  }
};

export const checkCarsNameCount = (carNamesString) => {
  if (!carNamesString.includes(","))
    throw new Error(NOT_INCLUDED_COMMA_USER_INPUT_ERROR);
};

export const splitCarsArray = (carsNameString) => {
  return carsNameString.split(",");
};

const checkNameLength = (carName) => {
  if (carName.length < 1 || carName.length > 5)
    throw new Error(CARS_NAME_LENGTH_USER_INPUT_ERROR);
};

export const checkCarsArray = (carsNameArray) => {
  carsNameArray.forEach((carName) => checkNameLength(carName));
};

const checkCarsDifferName = (carsNameArray) => {
  const nameSet = new Set(carsNameArray);
  if (nameSet.size !== carsNameArray.length)
    throw new Error(SAME_NAME_USER_INPUT_ERROR);
};

const convertStringToNumber = (userInputString) => {
  return Number(userInputString);
};

export const checkInputNumberType = (userInputString) => {
  if (isNaN(userInputString)) throw new Error(NOT_NUMBER_TYPE_USER_INPUT_ERROR);
  if (!userInputString.length) {
    throw new Error(NOT_NUMBER_TYPE_USER_INPUT_ERROR);
  }
  const userInputNumber = convertStringToNumber(userInputString);
  if (userInputNumber < 1) {
    throw new Error(NOT_NUMBER_TYPE_USER_INPUT_ERROR);
  }
  if (!Number.isInteger(userInputNumber)) {
    throw new Error(NOT_NUMBER_TYPE_USER_INPUT_ERROR);
  }
  return userInputNumber;
};

export const userInputCarsName = async () => {
  const carsNameString = await getUserInput(START_GAME_MESSAGE);
  checkCarsNameCount(carsNameString);
  const carsNameArray = splitCarsArray(carsNameString);
  checkCarsArray(carsNameArray);
  checkCarsDifferName(carsNameArray);
  return carsNameArray;
};

export const userInputTrialCount = async () => {
  const trialCount = await getUserInput(TRIAL_COUNT_MESSAGE);
  return checkInputNumberType(trialCount);
};
