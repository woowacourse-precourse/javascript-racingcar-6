import { Console } from "@woowacourse/mission-utils";
import { carsName } from "./user/carsName.js";
import { gaemProgress } from "./util/gameProgress.js";
import { playCount } from "./user/playCount.js";
import { randomCarsNumber } from "./randomCarsNumber.js";
import { calculatedResult } from "./util/calculatedResult.js";

export const racingGame = async () => {
  const carsNameArray = await carsName();
  const gamePlayCount = await playCount();

  Console.print(`실행 결과`);

  for (let i = 1; i <= gamePlayCount; i++) {
    const carsRandomArray = randomCarsNumber(carsNameArray.length);

    gaemProgress(carsNameArray, carsRandomArray);

    Console.print(" ");
  }

  const result = calculatedResult(carsNameArray);

  Console.print(
    `최종 우승자 : ${result.length !== 1 ? result.join(", ") : result[0]}`
  );
};
