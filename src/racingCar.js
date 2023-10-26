import { Console } from "@woowacourse/mission-utils";
import { ERROR_MSG, GAME_MSG } from "./message";

export const startGame = () => {
  getCarsName();
};

const getCarsName = async () => {
  const cars = await Console.readLineAsync(GAME_MSG.GET_CARS_NAME);
  Console.print(cars);
  const carNames = cars.split(",");
  Console.print(carNames);
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > 5) {
      throw new Error(ERROR_MSG.CAR_NAME_OVER_LENGTH);
    }
  }
  getTryTimes();
};

const getTryTimes = async () => {
  const tryTimes = Number(await Console.readLineAsync(GAME_MSG.GET_TRY_NUMBER));
  if (isNaN(tryTimes)) {
    throw new Error(ERROR_MSG.TRY_TIMES_NUMBER);
  }
};

const endGame = () => {
  return;
};
