import { Console } from "@woowacourse/mission-utils";
import { carsName } from "./carsName.js";
import { gaemProgress } from "./gameProgress.js";
import { playCount } from "./playCount.js";
import { randomCarsNumber } from "./randomCarsNumber.js";

export const racingGame = async () => {
  const carsNameArray = await carsName();
  const gamePlayCount = await playCount();

  for (let i = 1; i <= gamePlayCount; i++) {
    const carsRandomArray = randomCarsNumber(carsNameArray.length);
    gaemProgress(carsNameArray, carsRandomArray);
    Console.print(" ")
  }

  return ;
};
