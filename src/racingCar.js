import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR_MSG, GAME_MSG } from "./message";

export const startGame = async () => {
  const carNames = await getCarsName();
  const tryTimes = await getTryTimes();
  printExecutionResult(carNames, tryTimes);
};

const getCarsName = async () => {
  const cars = await Console.readLineAsync(GAME_MSG.GET_CARS_NAME);
  const carNames = cars.split(",");
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > 5) {
      throw new Error(ERROR_MSG.CAR_NAME_OVER_LENGTH);
    }
  }
  for (let i = 0; i < carNames.length; i++) {
    carNames[i] = carNames[i] + " : ";
  }
  return carNames;
};

const getTryTimes = async () => {
  try {
    const tryTimes = await Console.readLineAsync(GAME_MSG.GET_TRY_NUMBER);
    if (isNaN(tryTimes)) {
      throw new Error(ERROR_MSG.TRY_TIMES_NUMBER);
    }
    return tryTimes;
  } catch (error) {
    return error;
  }
};

const printExecutionResult = (carNames, tryTimes) => {
  Console.print(GAME_MSG.EXECUTION_RESULT);
  while (tryTimes > 0) {
    getExecution(carNames);
    Console.print(tryTimes);
    Console.print(carNames);
    tryTimes--;
  }
};

const getExecution = (carNames) => {
  for (let i = 0; i < carNames.length; i++) {
    if (getRandomNumber == true) {
      carNames[i] = carNames[i] + "-";
    }
  }
};

const getRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (randomNumber > 3) {
    console.log("random:" + randomNumber);
    return true;
  }
  return false;
};

const endGame = () => {
  return;
};
